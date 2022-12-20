import axios from "axios";
import { useState, useEffect } from "react";
import { ArticlesIndex } from "./ArticlesIndex";

export function Home() {
  const [articles, setArticles] = useState([]);
  const [isArticlesShowVisible, setIsArticlesShowVisible] = useState(false);
  const [currentArticle, setCurrentArticle] = useState({});

  const handleIndexArticles = () => {
    // console.log("handleIndexArticles");
    axios.get("http://localhost:3000/articles.json").then((response) => {
      console.log(response.data);
      setArticles(response.data);
    });
  };

  const handleShowArticle = (article) => {
    setIsArticlesShowVisible(true);
    setCurrentArticle(article);
  };

  const handleHideArticle = () => {
    setIsArticlesShowVisible(false);
  };

  useEffect(handleIndexArticles, []);

  return (
    <div className="container">
      <ArticlesIndex articles={articles} onSelectArticle={handleShowArticle} />
    </div>
  );
}
