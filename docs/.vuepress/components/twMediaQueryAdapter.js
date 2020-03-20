import { mediaQueries } from "@dynamic/tailwindMediaQueries.js";

function mediaCondition(mediaQuery) {
  const mediaFeature = "width";
  let mediaCondition = [];
  for (const condition in mediaQuery) {
    let media;
    if (mediaQuery.hasOwnProperty(condition)) {
      let value = mediaQuery[condition];
      media = "("
        .concat(condition)
        .concat("-")
        .concat(mediaFeature)
        .concat(": ")
        .concat(value)
        .concat(")");
    }
    mediaCondition.push(media);
  }
  return mediaCondition.join(" and ");
}

function mediaQueryToConditions() {
  let conditions = new Map();
  for (const screen in mediaQueries) {
    if (mediaQueries.hasOwnProperty(screen)) {
      let condition = mediaCondition(mediaQueries[screen]);
      conditions.set(screen, condition);
    }
  }
  return conditions;
}

export const mediaConditions = mediaQueryToConditions();
