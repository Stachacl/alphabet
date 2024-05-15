import type { NextPage } from "next";
import Game from "./components/game";
import "./globals.css";

const Home: NextPage = () => {
  return (
    <div className="relative">
      <Game />
    </div>
  );
};

export default Home;
