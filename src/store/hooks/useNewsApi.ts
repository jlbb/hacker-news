import { useDispatch, useSelector } from "react-redux";

import { NewsItemsType, StateManagement, FetchRandomNewsType } from "../types";
import { setNewsItems } from "../actions";
import axios from "axios";
import { NEWS_API_URL, ITEMS_LIST_ENDPOINT } from "../../config/api";

type NewsApiHookType = [NewsItemsType, FetchRandomNewsType];

const useNewsApi = (): NewsApiHookType => {
  const dispatch = useDispatch();
  const newsItems: NewsItemsType = useSelector(
    ({ app }: StateManagement) => app.newsItems
  );

  const _randomNews = async (): Promise<string> => {
    let res = await axios.get(`${NEWS_API_URL}/${ITEMS_LIST_ENDPOINT}`);
    console.log("RES", res);

    return res.data;
  };

  const _fetchNews: FetchRandomNewsType = async () => {
    const items = await _randomNews();
    const resolved: NewsItemsType = await Promise.all(items);

    return dispatch(setNewsItems(resolved));
  };

  return [newsItems, _fetchNews];
};

export default useNewsApi;
