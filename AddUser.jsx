import { useState } from "react";
import useApi from "../../hooks/useApi";

const AddUser = () => {
  const [name, SetName] = useState("");
  const [hasCar, setHasCar] = useState(false);
  const { loading, error, post } = useApi(
    "https://69ea182715c7e2d512694c71.mockapi.io/api/v1/",
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      name,
      hasCar,
    };

    post("todo", body).then(() => {
      alert("Пользоваттель добавлен");
      setName("");
      setHasCar(false);
    });
  };

  return (
    <div>
      <h2>Добавить пользователя</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Имя</label>
          <input
            id="name"
            placeholder="Введите имя"
            type="text"
            value={name}
            onChange={(e) => SetName(e.target.value)}
            required
          />
        </div>
        <div>
          <div>
            <label htmlFor="hasCar">Наличие машины</label>
            <input
              id="hasCar"
              type="checkbox"
              checked={hasCar}
              onChange={(e) => setHasCar(e.target.checked)}
            />
          </div>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Идёт загрузка" : "Добавить пользователя"}
        </button>
      </form>
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default AddUser;
