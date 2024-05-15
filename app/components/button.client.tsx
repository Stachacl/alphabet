"use client";

import React, { useState } from "react";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const Buttons: React.FC = () => {
  const [options, setOptions] = useState<string[]>([]);

  const startGame = () => {
    const shuffled = letters.sort(() => 0.5 - Math.random());
    setOptions(shuffled.slice(0, 3));
    // Add your logic for playing audio
  };

  const checkAnswer = (letter: string) => {
    // Add your logic for checking the answer
  };

  return (
    <div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={startGame}
      >
        Start Game
      </button>
      {options.map((letter) => (
        <button
          key={letter}
          className="bg-green-500 text-white px-4 py-2 m-2 rounded"
          onClick={() => checkAnswer(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
