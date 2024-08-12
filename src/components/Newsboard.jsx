import React, { useState, useEffect } from "react";
import { NewsItem } from "./NewsItem";
import LoadingSpinner from "./LoadingSpinner";

export const Newsboard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        let apikey = process.env.REACT_APP_API_KEY;
        let URL = `https://newsapi.org/v2/everything?q=${category}&apiKey=${apikey}`;
        const response = await fetch(URL, {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Upgrade-Insecure-Requests": "1",
        });
        const data = await response.json();

        if (response.ok) {
          setArticles(data.articles);
        } else {
          setError("No News Here");
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
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <h3 style={{ top: "15rem" }} className=" text-center position-relative">
        {" "}
        {error}
      </h3>
    );
  }

  return (
    <div className="container">
      <h2 className="text-center mt-5 font-weight-bold">
        A2Z{" "}
        <span className=" mt-4 badge bg-warning mb-2 font-weight-bold">
          News
        </span>
      </h2>
      <hr />
      <div className="row mt-5">
        {articles &&
          articles
            .filter(
              (news) =>
                news.title && news.description && news.url && news.urlToImage
            )
            .map((filteredNews, index) => (
              <div key={index} className="col-md-4 mb-3 ">
                <NewsItem
                  title={filteredNews.title}
                  description={filteredNews.description}
                  src={filteredNews.urlToImage}
                  url={filteredNews.url}
                  PublishDate={filteredNews.publishedAt}
                />
              </div>
            ))}
      </div>
    </div>
  );
};
