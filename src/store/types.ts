export const SET_NEWS_ITEMS = "SET_NEWS_ITEMS";

/**
 *  BASIC TYPES
 */

export type NewsItemsType = string[];

/**
 *  STATE TYPES
 */

export interface StateManagement {
  app: MainAppState;
}

export interface MainAppState {
  newsItems: NewsItemsType;
}

/**
 *  ACTION TYPES
 */

// MAIN APP ACTIONS

interface SetNewsItemsAction {
  type: typeof SET_NEWS_ITEMS;
  payload: NewsItemsType;
}

export type MainAppActionTypes = SetNewsItemsAction;

export type SetNewsItemsType = (newsItems: NewsItemsType) => MainAppActionTypes;
export type FetchRandomNewsType = () => Promise<MainAppActionTypes>;

/**
 *  REDUCER TYPES
 */

export type MainAppReducer = (
  state: MainAppState,
  action: MainAppActionTypes
) => MainAppState;
