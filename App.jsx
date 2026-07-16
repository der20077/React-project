import { UserProvider } from "../../contexts/UserContext";
import { PlayerProvider } from "../../contexts/PlayerContent";
import Header from "../Header";

function App() {
  return (
    <UserProvider>
      <PlayerProvider>
        <Header />
      </PlayerProvider>
    </UserProvider>
  );
}

export default App;
