import { useEffect, useState } from "react";
import { UseLocalStorage } from "../../hooks/useLocalStorage";
import Setings from "../Setinngs/Setinngs";

function App() {
  const [name, handleSetName, handleRemoveName] = UseLocalStorage(
    "name",
    "Гость",
  );

  return (
    <div>
      <h1>Привет, {name} !</h1>
      <input
        type="text"
        value={name}
        placeholder="Введите ваше имя"
        onChange={(e) => handleSetName(e.target.value)}
      />
      <button onClick={handleRemoveName}>Очистить имя</button>

      <Setings />
    </div>
  );
}

export default App;
