import { useState } from "react";

export function Clock() {
  const date = new Date();

  const [hours, setHours] = useState(date.getHours());
  const [minutes, setMinutes] = useState(date.getMinutes());
  const [seconds, setSeconds] = useState(date.getSeconds());



  const clock = `${hours}:${minutes}:${seconds}`;
  return (
    <div>
      <h1>{clock}</h1>
    </div>
  );
}
