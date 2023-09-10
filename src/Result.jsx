import React from "react"; 
import Confetti from 'react-confetti'

export default function Result({playAgainTheGame, correct, questions}) {

    return (
        <div className='app-result'>
            {<Confetti />}
            <h2>The game is over</h2>
            <h3>You got {correct} out of {questions.length}</h3>
            <button onClick={playAgainTheGame}>Play again!</button>
       </div>
    )
}