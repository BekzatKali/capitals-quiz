import React from "react"; 

export default function Game({onClickVariant, question, step, questions}) {

    const percentage = Math.round(step / questions.length * 100)

    return (
        <div className='app'>
            <div style={{width: `${percentage}%`}} className="progress"></div>
            <h2 className='title'>What's the capital of {question.title}?</h2>
            <ul className='variants'>
               {question.variants.map((item, index) => 
               <li onClick={() => onClickVariant(index)} key={item}>{item}</li>)}
            </ul>
       </div>
    )
}
