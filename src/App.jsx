import { useState } from 'react'
import './App.css'
import Game from "./Game"
import Result from './Result'

function App() {
  const [step, setStep] = useState(0)
  const [correct, setCorrect] = useState(0)

  const questions = [
    {
      title: "France",
      variants: ['Rome', 'London', 'Paris', 'Madrid'],
      correct: 2
    },
    {
      title: 'Norway',
      variants: ['Tokyo', 'Berlin', 'Dublin', 'Oslo'],
      correct: 3
    },
    {
      title: 'England',
      variants: ['New York', 'Toronto', 'London', 'Ankara'],
      correct: 2
    },
    {
      title: 'Scotland',
      variants: ['Cardiff', 'Copenhagen', 'Dublin', 'Edinburg'],
      correct: 3
    },
    {
      title: 'Canada',
      variants: ['Toronto', 'Washington', 'Chicago', 'Ankara'],
      correct: 0
    },
    {
      title: 'Switzerland',
      variants: ['Ljubljana', 'Paris', 'Vatican City', 'Bern'],
      correct: 3
    },
    {
      title: 'Ireland',
      variants: ['Zagreb', 'San Marino', 'Dublin', 'Vilnius'],
      correct: 2
    },
    {
      title: 'Finland',
      variants: ['Oslo', 'Saint Peter Port', 'Helsinki', 'Prague'],
      correct: 2
    },
    {
      title: 'Slovenia',
      variants: ['Ljubljana', 'Skopje', 'Vaduz', 'Stockholm'],
      correct: 0
    },
    {
      title: 'Lithuania',
      variants: ['Vilnius', 'Bratislava', 'Podgorica', 'Budapest'],
      correct: 0
    },
    {
      title: 'Kazakhstan',
      variants: ['Tbilisi', 'Brussels', 'Luxembourg City', 'Astana'],
      correct: 3
    },
    {
      title: 'Monaco',
      variants: ['Kyiv', 'Athens', 'Monaco', 'Saint Peter Port'],
      correct: 2
    },
    {
      title: 'Cyprus',
      variants: ['Prague', 'Nicosia', 'Mariehamn', 'Belfast'],
      correct: 1
    },
    {
      title: 'Italy',
      variants: ['Berlin', 'Vatican City', 'Madrid', 'Rome'],
      correct: 3
    },
    {
      title: 'Czechia',
      variants: ['Kyiv', 'Prague', 'Athens', 'Sarajevo'],
      correct: 1
    }
  ]

  const question = questions[step];

  const onClickVariant = (index) => {
    console.log(step)
    setStep(prevStep => prevStep + 1)
    if (index === question.correct) {
      setCorrect(prevCorrect => prevCorrect + 1)
      setSelectedOption('correct');
    } else {
      setSelectedOption('incorrect')
    }
  }

  const playAgain = () => {
    setStep(0)
    setCorrect(0)
  }

  return (
    <div>
      { step !== questions.length ? 
      <Game 
      questions={questions}
      question={question} 
      step={step} 
      onClickVariant={onClickVariant}
      /> : <Result correct={correct} questions={questions} playAgainTheGame={playAgain}/> }
      <p style={{textAlign: 'center', marginTop: '10px'}}>By Bekzat Kali</p>
    </div>
  )
}

export default App

