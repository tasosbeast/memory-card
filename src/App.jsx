import { useState } from "react";
import GameHeader from "./components/GameHeader";
import Card from "./components/Card";

const cardValues = [
  "🍎",
  "🍎",
  "🍌",
  "🍌",
  "🍒",
  "🍒",
  "🍇",
  "🍇",
  "🍉",
  "🍉",
  "🍓",
  "🍓",
  "🍑",
  "🍑",
  "🍍",
  "🍍",
];

function App() {
  return (
    <div className="app">
      <GameHeader score={1} moves={2} />

      <div className="cards-grid">
        {cardValues.map((card, index) => {
          return <Card card={card} key={index} />;
        })}
      </div>
    </div>
  );
}

export default App;
