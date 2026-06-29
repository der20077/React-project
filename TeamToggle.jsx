function TeamToggle({ isDarkMode, setIsDarkMode }) {
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div
      style={{
        background: isDarkMode ? "black" : "white",
        color: isDarkMode ? "white" : "black",
      }}
    >
      <button onClick={toggleTheme}>Переключить тему</button>
    </div>
  );
}

export default TeamToggle;
