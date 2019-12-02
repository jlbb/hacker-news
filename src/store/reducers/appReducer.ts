import {
  MainAppState,
  SET_TOP_STORIES,
  MainAppReducer,
  SET_TOP_STORIES_ID
} from "../types";

const initialState: MainAppState = {
  topStoriesId: [],
  topStories: []
};

const appReducer: MainAppReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOP_STORIES_ID:
      return {
        ...state,
        topStoriesId: action.payload
      };
    case SET_TOP_STORIES:
      return {
        ...state,
        topStories: action.payload
      };
    default:
      return state;
  }
};

export default appReducer;
