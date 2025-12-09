import { useState, useEffect } from "react";
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
  const [cards, setCards] = useState([]);

  const initializeGame = () => {
    // Shuffle the cards

    const finalCards = cardValues.map((value, index) => {
      return {
        id: index,
        value,
        isFlipped: false,
        isMatched: false,
      };
    });

    setCards(finalCards);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  return (
    <div className="app">
      <GameHeader score={1} moves={2} />

      <div className="cards-grid">
        {cards.map((card, index) => {
          return <Card card={card} key={index} />;
        })}
      </div>
    </div>
  );
}

export default App;
