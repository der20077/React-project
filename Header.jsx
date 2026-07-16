import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { PlayerContext } from "../contexts/PlayerContent";
import UserInfo from "./App/UserInfo";

const Header = () => {
  const user = useContext(UserContext);
  const player = useContext(PlayerContext);
  return (
    <div>
      <h1>Добро пожаловать {user.name} !</h1>
      <button onClick={player.togglePlay}>
        {player.isPlaying ? "Остановить" : "Запустить"}
      </button>
      <UserInfo />
    </div>
  );
};

export default Header;
