import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-vh-100 mt-5 bg-light py-5 px-3 px-sm-4 px-lg-5">
      <div className="container bg-white rounded-4 shadow p-5">
        <h1 className="text-center fw-bold mb-4">About MegaShop</h1>

        <p className="text-secondary fs-5">
          Welcome to <span className="fw-semibold text-danger">MegaShop</span>, your one-stop destination for the latest and greatest in electronics. 
          From cutting-edge gadgets to must-have accessories, we’re here to power up your tech life with premium products and unbeatable service.
        </p>

        <div className="mt-5">
          <h2 className="fw-semibold text-danger mb-3">Our Mission</h2>
          <p className="text-secondary">
            At MegaShop, our mission is to make innovative technology accessible to everyone. 
            We’re passionate about connecting people with the tools and tech they need to thrive in a digital world — all at competitive prices and delivered with speed and care.
          </p>
        </div>

        <div className="mt-5">
          <h2 className="fw-semibold text-danger mb-3">Why Choose MegaShop?</h2>
          <ul className="text-secondary fs-6">
            <li>Top-quality electronic products from trusted brands</li>
            <li>Lightning-fast and secure shipping</li>
            <li>Reliable customer support, always ready to help</li>
            <li>Easy returns and hassle-free shopping experience</li>
          </ul>
        </div>

        <div className="mt-5">
          <h2 className="fw-semibold text-danger mb-3">Our Vision</h2>
          <p className="text-secondary">
            We envision a future where technology elevates everyday life. 
            At MegaShop, we’re committed to staying ahead of the curve, offering cutting-edge solutions that are both practical and affordable.
          </p>
        </div>

        <div className="text-center mt-5">
          <h3 className="fw-semibold text-danger mb-2">Join the MegaShop Family</h3>
          <p className="text-secondary mb-4">
            Whether you’re a tech enthusiast, a professional, or just looking for something cool and functional — MegaShop has something for everyone.
          </p>
          <Link to="/products">
            <button className="btn btn-danger px-4 py-2 rounded-pill">
              Start Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;