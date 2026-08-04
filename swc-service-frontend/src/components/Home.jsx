import React from "react";
import "./Home.css";

function Home({ setLoggedIn, setCurrentPage }) {
  return (
    <div className="home-container">
      <div className="overlay">
        <div className="hero-content">
          <h3>⌚ Welcome To</h3>

          <h1>Shri Mariyappa Watches</h1>

          <h2>Trusted Since 1975</h2>

          <p>
            Experience over <strong>50 years of excellence</strong> in premium
            watches, smartwatches, wall clocks and professional watch repair
            services. We are proud to be an
            <strong> Authorized Titan Model Showroom </strong>
            delivering quality, trust and customer satisfaction.
          </p>

          <div className="highlight-box">
            <div className="highlight">
              <h2>50+</h2>
              <p>Years Experience</p>
            </div>

            <div className="highlight">
              <h2>100+</h2>
              <p>Watch Collections</p>
            </div>

            <div className="highlight">
              <h2>4.6★</h2>
              <p>Customer Rating</p>
            </div>
          </div>

          <div className="home-actions">
            <button
              className="shop-btn"
              onClick={() => setCurrentPage("ShopDetails")}
            >
              Explore Our Showroom
            </button>

            <button
              className="service-btn"
              onClick={() => setCurrentPage("bookService")}
            >
              Book Watch Service
            </button>

            <button className="logout-btn" onClick={() => setLoggedIn(false)}>
              🚪 Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
