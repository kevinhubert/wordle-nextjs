const GameTile = ({...props}) => {
  return (
    <div className="border-2 h-12 w-12 flex justify-center items-center text-3xl font-bold" data-letter={props.currentLetter}>{props.currentLetter}</div>
  )
}

export default GameTile;
