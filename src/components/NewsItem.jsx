import React from "react";

export const NewsItem = ({ title, description, url, src }) => {
  return (
    <div className="card bg-light text-dark mx-2 my-3" style={{ maxWidth: "20rem" }}>
      <div className="d-flex justify-content-center">
        <img
          src={src ? src : "public/img.jpg"}
          alt={title || "Image"}
          className="card-img-top img-fluid"
          style={{ maxHeight: "200px", objectFit: "cover", paddingBottom: "10px" }}
        />
      </div>
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title">{title.slice(0, 40)}</h5>
          <p className="card-text">{description ? description.slice(0, 90) : "This is a custom description"}</p>
        </div>
        <a href={url} className="btn btn-outline-success mx-auto d-block mt-2">
          Read More
        </a>
      </div>
    </div>
  );
};
