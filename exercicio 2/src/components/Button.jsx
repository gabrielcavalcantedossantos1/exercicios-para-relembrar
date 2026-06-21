import { useState } from "react";

export const Button = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <span>{counter}</span>
      <br />
      <button onClick={() => setCounter(counter + 1)}>Incrementar</button>
    </div>
  );
};
