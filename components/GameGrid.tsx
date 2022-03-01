import GameTile from "./GameTile";

const GameGrid = (props) => {
    return (
      <div>
        <div className="flex justify-between px-5">
          {
            props.userWord.map(letter => {
            return <GameTile currentLetter={letter}/>
            })
          }
        </div>
      </div>
    )
  }

  export default GameGrid;
