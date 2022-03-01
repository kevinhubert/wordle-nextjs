const GameTile = ({...props}) => {
  return (
    <div className="border-2 h-12 w-12 flex justify-center text-3xl font-bold uppercase items-center" data-letter={props.currentLetter}>{props.currentLetter}</div>
  )
}

export default GameTile;
