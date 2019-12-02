import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

const mockedStore = {
  app: {
    topStories: [],
    topStoriesId: []
  }
};

const mockStore = configureMockStore([]);

let store: any;
let app: any;

beforeAll(() => {
  store = mockStore(mockedStore);
  app = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
test("loads and displays App component", async () => {
  expect(app).toBeDefined();
});
