import { useContext, useEffect, useRef } from "react";
import { UserContext } from "../../contexts/UserContext";
import { PlayerContext } from "../../contexts/PlayerContent";

const UserDetails = () => {
  const user = useContext(UserContext);
  const player = useContext(PlayerContext);

  const audoiRef = useRef(null);

  useEffect(() => {
    if (audoiRef.current) {
      if (player.isPlaying) {
        audoiRef.current.play();
      } else {
        audoiRef.current.pause();
      }
    }
  }, [player.isPlaying]);

  return (
    <>
      <div>
        <h3>Детали пользователя</h3>
        <p>Имя: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>

      <div>
        <h4>Плеер</h4>
        <p>Состояние: {player.isPlaying ? "Играет" : "На паузе"}</p>
        <audio
          ref={audoiRef}
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        />
      </div>
    </>
  );
};

export default UserDetails;
