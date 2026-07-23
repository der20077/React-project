import { useEffect } from "react";
import useApi from "../../hooks/useApi";

const UserList = () => {
  const { data, loading, error, get } = useApi(
    "https://jsonplaceholder.typicode.com/",
  );

  useEffect(() => {
    get("users");
  }, []);

  loading && <p>Загрузка...</p>;

  error && <p>Ошибка: {error.message}</p>;

  return (
    <>
      <div>
        <h2>Список пользователей</h2>
        <ul>
          {data && data.map((user) => <li key={user.id}>{user.name}</li>)}
        </ul>
      </div>
    </>
  );
};

export default UserList;
