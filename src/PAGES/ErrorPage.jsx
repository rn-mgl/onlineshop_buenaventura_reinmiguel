import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="error-page">
      <div className="error-page-msg">
        404 <br /> Page Not Found
      </div>
      <Link className="home-btn-error-page" to="/">
        Home
      </Link>
    </div>
  );
}
