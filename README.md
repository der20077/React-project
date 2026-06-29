# 🌗 Theme Toggle + Counter

Демонстрационный проект на React для отработки:
- `useState`
- Lifting State Up (подъём состояния)
- передачи пропсов между компонентами
- условного рендеринга и стилей

---

## 🧩 Компоненты

### `TeamToggle`
Переключает тему (светлая / тёмная).  
Получает `isDarkMode` и `setIsDarkMode` через пропсы.

### `HomePage`
Содержит счётчик кликов.  
Получает `clicks` и `setClicks` через пропсы.

---

## 📂 Структура
src/
components/
TeamToggle/ # переключатель темы
Header/ # шапка
Footer/ # подвал
pages/
HomePage/ # счётчик
App.jsx # состояние + композиция

text

---

## 🎨 Стилизация

В проекте используются **базовые инлайн-стили** для фона и цвета текста (`background`, `color`).  
При необходимости их можно легко заменить на:

- CSS-классы
- SCSS-модули
- Styled Components
- Tailwind

Структура позволяет расширять стили без переписывания логики.

---

## 🚀 Как запустить

```bash
git checkout feature/theme-toggle
npm install
npm run dev
🛠️ Стек
React 18

Vite

SCSS (опционально)



📄 Лицензия
MIT

text

---

## 🎯 **Короткое описание для GitHub (в строку)**

> *React-демонстрация: переключение темы (useState + lifting state up) и счётчик кликов.*

---

Готово. 👌
