import React from "react";

const VoteOption = ({ name, votes, totalVotes, onVote }) => {
  const percentage =
    totalVotes > 0 ? ((votes / totalVotes) * 100).toFixed(2) : 0;

  return (
    <div className="vote-option">
      <h3>{name}</h3>
      <p>
        Votos: {votes} ({percentage}%)
      </p>
      <button onClick={onVote}>Votar</button>
    </div>
  );
};

export default VoteOption;
