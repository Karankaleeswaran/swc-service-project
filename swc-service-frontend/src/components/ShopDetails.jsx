import React, { useEffect, useState } from "react";
import "./ShopDetails.css";

import watch1 from "../images/watch1.png";
import watch2 from "../images/watch2.png";
import watch3 from "../images/watch3.png";
import watch4 from "../images/watch4.png";
import watch5 from "../images/watch5.png";
import watch6 from "../images/watch6.jpg";
import watch7 from "../images/watch7.jpg";

const images = [watch1, watch2, watch3, watch4, watch5, watch6, watch7];

function ShopDetails({ setCurrentPage }) {
  const [current, setCurrent] = useState(0);

  // Auto Image Slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  };

  const prevSlide = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % images.length);
  };

  return (
    <div className="shop-container">
      {/* ================= HEADER ================= */}
      <header className="shop-header">
        <h2>⌚ Shri Mariyappa Watches</h2>

        <nav>
          <span onClick={() => scrollToSection("home")}>Home</span>
          <span onClick={() => scrollToSection("about")}>About</span>
          <span onClick={() => scrollToSection("watches")}>Collections</span>
          <span onClick={() => scrollToSection("location")}>Branches</span>
          <span onClick={() => scrollToSection("contact")}>Contact</span>

          <button className="home-btn" onClick={() => setCurrentPage("home")}>
            🏠 Home
          </button>
        </nav>
      </header>

      {/* ================= HOME ================= */}
      <section id="home" className="section home-section">
        <div className="hero-content">
          <h1>Shri Mariyappa Watches</h1>

          <h2>Trusted Since 1975</h2>

          <p>
            Welcome to one of the most trusted watch showrooms in Kovilpatti.
            With more than <strong>50 Years of Experience</strong>, we proudly
            provide premium watches, smartwatches, wall clocks and professional
            watch servicing.
          </p>

          <p>
            We are an <strong>Authorized Titan Model Showroom</strong> offering
            genuine branded products with trusted after-sales support.
          </p>

          <button
            className="explore-btn"
            onClick={() => scrollToSection("watches")}
          >
            Explore Collection
          </button>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="section about-section">
        <h1>About Us</h1>

        <p className="about-description">
          Shri Mariyappa Watches has been serving customers for over five
          decades with quality, trust and professional watch services.
        </p>

        <div className="features">
          <div className="feature-card">
            <h2>🏆 50+ Years</h2>
            <p>
              More than five decades of trusted service and customer
              satisfaction.
            </p>
          </div>

          <div className="feature-card">
            <h2>⌚ Premium Brands</h2>
            <p>Titan, Fastrack, Sonata, Ajanta Wall Clocks and many more.</p>
          </div>

          <div className="feature-card">
            <h2>🔧 Expert Repairs</h2>
            <p>
              We repair antique watches, automatic watches, luxury watches and
              vintage clocks.
            </p>
          </div>

          <div className="feature-card">
            <h2>⭐ 4.6 Customer Rating</h2>
            <p>
              Loved by hundreds of happy customers for our quality products and
              reliable service.
            </p>
          </div>
        </div>
      </section>

      {/* ================= WATCHES ================= */}
      <section id="watches" className="section watches-section">
        <h1>Premium Watch Collections</h1>

        <p className="watch-text">
          Discover our wide range of branded watches, smart watches and elegant
          wall clocks.
        </p>

        <div className="slider">
          <button className="nav-btn left" onClick={prevSlide}>
            ❮
          </button>

          <img src={images[current]} alt="Watch Collection" />

          <button className="nav-btn right" onClick={nextSlide}>
            ❯
          </button>
        </div>
      </section>

      {/* ================= LOCATION ================= */}
      <section id="location" className="section location-section">
        <h1>Our Branches</h1>

        <div className="location-card">
          <h2>📍 Main Showroom</h2>

          <p>
            No.493/D, SMV Complex, Ground Floor
            <br />
            Opposite Reva Plaza
            <br />
            Main Road
            <br />
            Kovilpatti – 628501
          </p>

          <h3>Business Hours</h3>

          <p>
            Monday - Sunday
            <br />
            9:00 AM – 9:30 PM
          </p>
        </div>

        <div className="location-card">
          <h2>📍 VOC Nagar Branch</h2>

          <p>
            1C1, New Municipal Office Outgate
            <br />
            Park East Road
            <br />
            Near Raguraman Thirumana Mandapam
            <br />
            Kovilpatti – 628502
          </p>

          <h3>Business Hours</h3>

          <p>
            Monday - Saturday : 9:00 AM – 9:00 PM
            <br />
            Sunday : 9:00 AM – 7:30 PM
          </p>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="section contact-section">
        <h1>Contact Us</h1>

        <div className="contact-card">
          <h2>⌚ Shri Mariyappa Watches</h2>

          <p>Authorized Titan Model Showroom</p>

          <p>Premium Watches | Smart Watches | Wall Clocks</p>

          <p>Expert Watch & Clock Repair Centre</p>

          <p>📍 Kovilpatti, Tamil Nadu - 628501</p>

          <p>🕘 Open Daily</p>

          <p>9:00 AM - 9:30 PM</p>

          <h3>Thank You For Visiting ❤️</h3>
        </div>
      </section>
    </div>
  );
}

export default ShopDetails;
