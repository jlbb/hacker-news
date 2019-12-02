import {
  SET_NEWS_ITEMS,
  SetNewsItemsType,
} from "./types";

export const setNewsItems: SetNewsItemsType = newsItems => {
  return {
    type: SET_NEWS_ITEMS,
    payload: newsItems
  };
};
