import { useDispatch, useSelector } from "react-redux";

import { TopStoriesType, StateManagement, FetchTopStoriesType } from "../types";
import { setTopStories, setTopStoriesId } from "../actions";
import axios from "axios";
import { TOP_STORIES_ENDPOINT, STORY_ITEM_ENDPOINT } from "../../config/api";

type NewsApiHookType = [TopStoriesType, FetchTopStoriesType];

const NITEMS = 25;

const useNewsApi = (): NewsApiHookType => {
  const dispatch = useDispatch();
  const topStories: TopStoriesType = useSelector(
    ({ app }: StateManagement) => app.topStories
  );

  const _topStories = async (): Promise<string> => {
    let res = await axios.get(`${TOP_STORIES_ENDPOINT}`);

    return res.data;
  };

  const _getStory = async (storyId: string | number): Promise<any> => {
    let res = await axios.get(`${STORY_ITEM_ENDPOINT}/${storyId}.json`);

    return res.data;
  };

  const _fetchNews: FetchTopStoriesType = async () => {
    const storiesId: TopStoriesType = await Promise.all(await _topStories());

    const stories = await Promise.all(
      storiesId.slice(0, NITEMS).map(async (storyId: string | number) => {
        return await _getStory(storyId);
      })
    );

    dispatch(setTopStoriesId(storiesId));

    return dispatch(setTopStories(stories));
  };

  return [topStories, _fetchNews];
};

export default useNewsApi;
