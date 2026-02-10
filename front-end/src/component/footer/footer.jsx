import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-5">
      <div className="container py-5">

        {/* Top Section */}
        <div className="row">

          <div className="col-md-4 mb-4">
            <h5 className="fw-bold text-primary">Learnify</h5>
            <p className="text-secondary">
              Learn programming from scratch with easy and practical courses.
            </p>
          </div>

          <div className="col-md-4 mb-4">
            <h6 className="fw-bold">Popular Courses</h6>
            <ul className="list-unstyled text-secondary">
              <li>HTML, CSS & JavaScript</li>
              <li>React & Frontend</li>
              <li>Node & Backend</li>
              <li>Data Structures</li>
            </ul>
          </div>

          <div className="col-md-4 mb-4">
            <h6 className="fw-bold">Connect with Us</h6>
            <ul className="list-unstyled text-secondary">
              <li>▶️ YouTube – Learn Coding</li>
              <li>💬 Telegram – Learn Coding</li>
              <li>💻 GitHub – Learn Coding</li>
              <li className="mb-1">📧 support@codesphere.com</li>
              <li className="mb-0">📞 +91 98765 43210</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-top border-secondary my-4"></div>

        {/* Bottom Bar */}
        <div className="row align-items-center text-secondary small">
          <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
            © {new Date().getFullYear()} Learnify. All rights reserved.
          </div>

          <div className="col-md-6 text-center text-md-end">
            <a href="#" className="text-secondary text-decoration-none me-3">
              Terms & Conditions
            </a>
            <a href="#" className="text-secondary text-decoration-none me-3">
              Privacy Policy
            </a>
            <a href="#" className="text-secondary text-decoration-none">
              Refund & Cancellation
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
