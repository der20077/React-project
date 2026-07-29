import { useState, useTransition } from "react";

const data = Array.from({ length: 10000 }, (_, i) => `Элемент ${i + 1}`);

const FilterExample = () => {
  const [qwery, setQwery] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const value = e.target.value;
    setQwery(value);

    startTransition(() => {
      setFilteredData(
        data.filter((item) => item.toLowerCase().includes(value.toLowerCase())),
      );
    });
  };
  return (
    <div>
      <input
        type="text"
        value={qwery}
        onChange={handleChange}
        placeholder="Поиск..."
      />
      {isPending ? (
        <div>Поиск...</div>
      ) : (
        <ul>
          {filteredData.slice(0, 20).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilterExample;
