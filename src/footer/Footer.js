import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaPinterest, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <div className="container">
        <div className="row gy-4">
<div className="col-md-3">
  <Link to="/" className="text-decoration-none">
    <h2 className="text-danger fw-bold">MegaShop</h2>
  </Link>
  <p className="small mt-2">
    Your one-stop destination for the latest electronics, smart gadgets, and home tech essentials.
  </p>
  <p className="small mb-1">
    Address: 45 Innovation Avenue, Smart City, Cairo, Egypt
  </p>
  <p className="small mb-1">
    Email: support@megashop.com
  </p>
  <p className="small mb-1">
    Phone: +20 111 222 3333
  </p>
</div>

          {/* ====== Customer Service ====== */}
          <div className="col-md-3">
            <h5 className="fw-semibold">Customer Service</h5>
            <ul className="list-unstyled mt-3">
              <li><Link to="#" className="text-light text-decoration-none d-block py-1">Contact Us</Link></li>
              <li><Link to="#" className="text-light text-decoration-none d-block py-1">Shipping & Returns</Link></li>
              <li><Link to="#" className="text-light text-decoration-none d-block py-1">FAQs</Link></li>
              <li><Link to="#" className="text-light text-decoration-none d-block py-1">Order Tracking</Link></li>
              <li><Link to="#" className="text-light text-decoration-none d-block py-1">Size Guide</Link></li>
            </ul>
          </div>

          {/* ====== Social Media ====== */}
          <div className="col-md-3">
            <h5 className="fw-semibold">Follow Us</h5>
            <div className="d-flex gap-3 mt-3 fs-4">
              <a href="/#" className="text-light"><FaFacebook /></a>
              <a href="/#" className="text-light"><FaInstagram /></a>
              <a href="/#" className="text-light"><FaTwitterSquare /></a>
              <a href="/#" className="text-light"><FaPinterest /></a>
            </div>
          </div>

          {/* ====== Newsletter ====== */}
          <div className="col-md-3">
            <h5 className="fw-semibold">Stay in the Loop</h5>
            <p className="small mt-2">
              Subscribe to get special offers, free giveaways, and more.
            </p>
            <form className="mt-3 d-flex">
              <input
                type="email"
                placeholder="Your email address"
                className="form-control me-2"
              />
              <button type="submit" className="btn btn-danger">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* ====== Bottom Section ====== */}
        <div className="border-top border-secondary mt-4 pt-3 text-center small">
          <p className="mb-0">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-danger">MegaShop</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
