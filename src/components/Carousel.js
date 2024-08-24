import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./carousel.css"; // Import the CSS file

const images = [
  {
    image: "India",
    url: "https://images.stockcake.com/public/a/e/6/ae6bf6e2-5f28-4af0-8412-43e92c100472_large/taj-mahal-sunrise-stockcake.jpg",
  },
  {
    image: "Thailand",
    url: "https://images.stockcake.com/public/9/4/5/945f2255-48c9-40fa-8159-e920fcf12313_large/tropical-sunset-escape-stockcake.jpg",
  },
  {
    image: "USA",
    url: "https://images.stockcake.com/public/a/b/9/ab925165-bd23-4c79-a8d1-c6f461c85a9a/moonlit-statue-liberty-stockcake.jpg",
  },
];

const Carousel = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide">
      <a
        className="carousel-control-prev color-btn"
        href="#carouselExampleIndicators"
        role="button"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </a>

      <ol className="carousel-indicators">
        {images.map((_, index) => (
          <li
            key={index}
            data-bs-target="#carouselExampleIndicators"
            // data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
          ></li>
        ))}
      </ol>
      <a
        className="carousel-control-next v"
        href="#carouselExampleIndicators"
        role="button"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </a>
      <div className="carousel-inner">
        {images.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img className="d-block w-100" src={item.url} alt={item.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
