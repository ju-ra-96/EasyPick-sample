import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link } from 'react-router-dom'
import CardActions from '@material-ui/core/CardActions';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MobileFriendlyIcon from '@material-ui/icons/MobileFriendly';
import './Quiz.css'


import axios from 'axios';

//import { formatTime } from './utils/quiz';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));



const End = ({ results, data, onReset, onAnswersCheck, time, priority }) => {
  const classes = useStyles();
 /*  const [correctAnswers, setCorrectAnswers] = useState(0); */
  

//Handling duplicate answers 
for(var i = 0; i < results.length - 1; i++) {
  if(results[i].q === results[i+1].q) {
    results.splice(i, 1);
  }
}
/* var message = results; */





/* var message = new Array(10); */
/* 
for(var i = 0; i < 10; i++) {
  if(i < 10)
    results[i] = results[i].a;
/*   else if(i === 10)
    message[i] = priority;}  */


/* console.log(message);  */

//Post requests to send the results to the backend

/* const  */
/* message = JSON.stringify(Object.assign({}, message)) */

/* var message = results; */

  const postData = async (e) => {
    e.preventDefault();

  const config = {
      header: {
        "Content-Type": "application/json",
      },
    }; 


    try {
      await axios.post(
        "http://localhost:5000/api/questionnaire/getAnswers",
        { results },
       config  
      );
    } catch (error) {
      console.log(error.message);
    }
  };



  var displayResults = new Array(results.length);
  displayResults = results;
  for(let i = 0;i < displayResults.length;i++){
    displayResults[i].q = data[i].question
  }

  return(
    <Card>
    <CardContent>
      <div className="content">
        <h2 className='center-align endHeader'><strong>Questionnaire Completed!</strong></h2>
        <h5 className='center-align progress'><strong>100%</strong></h5>
        <p>
        <ol>
          {displayResults.map((result, i) => (
            <li key={i} className="mb-6 endResult">
              <p><strong>{result.q}</strong></p> 
              <p className='has-background-success'>Your answer: {result.a}</p>
            </li>
          ))}
        </ol>
        </p>
        <hr className="my-2" />
        <p className="center-align">Now you can click on Run Again to repeat the Questionnaire or click on Submit to submit it.</p>
        <p className="center-align">Please firstly click Submit and then Get Results</p>
        <div>
        <CardActions style={{justifyContent: 'center'}}>
          {/* <Button variant="contained" color="primary" size="medium" onClick={onAnswersCheck}>Check your answers</Button> */}
          <Button component={Link} variant="contained" color="secondary" size="medium" className={classes.button} startIcon={<DeleteIcon />} onClick={onReset}>Run Again</Button>
          {/* <Button variant="contained" color="primary" size="medium" className={classes.button} startIcon={<SaveIcon />}>Save</Button> */}
          <Button  component={Link} /*to='/result' */ variant="contained" color="primary" size="medium" onClick={postData} className={classes.button} startIcon={<CloudUploadIcon />}>Submit</Button>
          <Button  component={Link} to='/result' variant="contained" color="primary" size="medium" className={classes.button} startIcon={<MobileFriendlyIcon />}>Get Results</Button>
          <Button component={Link} to = '/' variant="contained" color="primary" size="medium" className={classes.button} startIcon={<ExitToAppIcon />} onClick={onReset}>Exit</Button>
          </CardActions>
          </div>
        </div>
      </CardContent>
    </Card>

  );
}

export default End;