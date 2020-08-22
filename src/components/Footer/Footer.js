import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={{ background: "#000", minHeight: "50px", color: "#fff" }}>
      <div className="container">
        <div className="row py-2">
          <div className="col-md-6">
            <a
              href="https://github.com/MohiuddinRabby?tab=repositories"
              className="text-danger"
              target="_blank"
              rel="noopener noreferrer"
            >
              Developed by Mohiuddin
            </a>
          </div>
          <div className="col-md-6">
            <Link className="px-3">About online food</Link>
            <Link className="px-3">Get help</Link>
            <Link className="px-3">Read our blogs</Link>
            <Link className="px-3">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
