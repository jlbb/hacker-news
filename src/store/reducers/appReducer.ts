import { MainAppState, SET_NEWS_ITEMS, MainAppReducer } from "../types";

const initialState: MainAppState = {
  newsItems: []
};

const appReducer: MainAppReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEWS_ITEMS:
      return {
        ...state,
        newsItems: action.payload
      };
    default:
      return state;
  }
};

export default appReducer;
