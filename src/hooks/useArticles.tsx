import { useState, useEffect } from "react";
import axios from "axios";
import { Article } from "../types/ArticlesTypes";

const useArticles = () => {
  const [articlesData, setArticlesData] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/everything?q=apple&from=2024-01-31&to=2024-01-31&sortBy=popularity&apiKey=83a4a86b76844d47834fef4d20b8a083"
        );
        setArticlesData(response.data.articles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  return {
    articlesData,
  };
};

export default useArticles;
