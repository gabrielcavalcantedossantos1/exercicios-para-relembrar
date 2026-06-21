export const FamilyFilter = ({members}) => {
    const filteredMembers = members.filter(member => member.age > 30);
    return (
        <div>
            {filteredMembers.map((member) => (
                <div key={member.name}>
                    <h3>{member.name}</h3>
                    <p>Idade: {member.age} anos</p>
                    <p>Cidade: {member.city}</p>
                </div>
            ))}
        </div>
    );
}