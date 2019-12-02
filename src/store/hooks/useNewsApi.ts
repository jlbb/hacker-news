import { useDispatch, useSelector } from "react-redux";

import {
  TopStoriesType,
  StateManagement,
  FetchTopStoriesType,
  TopStoriesIdType
} from "../types";
import { setTopStories, setTopStoriesId } from "../actions";
import axios from "axios";
import { STORY_ITEM_ENDPOINT, NEWEST_STORIES_ENDPOINT } from "../../config/api";
import { N_STORY_ITEMS } from "../../constants";

type NewsApiHookType = [
  TopStoriesType,
  FetchTopStoriesType,
  TopStoriesIdType,
  FetchTopStoriesType
];

const useNewsApi = (): NewsApiHookType => {
  const dispatch = useDispatch();
  const stories: TopStoriesType = useSelector(
    ({ app }: StateManagement) => app.topStories
  );
  let storiesId: TopStoriesIdType = useSelector(
    ({ app }: StateManagement) => app.topStoriesId
  );

  const _getStoriesId = async (): Promise<string> => {
    let res = await axios.get(`${NEWEST_STORIES_ENDPOINT}`);

    return res.data;
  };

  const _getStory = async (storyId: string | number): Promise<any> => {
    let res = await axios.get(`${STORY_ITEM_ENDPOINT}/${storyId}.json`);

    return res.data;
  };

  const _fetchStoriesId: FetchTopStoriesType = async () => {
    const storiesId = await Promise.all(await _getStoriesId());

    return dispatch(setTopStoriesId(storiesId));
  };

  const _fetchStories: FetchTopStoriesType = async (nStories?: number) => {
    nStories = !nStories ? 0 : nStories - 1;

    const stories = await Promise.all(
      storiesId
        .slice(
          nStories * N_STORY_ITEMS,
          nStories * N_STORY_ITEMS + N_STORY_ITEMS
        )
        .map(async (storyId: string | number) => {
          return await _getStory(storyId);
        })
    );

    return dispatch(setTopStories(stories));
  };

  return [stories, _fetchStories, storiesId, _fetchStoriesId];
};

export default useNewsApi;
