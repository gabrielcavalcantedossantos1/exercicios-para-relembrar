export const MultProps = ({ name, age, city }) => {
  return (
    <div>
      <p>Nome: {name}</p>
      <p>Idade: {age}</p>
      {age >= 18 ? <p>Maior de idade</p> : <p>Menor de idade</p>}
      <p>Cidade: {city}</p>
    </div>
  );
};
