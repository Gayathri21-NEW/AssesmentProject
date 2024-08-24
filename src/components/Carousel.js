import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Ensure correct import
import './carousel.css'; // Custom styles

const images = [
  {
    image: 'India',
    url: 'https://images.stockcake.com/public/d/7/e/d7e8d148-f4e6-4626-8c94-ca8a8d95d41f_large/taj-mahal-reflection-stockcake.jpg',
  },
  {
    image: 'Thailand',
    url: 'https://images.stockcake.com/public/c/e/9/ce98ed2f-bd06-4131-a473-1524f6bdaea1_large/tropical-sunset-escape-stockcake.jpg',
  },
  {
    image: 'USA',
    url: 'https://images.stockcake.com/public/a/b/9/ab925165-bd23-4c79-a8d1-c6f461c85a9a/moonlit-statue-liberty-stockcake.jpg',
  },
];

const Carousel = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide">
      <ol className="carousel-indicators">
        {images.map((_, index) => (
          <li
            key={index}
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={index}
            className={index === 0 ? 'active' : ''}
          ></li>
        ))}
      </ol>
      <div className="carousel-inner">
        {images.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
          >
            <img className="d-block w-100" src={item.url} alt={item.image} />
          </div>
        ))}
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
