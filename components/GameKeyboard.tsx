import React from 'react';

const GameKeyboard = ({...props}) => {

  // Keyboard data
  const keyboardFirstRow = ['q','w','e','r','t','y','u','i','o','p'];
  const keyboardSecondRow =['a','s','d','f','g','h','j','k','l'];
  const keyboardThirdRow = ['z','x','c','v','b','n','m']

  return (
    <div className="py-5">
      <div className="flex justify-between my-2">
        {
          keyboardFirstRow.map(letter => (
            <div className="h-12 w-8 bg-slate-600 flex justify-center items-center text-1xl font-bold uppercase rounded" data-letter={letter} onClick={(letter) => props.handleAddLetter(letter.target.attributes[1].value)}>{letter}</div>
          ))
        }
      </div>
      <div className="flex justify-between my-2">
        <div className="flex-[.1]"></div>
        {
          keyboardSecondRow.map(letter => (
            <div className="h-12 w-8 bg-slate-600 flex justify-center items-center text-1xl font-bold uppercase rounded" data-letter={letter} onClick={(letter) => props.handleAddLetter(letter.target.attributes[1].value)}>{letter}</div>
          ))
        }
        <div className="flex-[.1]"></div>
      </div>
       <div className="flex justify-between my-2">
        <div className="h-12 bg-slate-600 flex justify-center items-center text-1xl font-bold uppercase rounded text-xs w-12" onClick={props.handleSubmitWord}>Enter</div>
          {
          keyboardThirdRow.map((letter, index) => {
            return <div key={index} className="h-12 w-8 bg-slate-600 flex justify-center items-center text-1xl font-bold uppercase rounded" data-key={letter} onClick={(letter) => props.handleAddLetter(letter.target.attributes[1].value)}>{letter}</div>
          })
        }
        <div className="h-12 bg-slate-600 flex justify-center items-center text-1xl font-bold uppercase rounded text-xs w-12" onClick={props.handleDeleteLetter}>Delete</div>
      </div>
    </div>
  )
}

export default GameKeyboard;
