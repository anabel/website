---
title: Cómo enlazar dinámicamente imágenes en Vue(press)
date: 2020-02-29
layout: Post
thumbnail: {
  name: vuepress_logo.png, 
  alt: Logo de vuepress, 
  style: center }
tags: ["programación", "webpack", "imágenes", "tips"]
excerpt: Aprende a gestionar de forma dinámica los recursos de tu proyecto vuepress usando webpack.
---

<div class="flex justify-center flex-grow-0 flex-wrap">
  <img class="h-64" src="~@images/vuepress_logo.png" alt="Logo de Vuepress"/>
  <img class="h-64" src="~@images/webpack_logo.svg" alt="Logo de Webpack"/>
</div>

# Cómo enlazar dinámicamente imágenes en Vue(press)

[En la documentación oficial de Vuepress](https://v1.vuepress.vuejs.org/guide/assets.html) te explican brevemente como enlazar recursos en tu proyecto usando urls relativas o alias de Webpack.

En algunos casos, sin embargo, puedes querer crear dinámicamente esas urls para disponer de un componente genérico que te cree una galería, un slideshow. o [un elemento picture](https://github.com/anabel/website/blob/master/docs/.vuepress/components/Photo.vue) con varias imágenes preparadas para distintas resoluciones. ¿Cómo podríamos enlazar esos recursos en este escenario, en el que el componente genera las urls dinámicamente en base a ciertas reglas?

<h2>Crear un alias de webpack</h2>

En primer lugar crearíamos un alias de webpack tal y como nos indica la guía de vuepress:

```js module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': 'path/to/some/dir'
      }
    }
  }
}
```

## Formas de utilizar el alias de webpack

Este alias podríamos usarlo directamente para generar la url de nuestros recursos en ficheros md:

```md
![An image](~@alias/filename.jpg)
```

```html
<img src="~@alias/filename.jpg" />
```

O de una forma similar en componentes de vue:

```html
<template>
  <img
    src="~@alias/filename.jpg"
    alt="escribir la url directamente en el atributo src"
  />
</template>
```

También podríamos importarlos como una propiedad del componente:

```html
<template>
  <img
    :src="importedImage"
    alt="importar una imagen como propiedad del componente"
  />
</template>
```

```js
<script>
import im from "@alias/filename.jpg";
export default {
  data() {
    return {
      importedImage: importedImage
    };
  }
}
</script>
```

El problema radica en que todas estas alternativas implican que se conoce previamente el recurso que se va a utilizar, información de la que no disponemos si lo que queremos es un componente genérico que podamos reutilizar; Necesitamos poder importar esa imagen dinámicamente.

## Cómo importar la imagen dinámicamente

Para importar cualquier imagen tendríamos que hacer uso de la sentencia _require_ para conseguir que se incluya dentro del árbol de dependencias que genera webpack:

```html
<template>
  <img :src="imageUrl(filename)" alt="generando la url dinámicamente" />
</template>
```

```js
<script>
export default {
  imageUrl(filename) {
    try {
      return require("@images/" + filename);
    } catch (error) {}
  }
}
</script>
```

**El path debe construirse dentro del _require_** para que webpack pueda parsear la expresión en tiempo de compilación y procese qué ficheros podría potencialmente llegar a necesitar y los importe.

Es decir, que esto otro, por ejemplo, no funcionaría:

```html
<template>
  <img :src="imageUrl(filename)" alt="generando la url dinámicamente" />
</template>
```

```js
<script>
export default {
  imageUrl(filename) {
    try {
      let url = "@images/" + filename;
      return require(url);
    } catch (error) {}
  }
}
</script>
```

## Referencias

[Webpack :: Require with expression](https://webpack.js.org/guides/dependency-management/#require-with-expression)

[Vuepress :: Handling Assets](https://v1.vuepress.vuejs.org/guide/assets.html)
