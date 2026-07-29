import { useDeferredValue, useEffect, useState } from "react";
import SearchList from "../SearchList";

const App = () => {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  useEffect(() => {
    console.log("App useEffect query:", deferredQuery);
  }, [deferredQuery]);

  return (
    <div>
      <input type="text" onChange={(e) => setQuery(e.target.value)} />
      <SearchList query={deferredQuery} />
    </div>
  );
};

export default App;
