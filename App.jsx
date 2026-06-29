import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HomePage from "../../pages/HomePage";
import TeamToggle from "../TeamToggle";
import "./App.scss";

function App() {
  const [clicks, setClicks] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <>
      <main className="app">
        <Header clicks={clicks} />
        <HomePage clicks={clicks} setClicks={setClicks} />
        <TeamToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <Footer />
      </main>
    </>
  );
}

export default App;
