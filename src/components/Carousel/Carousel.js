import React from 'react';
import '../Carousel/bootstrap.min.css';

import {UncontrolledCarousel} from 'reactstrap';

const items = [
  {
    src: 'carousel1.jpeg',
    altText: 'Slide 1',
    /* caption: 'Slide 1',
    header: 'Slide 1 Header', */
    key: '1',
  },
  {
    src: 'carousel2.jpeg',
    altText: 'Slide 2',
    /* caption: 'Slide 2',
    header: 'Slide 2 Header', */
    key: '2',
  },
  {
    src: 'carousel3.jpeg',
    altText: 'Slide 3',
  /*   caption: 'Slide 3',
    header: 'Slide 3 Header', */
    key: '3',
  },
];

const CarouselSample = () => <UncontrolledCarousel items={items} />;

export default CarouselSample;
