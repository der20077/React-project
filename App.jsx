import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../Global.styled";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HomePage from "../../pages/HomePage";
import Button from "../Button/Button";
import "./App.scss";
function App() {
  const [theme, setTheme] = useState(() => {
    const saveTheme = localStorage.getItem("theme");
    return saveTheme ? saveTheme : "light";
  });

  const lightTheme = {
    body: "#fff",
    text: "#363537",
  };

  const darkTheme = {
    body: "#363537",
    text: "#fafafa",
  };

  const toogleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <>
      <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <main className="app">
          <Header />
          <Button onClick={toogleTheme} />
          <h1>Текст</h1>
          <HomePage />
          <Footer />
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
