import React from "react";
import Buttons from "./button.client";

const Game: React.FC = () => {
  return (
    <div className="game-backdrop flex flex-col items-center">
      <h1 className="text-4xl mb-4 ">Alphabet Learning Game</h1>
      <Buttons />
    </div>
  );
};

export default Game;
