import React from "react";
import Buttons from "./button.client";

const Game: React.FC = () => {
  return (
    <div className="game-backdrop flex flex-col items-center justify-center h-screen">
      <div className="bg-white bg-opacity-50 rounded-lg p-6 mb-40 flex flex-col items-center">
        <h1 className="text-4xl mb-4">Alphabet Game</h1>
        <Buttons />
      </div>
    </div>
  );
};

export default Game;
