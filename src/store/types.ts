export const SET_TOP_STORIES_ID = "SET_TOP_STORIES_IDS";
export const SET_TOP_STORIES = "SET_TOP_STORIES";

/**
 *  BASIC TYPES
 */

export type TopStoriesIdType = string[];
export type TopStoriesType = any;

/**
 *  STATE TYPES
 */

export interface StateManagement {
  app: MainAppState;
}

export interface MainAppState {
  topStoriesId: TopStoriesIdType;
  topStories: TopStoriesType;
}

/**
 *  ACTION TYPES
 */

// MAIN APP ACTIONS

interface SetTopStoriesIdAction {
  type: typeof SET_TOP_STORIES_ID;
  payload: TopStoriesIdType;
}

interface SetTopStoriesAction {
  type: typeof SET_TOP_STORIES;
  payload: TopStoriesType;
}

export type MainAppActionTypes = SetTopStoriesIdAction | SetTopStoriesAction;

export type SetTopStoriesIdType = (
  storiesId: TopStoriesIdType
) => MainAppActionTypes;

export type SetTopStoriesType = (stories: TopStoriesType) => MainAppActionTypes;

export type FetchTopStoriesType = (
  nItems?: number
) => Promise<MainAppActionTypes>;

/**
 *  REDUCER TYPES
 */

export type MainAppReducer = (
  state: MainAppState,
  action: MainAppActionTypes
) => MainAppState;
