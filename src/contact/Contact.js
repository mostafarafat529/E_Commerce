import React from "react";

const Contact = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center min-vh-100 px-3 py-5 mt-4"
      style={{
        background: "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
      }}
    >
      <div
        className="container rounded-4 shadow-lg p-5 text-white"
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          maxWidth: "900px",
        }}
      >
        <h2 className="text-center fw-bold mb-5">
          Get in Touch with <span className="text-danger">MegaShop</span>
        </h2>

        <div className="row g-4">
          {/* Info Section */}
          <div className="col-md-6">
            <h3 className="fw-semibold mb-3">Contact Info</h3>
            <p className="text-light opacity-75">
              Have a question or need support? We're here to help you with your
              electronics journey.
            </p>
            <div className="mt-4">
              <p className="mb-2">
                <strong>📍 Address:</strong> 123 Egypt , cairo
              </p>
              <p className="mb-2">
                <strong>📧 Email:</strong> support@MegaShop.com
              </p>
              <p className="mb-0">
                <strong>📞 Phone:</strong> +20 102 780 7676
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="col-md-6">
            <form className="text-white">
              <div className="mb-3">
                <label className="form-label text-white">Your Name</label>
                <input
                  type="text"
                  className="form-control bg-transparent text-white border-light"
                  placeholder="John Doe"
                  style={{ borderRadius: "15px" }}
                />
              </div>

              <div className="mb-3">
                <label className="form-label text-white">Email Address</label>
                <input
                  type="email"
                  className="form-control bg-transparent text-white border-light"
                  placeholder="john@example.com"
                  style={{ borderRadius: "15px" }}
                />
              </div>

              <div className="mb-3">
                <label className="form-label text-white">Your Message</label>
                <textarea
                  rows="4"
                  className="form-control bg-transparent text-white border-light"
                  placeholder="Type your message..."
                  style={{ borderRadius: "15px" }}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn w-100 fw-semibold text-white"
                style={{
                  background: "linear-gradient(to right, #ff416c, #833ab4)",
                  borderRadius: "15px",
                }}
              >
                Send Message 🚀
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
