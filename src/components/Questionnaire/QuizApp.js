import React, { useState, useEffect } from 'react';
import './Quiz.css';

import Start  from './quizStart';
import Question  from './Questionnaire';
import End from './End';
import Modal from './Modal';

import quizPrivate from './data/quiz.json';
import quizPublic from './data/quizPublic.json'

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/footer'

import RcIf from 'rc-if';


let interval;

const QuizApp = () => {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if(step === 3) {
      clearInterval(interval);
    }
  }, [step]); 

  /* const footerAlt = {
    position:'absolute',
    left:0,
    bottom:0,
    right:0,
  } */

  const quizStartHandler = () => {
    setStep(2);
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  }

  const resetClickHandler = () => {
    setActiveQuestion(0);
    setAnswers([]);
    setStep(2);
    setTime(0);
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  }

  //const responses = JSON.stringify({answers});
  
  

  //console.log({answers});
  //console.log('these are tests '+ responses)
  /* for(var i = 0; i < responses.length; i++) {
    console.log('question'+i+responses[i]);
  } */
 

  return (
    <>
    <Navbar />
      <div className="App">
      <RcIf if={localStorage.getItem("authToken") != null} >
      {step === 1 && <Start onQuizStart={quizStartHandler} />}
      {step === 2 && <Question 
        data={quizPrivate.data[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberOfQuestions={quizPrivate.data.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep={setStep}
      />}
      {step === 3 && <End 
        results={answers}
        data={quizPrivate.data}
        onReset={resetClickHandler}
        onAnswersCheck={() => setShowModal(true)}
        time={time}
      />}

      {showModal && <Modal 
        onClose={() => setShowModal(false)}
        results={answers}
        data={quizPrivate.data}
      />}
     </RcIf>
     <RcIf if={localStorage.getItem("authToken") == null} >
      {step === 1 && <Start onQuizStart={quizStartHandler} />}
      {step === 2 && <Question 
        data={quizPublic.data[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberOfQuestions={quizPublic.data.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep={setStep}
      />}
      {step === 3 && <End 
        results={answers}
        data={quizPublic.data}
        onReset={resetClickHandler}
        onAnswersCheck={() => setShowModal(true)}
        time={time}
      />}

      {showModal && <Modal 
        onClose={() => setShowModal(false)}
        results={answers}
        data={quizPublic.data}
      />}
     </RcIf>
    </div>
    <div className='fixed-bottom'>
    <Footer />
    </div>
    </>
  );
}

export default QuizApp;