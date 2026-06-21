export const Family = ({ members }) => {
  return (
    <div>
      {members.map((member) => (
        <div key={member.name}>
          <h3>{member.name}</h3>
          <p>Idade: {member.age} anos</p>
          <p>Cidade: {member.city}</p>
        </div>
      ))}
    </div>
  );
};
