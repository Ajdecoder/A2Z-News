import React from "react";
import "./NewsItem.css"

export const NewsItem = ({ title, description, url, src, PublishDate }) => {
  const formattedDate = new Date(PublishDate).toLocaleString();
  return (
    <div className="tocenter card bg-light text-dark mx-2 my-3 d-flex  " style={{ maxWidth: "22rem", borderRadius: "31px", padding: "5px" }}>
      <div style={{ overflow: "hidden" }}>
        <img
          src={src ? src : "public/img.jpg"}
          alt={title || "Image"}
          className="card-img-top img-fluid"
          style={{ maxHeight: "30rem", objectFit: "cover", borderRadius: "31px", height: "12rem" }}
        />
      </div>
      <div className="card-body h-25">
        <h5 className="card-title">{title.slice(0, 40)}</h5>
        <h6 className="card-date">{formattedDate}</h6>
        <p className="card-text text-start">{description ? description.slice(0, 90) : "This is a custom description"}</p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-outline-success mx-auto d-block">
          Read More
        </a>

      </div>
    </div>
  );
};
