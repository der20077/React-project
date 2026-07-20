import { UseLocalStorage } from "../../hooks/useLocalStorage";
import styles from "./Setings.module.scss";

const Setings = () => {
  const [theme, setTheme, handleRemoveTheme] = UseLocalStorage(
    "theme",
    "light",
  );
  const [language, setLanguage, handleRemoveLanguge] = UseLocalStorage(
    "language",
    "ru",
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Настройки</h1>
      <div className={styles.module}>
        <h2>Тема:</h2>
        <select
          className={styles.select}
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        >
          <option value="light">Светлая</option>
          <option value="dark">Тёмная</option>
        </select>
      </div>
      <div className={styles.module}>
        <h2>Язык:</h2>
        <select
          className={styles.select}
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="ru">Русский</option>
          <option value="en">Английский</option>
        </select>
      </div>
      <div className={styles.module}>
        <p>Текущая тема: {theme}</p>
        <p>Текущий язык: {language}</p>
      </div>

      <button
        className={styles.button}
        onClick={() => {
          handleRemoveTheme();
          handleRemoveLanguge();
        }}
      >
        Сбросить все настройки
      </button>
    </div>
  );
};

export default Setings;
