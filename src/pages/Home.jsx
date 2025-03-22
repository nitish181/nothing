import React from "react";

const Home = () => {
  return (
    <div>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide pt-2"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/img.webp" className="d-block w-100" height="400px" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src="/img2.png" className="d-block w-100" height="400px" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src="/img3.jpg" className="d-block w-100" height="400px" alt="Slide 3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
