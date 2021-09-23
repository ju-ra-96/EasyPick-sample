import React, { useState, useEffect, useRef } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './Quiz.css'
import Box from '@material-ui/core/Box';

/* import bootstrap from '../Carousel/bootstrap.min.css'  */
import RcIf from 'rc-if';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  Button: {
    mt: 4,
  }
  },
}));

const Question = ({ data, onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, onSetStep }) => {
  const [selected, setSelected] = useState('');
  const [error, setError] = useState('');
  const radiosWrapper = useRef();
  const classes = useStyles();

 useEffect(() => {
    const findCheckedInput = radiosWrapper.current.querySelector('input:checked');
    if(findCheckedInput) {
      findCheckedInput.checked = false;
    }
  }, [data]); 

  const changeHandler = (e) => {
    setSelected(e.target.value);
    if(error) {
      setError('');
    }
  }
  
  const nextClickHandler = (e) => {
    if(selected === '') {
      return setError('Please select one option!');
    }
    onAnswerUpdate(prevState => [...prevState, { q: data.id, a: selected}]);
    setSelected('');
    if(activeQuestion < numberOfQuestions - 1) {
      onSetActiveQuestion(activeQuestion + 1);
    }else {
      onSetStep(3);
    }
  }

  const prevClickHandler = (e) => {
    if(activeQuestion === 0){
      return setError('There is no previous question')
    }
    setSelected('');
    if(activeQuestion < numberOfQuestions - 1) {
      onSetActiveQuestion(activeQuestion - 1);
      
    }
  }

  return(
    <Card>
      <CardContent>
        <div className="content">
        <RcIf if={localStorage.getItem("authToken") != null} >
          <h1 className="mb-5">Question {data.id} of 10</h1>
        </RcIf>
        <RcIf if={localStorage.getItem("authToken") == null} >
          <h1 className="mb-5 center-align">Question {data.id} of  5</h1>
        </RcIf>
          <h2 className="mb-5">{data.question}</h2>
           <div className="control" ref={radiosWrapper}>
            {data.choices.map((choice, i) => (
              <label className="radio has-background-light" key={i}>
                <input type='radio' name="light" value={choice} onChange={changeHandler} />
                {choice}
              </label>
            ))}
          </div> 
          {error && <div className="has-text-danger">{error}</div>}
        </div>
        <Box display="flex" justifyContent="space-between">
        <Button variant="contained" color="secondary" size='large' onClick={prevClickHandler}>Prev</Button>
        <Button variant="contained" color="primary" size='large' onClick={nextClickHandler}>Next</Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default Question;