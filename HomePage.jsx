import "./UserList.scss";

function UserList({ users }) {
  return (
    <ul className="users">
      {users.map((user) => {
        const hobbis = user.hobbies;
        return (
          <li className="card" key={user.id}>
            <h1 className="card__name">{user.name}</h1>
            <p>Возраст {user.age}</p>
            <p>Хобби</p>
            <ul>
              {hobbis.length > 0 ? (
                hobbis.map((hobbi, index) => <li key={index}>{hobbi}</li>)
              ) : (
                <p className="card__not-hobby">Нет хобби</p>
              )}
            </ul>
          </li>
        );
      })}
    </ul>
  );
}

export default UserList;
