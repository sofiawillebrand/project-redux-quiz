import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { quiz } from '../reducers/quiz'

export const CurrentQuestion = () => {
  // state can also be called store, it is up to us
  // useSelector callback function, can access everything from the store. Redux store gives us all the possibilities. 
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])

  const dispatch = useDispatch()

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  const onAnswerSubmit = (id, index) => {
    dispatch(
      quiz.actions.submitAnswer({ 
        questionId: id, 
        answerIndex: index 
      })
    )
  }

  return (
    <div>
      <h1>Question: {question.questionText}</h1>
      {question.options.map((item, index) => (
        <button 
          key={item} 
          onClick={() => onAnswerSubmit(question.id, index)}>
            {item}
        </button>
      ))}
    </div>
  )
}
