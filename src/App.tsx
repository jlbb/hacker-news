import React, { useEffect } from "react";
import "./App.scss";
import { useNewsApi } from "./store/hooks";
import ListItems from "./components/ListItems";

const App = () => {
  const [newsItems, fetchNews] = useNewsApi();

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="App">
      <h3 className="App__title">Hacker News!</h3>
      <ListItems items={newsItems} />
    </div>
  );
};

export default App;
