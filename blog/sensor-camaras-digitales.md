---
title: El sensor de las cámaras digitales
date: 2009-05-17 10:20:00
layout: Post
tags: "equipo fotográfico"
---

# El sensor de las cámaras digitales

El sensor de las cámaras fotográficas es un chip que contiene millones de células fotosensibles (semiconductores de silicio) que, estructuradas en forma de matriz, **transforman la intensidad de luz en carga eléctrica**. Cada una de estas células o la interpolación de varias -dependiendo del tipo de sensor- da valor a un [píxel](http://es.wikipedia.org/wiki/Píxel).

<!-- more -->

<Photo name="lupa_sobre_foto_muestra_pixeles.jpg" alt="Una mano sujeta una lupa que muestra simbólicamente los píxeles de una fotografía de paisaje" />

Foto original hecha por [Noelle Otto](https://www.pexels.com/photo/close-up-photography-of-magnifying-glass-906055/)

Un píxel es la unidad mínima que compone una imagen digital. Esta imagen registrada en el sensor es procesada dentro de la cámara y transferida a la tarjeta de memoria.

<Photo name="mosaico_de_bayer.png" alt="Capa de filtros y cristales de un sensor" />

El sensor solo almacena la intensidad de luz, no el color, de modo que **cada chip está cubierto por una capa de filtros y cristales**(microlentes) que sirven tanto para enfocar a modo de lupa el haz de luz dentro de cada célula (**píxel**) como para dotarla de **color** (para más detalles sobre el proceso de estimación de color en las cámaras digitales ver el [mosaico de Bayer](http://es.wikipedia.org/wiki/Mosaico_de_Bayer)).

<Photo :breakpoints="['md', 'lg', 'xl']" name="espejo_ocultando_sensor_reflex.jpg" alt="Vista de detalle de un sensor de cámara réflex" />

## Tipos de sensores

**CCD(Charge-coupled device)**. Para recuperar la imagen, este sensor realiza un recorrido secuencial de las celdas del sensor y tiene como salida una señal analógica.

**APS (Active Pixel sensor)**. Los fotones que recibe cada celda se transforman en voltaje dentro de la propia celda. Este proceso hace que, al contrario de lo que ocurre con el sensor CCD, cada píxel sea independiente de sus vecinos. La salida de este sensor está ya digitalizada.

**Foveon X3**. A diferencia de los anteriores, este sensor no forma los colores a través de la interpolación de células adyacentes sino que cada elemento del sensor recibe toda la información de color a través de tres capas cada una sensible a uno de los colores primarios. A igual número de píxeles por tanto, el sensor Foveon da una mayor resolución.

## Ventajas y desventajas

CCD y APS son los dos tipos de sensores predominantes en el mercado. Si bien es cierto que existen implementaciones de alta calidad en ambas tecnologías, hay ciertas cosas que se pueden extrapolar.

La tecnología CMOS que utiliza el sensor **APS** hace que tenga un menor consumo energético, lo que redunda en una mayor autonomía de la cámara. Se trata de un sensor **barato, rápido y con una mayor responsibidad** -mejor respuesta ante en escenarios con poca luz -, ya que integra un conversor analógico digital.

El **CCD** es un sensor de coste más elevado, que obtiene **mayores calidades** en sensores más grandes. También tiene un consumo energético mayor al externalizar la conversión A/D, pero esto le permite aprovechar convertidores de mejor calidad, dar mayor uniformidad a los píxeles, además de tener **un mayor espacio reservado a cada fotodiodo en sí dentro del sensor**, lo que disminuye de manera importante la aparición de **ruido**. Sin embargo, los CCD tienen **problemas con la saturación de píxeles**, que cuando se desbordan extienden ese desbordamiento a los píxeles vecinos creando ese efecto de halo indeseado(Blooming).
