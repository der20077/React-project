import { useState } from "react";
import useApi from "../../hooks/useApi";

const DeleteUser = () => {
  const [userId, setUserId] = useState(null);
  const { loading, error, remove } = useApi(
    `https://69ea182715c7e2d512694c71.mockapi.io/api/v1/`,
  );
  const handleDelete = () => {
    remove(`/todo/${userId}`)
      .then(() => {
        alert(`Пользователь с id ${userId} успешно удалён`);
        setUserId("");
      })
      .catch(() => {
        alert("Ошибка удаления пользователя");
      });
  };

  return (
    <div>
      <h2>Удалить пользователя по id</h2>
      <input
        type="text"
        onChange={(e) => {
          setUserId(e.target.value);
        }}
        placeholder="Введите id пользователя"
      />
      <button onClick={handleDelete} disabled={loading}>
        {loading ? "Удаление" : "Удалить пользователя"}
      </button>
      {error && <p>ошибка: {error.message}</p>}
    </div>
  );
};

export default DeleteUser;
