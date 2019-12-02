import React, { useEffect } from "react";
import "./App.css";
import { useNewsApi } from "./store/hooks";

const App = () => {
  const [newsItems, fetchNews] = useNewsApi();

  useEffect(() => {
    fetchNews();
  }, []);

  const renderNewsItems = () => {
    return (
      <ul>
        {newsItems.map((item, key) => {
          console.log(`ITEM ${key}`, item);

          return <li>{item}</li>;
        })}
      </ul>
    );
  };

  return (
    <div className="App">
      Hacker News!
      {renderNewsItems()}
    </div>
  );
};

export default App;
