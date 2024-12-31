import React from "react";
import "../styles.css";

export default function Header() {
  return (
    <div className="header">
      <img className="logo" src="logo.png" alt="movieapp" />
      <h2 className="app-subtitle">
        It's time for relaxing! Find the best movie of this website that is
        totally functional...
      </h2>
    </div>
  );
}
