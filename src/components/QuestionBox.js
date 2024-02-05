import React, { useState } from 'react'
import questions from "../questions";
import Result from "../components/Result";
export default function QuestionBox() {

  let [highLight, sethighLight] = useState(false)
  let [questionNumber, setNumber] = useState(0)
  let [score, setScore] = useState(0)

  let handleOption = (element) => {
    const isCorrect = element.isCorrect;
    setScore((isCorrect ? score + 1 : score))
    setNumber(questionNumber + 1)
  }

  let highLightQuestion = {
    color: highLight ? "red" : "black",
  }

  return (
    <>
      {questionNumber < 5 ? (
        <div className="yellow">
          <h2>
            Question {questionNumber + 1} of 5
          </h2>
          <h1 style={highLightQuestion}>
            {questions[questionNumber].text}
          </h1><div className='options'>{questions[questionNumber].options.map((element) => (
            <button onClick={() => handleOption(element)}>Option {element.id + 1} : {element.text} </button>
          ))}
          </div><div className='highlight'>
            <button onClick={() => sethighLight(true)}>Highlight</button>
            <button onClick={() => sethighLight(false)}>Remove Highlight</button>
          </div>
        </div>
      ) : (<Result props={score} />)
      }</>

  )
}
