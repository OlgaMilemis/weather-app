import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello React!</h1>
        <Weather city="Berlin" />
        <Footer />
      </header>
    </div>
  );
}
