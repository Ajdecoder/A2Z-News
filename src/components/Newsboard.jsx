import React, { useState, useEffect } from "react";
import { NewsItem } from "./NewsItem";

export const Newsboard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        let URL = `https://newsapi.org/v2/everything?q=${category}&apiKey=${process.env.REACT_APP_API_KEY}`;
        const response = await fetch(URL);
        const data = await response.json();

        if (response.ok) {
          setArticles(data.articles);
        } else {
          setError("Failed to fetch news data");
        }
      } catch (error) {
        console.error("Error fetching news data:", error);
        setError("An error occurred while fetching news data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container">
      <h2 className="text-center mt-3 font-weight-bold">
        A2Z <span className="badge bg-warning mb-2 font-weight-bold">News</span>
      </h2>
      <hr />
      <div className="row">
        {articles &&
          articles
            .filter(
              (news) =>
                news.title && news.description && news.url && news.urlToImage
            )
            .map((filteredNews, index) => (
              <div key={index} className="col-md-4 mb-3">
                <NewsItem
                  title={filteredNews.title}
                  description={filteredNews.description}
                  src={filteredNews.urlToImage}
                  url={filteredNews.url}
                />
              </div>
            ))}
      </div>
    </div>
  );
};
