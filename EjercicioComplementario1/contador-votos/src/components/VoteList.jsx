import React, { useState } from "react";
import VoteOption from "./VoteOption";

const VoteList = () => {
  const [options, setOptions] = useState([
    { name: "React", votes: 0 },
    { name: "Vue", votes: 0 },
    { name: "Angular", votes: 0 },
    { name: "Java", votes: 0 },
    { name: "Node.js", votes: 0 },
    { name: "C#", votes: 0 },
  ]);

  const handleVote = (index) => {
    const newOptions = [...options];
    newOptions[index].votes += 1;
    setOptions(newOptions);
  };

  const resetVotes = () => {
    const resetOptions = options.map((option) => ({ ...option, votes: 0 }));
    setOptions(resetOptions);
  };

  return (
    <>
      <h3>Opciones de Voto:</h3>
      <div className="vote-list">
        {options.map((option, index) => (
          <VoteOption
            key={index}
            name={option.name}
            votes={option.votes}
            totalVotes={options.reduce((sum, opt) => sum + opt.votes, 0)}
            onVote={() => handleVote(index)}
          />
        ))}
      </div>

      <button className="reset-button" onClick={resetVotes}>
        Reiniciar votos
      </button>
    </>
  );
};

export default VoteList;
