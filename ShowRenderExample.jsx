import { useState, useTransition } from "react";

const SlowRenderExample = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    if (!value.trim) {
      setList([]);
      return;
    }

    startTransition(() => {
      const items = [];
      for (let i = 0; i < 50000; i++) {
        items.push(e.target.value);
      }
      setList(items);
    });
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />
      {isPending ? (
        <div>Загрузка...</div>
      ) : (
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SlowRenderExample;
