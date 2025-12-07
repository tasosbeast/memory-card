import { useState } from "react";
import GameHeader from "./components/GameHeader";

function App() {
  return (
    <div className="app">
      <GameHeader score={1} moves={2} />
    </div>
  );
}

export default App;
