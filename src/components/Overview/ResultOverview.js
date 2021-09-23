import React, {useEffect} from 'react';
import Footer from '../Footer/footer';
import axios from 'axios';
import Loader from '../Loader/Loader';
import ResultCard from '../Cards/ResultCard';
import Header from '../Navbar/Navbar';
import {Grid} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import '../Questionnaire/Quiz.css'
import './PhoneOverview.css'
import styled, { css } from 'styled-components';

function ResultOverview() {
  const url = `http://localhost:5000/api/questionnaire/returnPhones/`;
  const [products, setProducts] = React.useState({
    loading: false,
    data: null,
    error: false,
  });
const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

  useEffect(() => {
    setProducts({
      loading: true,
      data: null,
      error: false,
    });
    axios
      .get(url)
      .then((response) => {
        setProducts({
          loading: false,
          data: response.data,
          error: false,
        });
      })
      .catch(() => {
        setProducts({
          loading: false,
          data: null,
          error: true,
        });
      });
  }, [url]);

  let content = null;

  if (products.error) {
    content = <p>There was an error please refresh or try again later.</p>;
  }

  if (products.loading) {
    content = <Loader></Loader>;
  }

  if (products.data) {
    content = products.data.map((product) => (
      <div className='center-align' key={product.id}>
        <ResultCard product={product} />
      </div>
    ));
    content = 
    <Grid container>
      {content}
      </Grid>;
  }

  return (
    <>
    <div>
      <Header />
     {/*  <div className="container mx-auto">  */}
      <h1 className="font-bold text-2xl mb-3 pageTitle center-align result-header">
        We Recommend You These Phones!
      </h1>
      {/* <Grid container>
        <Grid item xs={12} sm={6} md={4}>
          {content}
        </Grid>
      </Grid> */}
    {/*   <div className="md:flex flex-wrap md:-mx-3 center-align">
      <Grid item xs={6}>
        {content}
      </Grid>
        </div> */}
      <div className="md:flex flex-wrap md:-mx-3">
        {content}
        </div> 
      {/* <div className="md:flex flex-wrap md:-mx-3"> */}
      {/* </div> */}
      {/* </div>  */}
    </div>
    {/* <div className='footerAlt'>  */}
    {/* <Box alignSelf="flex-end"> */}
    {/* <Container> */}
    <div className='fixed-bottom'>
     <Footer />
     </div>
  {/*   </Container> */}
     {/* </Box> */}
    {/* </div>  */}
     </>
  );
}

export default ResultOverview;
