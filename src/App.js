import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello React!</h1>
        <Weather city="Berlin" />
      </header>
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
    </div>
  );
}
