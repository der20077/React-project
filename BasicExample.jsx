import { useState, useTransition } from "react";

const BasicExample = () => {
  const [isPending, startTransition] = useTransition();
  const [count, setCount] = useState(0);

  const hanndleClick = () => {
    startTransition(() => {
      setCount((prev) => prev + 1);
    });
  };
  return (
    <div>
      <button onClick={hanndleClick}>Увеличить счётчик</button>
      <span>{isPending ? "Загрузка" : count}</span>
    </div>
  );
};

export default BasicExample;
