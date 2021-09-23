import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import '../Carousel/bootstrap.min.css' 
import NativeSelects from './NativeSelects'
import RcIf from 'rc-if';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import Footer from '../Footer/footer'
import './Quiz.css'

const Start = ( { onQuizStart } ) => {


  return (
    <>
    <div className='align-items-center'>
      <Jumbotron>
        <h1 className="display-3 text-center">Welcome to the EasyPick Questionnaire!</h1>
        <RcIf if={localStorage.getItem("authToken") != null} >
        <p className="center-align">Before we proceed with the ten questions of our questionnaire, please choose your question mode</p>
        </RcIf>
        <RcIf if={localStorage.getItem("authToken") == null} >
        <p className="center-align">Now we will proceed with our five questions questionnaire</p>
        </RcIf>
        <RcIf if={localStorage.getItem("authToken") != null} >
        <p  className='center-align'> <NativeSelects/></p>
        </RcIf>
        <hr className="my-2" />
        <p className="center-align">Now click on "Start Questionnaire" to find the right phone for your needs!</p>
        <p className="center-align">
          <Button color="primary" onClick={onQuizStart}><strong>Start Questionnaire</strong></Button>
        </p>
        <p className="center-align">
      <Link to="/">
      <Button color="danger"><strong>Leave Questionnaire</strong></Button>
      </Link>
      </p>
      </Jumbotron>
    </div>
  <div className='align-items-center'>
    <Image src="sample2.png"/> 
  </div>
  </>
  );
};

export default Start;