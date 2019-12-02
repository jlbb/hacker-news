import React, { useEffect } from "react";
import "./App.css";
import { useNewsApi } from "./store/hooks";
import ListItems from "./components/ListItems";

const App = () => {
  const [newsItems, fetchNews] = useNewsApi();

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="App">
      Hacker News!
      <ListItems items={newsItems} />
    </div>
  );
};

export default App;
