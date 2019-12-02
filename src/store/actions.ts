import {
  SET_TOP_STORIES,
  SetTopStoriesType,
  SET_TOP_STORIES_ID,
  SetTopStoriesIdType
} from "./types";

export const setTopStoriesId: SetTopStoriesIdType = storiesId => {
  return {
    type: SET_TOP_STORIES_ID,
    payload: storiesId
  };
};

export const setTopStories: SetTopStoriesType = stories => {
  return {
    type: SET_TOP_STORIES,
    payload: stories
  };
};
