import { useState } from "react";
import useApi from "../../hooks/useApi";

const UpdateUser = ({ userId = 3 }) => {
  const [hasCar, setHasCar] = useState(false);
  const { loading, error, put } = useApi(
    "https://69ea182715c7e2d512694c71.mockapi.io/api/v1/",
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      hasCar,
    };

    put(`todo/${userId}`, body).then(() => {
      alert("Пользоваттель обновлён");
      setHasCar(false);
    });
  };

  return (
    <div>
      <h2>Добавить пользователя</h2>
      <form onSubmit={handleSubmit}>
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
          {loading ? "Идёт загрузка" : "Обновить пользователя"}
        </button>
      </form>
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default UpdateUser;
