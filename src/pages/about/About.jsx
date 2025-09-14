import React from "react";
import PageTransition from "../../components/PageTransition";
import "./about.css";

function About() {
  return (
    <PageTransition>
      <div className="about-page">
        <h1>About Us</h1>
        <p>
          Welcome to our React Ecommerce demo! This project showcases a modern, responsive online store built with React, featuring product browsing, search, cart, favorites, and smooth animations.
        </p>
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            To deliver a fast, beautiful, and user-friendly shopping experience using the latest web technologies.
          </p>
        </div>
        <div className="about-section">
          <h2>Tech Stack</h2>
          <ul>
            <li>React 19</li>
            <li>React Router DOM v7</li>
            <li>Framer Motion</li>
            <li>Swiper</li>
            <li>React Icons</li>
            <li>Vite</li>
          </ul>
        </div>
        <div className="about-section">
          <h2>Features</h2>
          <ul>
            <li>Product catalog and details</li>
            <li>Shopping cart and favorites</li>
            <li>Search and category navigation</li>
            <li>Responsive design</li>
            <li>Animated transitions</li>
            <li>Toast notifications</li>
          </ul>
        </div>
      </div>
    </PageTransition>
  );
}

export default About;