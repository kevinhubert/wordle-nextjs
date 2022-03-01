import GameTile from "./GameTile";

const GameGrid = () => {
    return (
      <div>
        <div className="flex justify-between px-5">
          <GameTile currentLetter="B"/>
        </div>
      </div>
    )
  }

  export default GameGrid;
