import React from 'react';

const Team = (props) => {
    const members = props.team
    const budget = members.reduce((sum, member) => sum + member.salary, 0)
    return (
        <div className="text-center border border-primary">
            <h1>Team Info</h1>
            <h4>Team Members: {members.length}</h4>
            <p>Selected Players:</p>
            <ul>
                {
                    members.map(member => <li>{member.name} (Salary: {member.salary})</li>)
                }
            </ul>
            <h4>Total Budget: {budget}</h4>
        </div>
    );
};

export default Team;