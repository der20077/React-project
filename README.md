# 📦 Modal (модальное окно)

Компонент модального окна на React с использованием `children`.

---

## 🧩 Функционал

- Открытие / закрытие модального окна
- Передача любого содержимого через `children`
- Кнопка закрытия (крестик)
- Затемнённый фон (оверлей)

---

## 🛠️ Использованные React-приёмы

- `useState` для управления состоянием
- Условный рендеринг (`isModalOpen && <Modal />`)
- `children` для гибкого содержимого
- Обработка событий (`onClick`)

---

## 🚀 Пример использования

```jsx
function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Открыть</button>
      {isOpen && (
        <Modal OnClose={() => setIsOpen(false)}>
          <h2>Заголовок</h2>
          <p>Содержимое модалки</p>
        </Modal>
      )}
    </div>
  );
}


