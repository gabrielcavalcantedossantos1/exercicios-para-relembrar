import { HelloWorld } from "./components/HelloWorld";
import { HelloName } from "./components/HelloName";
import { MultProps } from "./components/MultProps";
import { Family } from "./components/Family";
import { FamilyFilter } from "./components/FamilyFilter";
import { Button } from "./components/Button";

const App = () => {
  const members = [
    { name: "Gabriel", age: 18, city: "Goianira" },
    { name: "Maria", age: 45, city: "Brasília" },
    { name: "João", age: 50, city: "São Paulo" },
  ];

  return (
    <div>
      <h2>1 - Utilizando componentes simples</h2>
      <HelloWorld />

      <h2>2 - Utilizando props</h2>
      <HelloName name="Gabriel" />

      <h2>3 - Utilizando multiplas props</h2>
      <MultProps name="Gabriel" age={18} city="Goianira" />

      <h2>4 - Utilizando array de objetos</h2>
      <Family members={members} />

      <h2>5 - Utilizando filter</h2>
      <FamilyFilter members={members} />

      <h5>6 - Utlilizando usestate</h5>
      <Button />
    </div>
  );
};

export default App;
