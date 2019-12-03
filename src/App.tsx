import React, { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import "./App.scss";
import { useNewsApi } from "./store/hooks";
import ListItems from "./components/ListItems";
import { N_STORY_ITEMS } from "./constants";
import NavBar from "./components/NavBar";

const App = () => {
  const [newsItems, fetchStories, storiesId, fetchStoriesId] = useNewsApi();
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    fetchStoriesId();
  }, []);

  useEffect(() => {
    fetchStories(activePage);
  }, [storiesId, activePage]);

  const handlePageChange = (page: any) => {
    setActivePage(page);
  };

  return (
    <div className="App">
      <NavBar />
      <ListItems items={newsItems} />
      <Pagination
        hideDisabled
        activePage={activePage}
        itemsCountPerPage={N_STORY_ITEMS}
        totalItemsCount={storiesId.length - N_STORY_ITEMS}
        pageRangeDisplayed={5}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default App;
