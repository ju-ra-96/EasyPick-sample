import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import '../Carousel/bootstrap.min.css' 

const Example = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className=" text-center display-3">Welcome to EasyPick</h1>
          <p className="text-center lead">We help you to find the right phone for your needs !</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Example;
