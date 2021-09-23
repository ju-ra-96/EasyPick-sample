import React from 'react';
import FooterContainer from './Footer/footer';
import Carousel from './Carousel/Carousel';
/* import Jumbotron from './carousel/Jumbotron' */
import {Jumbotron} from 'reactstrap';
import Button from '@material-ui/core/Button';
/* import '../components/carousel/bootstrap.min.css' */
import JumbotronTop from './Jumbotrons/JumbotronTop';
import Navbar from './Navbar/Navbar';
import {Link} from 'react-router-dom';


const Main = ({onQuizStart}) => {
  return (
    <div id='body' className="Home">
      <Navbar />
      <JumbotronTop />
      <Carousel />
      <Jumbotron>
        <h1 className="text-center display-3">Hello, friend!</h1>
        <p className="text-center lead">
          Now you can click on "Start Questionnaire" to find the phone which
          fully matches your demands!
        </p>
        <hr className=" text-center my-2" />
        <p className="text-center">
          If you are interested at learning about how our system actually works,
          then simply click{' '}
          <Button
          component={Link}
          to='/about'
          variant="contained"
          color="secondary" 
          size="small">
            Learn More
          </Button>
        </p>
        <p className="text-center lead">
          <Button
            component={Link}
            to="/question"
            variant="contained"
            color="primary"
            size="medium"
            onClick={onQuizStart}
          >
            Start Questionnaire
          </Button>
        </p>
      </Jumbotron>
      <FooterContainer />
    </div>
  );
};

export default Main;
