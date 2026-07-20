# 💾 React + localStorage (кастомный хук)

Демонстрация использования кастомного хука `useLocalStorage` для управления настройками пользователя.

---

## 🧩 Функционал

- ✅ Хранение данных в `localStorage`
- ✅ Автоматическая синхронизация состояния и хранилища
- ✅ Управление темой (светлая / тёмная)
- ✅ Управление языком (русский / английский)
- ✅ Сохранение имени пользователя
- ✅ Удаление настроек из `localStorage`
- ✅ Стилизация через SCSS Modules

---

## 🛠️ Использованные технологии

- React (хуки: `useState`, `useEffect`)
- Кастомный хук `useLocalStorage`
- SCSS Modules

---
## 📝 Пример использования хука

```jsx
const [theme, setTheme, handleRemoveTheme] = UseLocalStorage(
  "theme",
  "light",
);

// Сохранение значения
setTheme("dark");

// Удаление из localStorage
handleRemoveTheme();
