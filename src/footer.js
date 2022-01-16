import React from "react";
import "./Weather.css";

export default function Footer() {
  return (
    <footer className="Footer">
      <small>
        {" "}
        <a
          href="https://github.com/OlgaMilemis/weather-app"
          rel="noreferrer"
          target="_blank"
        >
          Open source code
        </a>{" "}
        {""}
        by Caro Gierich{" "}
      </small>
    </footer>
  );
}
