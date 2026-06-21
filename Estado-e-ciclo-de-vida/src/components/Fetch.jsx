import { useState } from "react";

const Fetch = () => {
  const [loading, setLoading] = useState(false);
  const [dados, setDados] = useState([]);

  const data = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos",
      );
      const data = await response.json();
      setDados(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={data}>Fetch</button>
      {loading && <p>Loading...</p>}
      {dados.map((item) => (
        <ul key={item.id}>
          <li>
            {item.title} - {item.completed}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Fetch;
