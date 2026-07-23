# 📦 React + Axios + Кастомный хук useApi

Демонстрация полноценного CRUD-приложения на React с использованием кастомного хука `useApi` для работы с API (axios).

---

## 🧩 Функционал

- ✅ **GET** — получение списка пользователей (JSONPlaceholder)
- ✅ **POST** — добавление нового пользователя (MockAPI)
- ✅ **PUT** — обновление данных пользователя (MockAPI)
- ✅ **DELETE** — удаление пользователя по ID (MockAPI)
- ✅ Кастомный хук `useApi` для всех запросов
- ✅ Управление состояниями `loading`, `error`, `data`
- ✅ Обработка ошибок через `.catch()`
- ✅ Переиспользуемая архитектура

---

## 🛠️ Использованные технологии

- React (хуки: `useState`, `useCallback`, `useEffect`)
- Axios
- Кастомный хук `useApi`
- MockAPI (для CRUD)
- JSONPlaceholder (для GET)

---
## 📝 Пример использования хука

```jsx
const { data, loading, error, get, post, put, remove } = useApi(baseUrl);

// GET
get("/users").then(data => console.log(data));

// POST
post("/users", { name: "Иван" }).then(data => console.log(data));

// PUT
put("/users/1", { name: "Анна" }).then(data => console.log(data));

// DELETE
remove("/users/1").then(() => console.log("Удалено"));
