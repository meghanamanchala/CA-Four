import React from 'react'

export default function Result(props) {
  let result = props.props
 let handleRestart = () =>{
  window.location.reload()
 }
  return (
    <div className='reusltBox'>
    <h1>
      Final Results
    </h1>
    <h2>{result} out of 5 Correct - {(result/5)*100}%</h2>
     <button className='restart' onClick={handleRestart}>Restart Quiz</button>
    </div>
  )
}
