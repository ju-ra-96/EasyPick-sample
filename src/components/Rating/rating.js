import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Rating from '@material-ui/lab/Rating';
import RcIf from 'rc-if';

import './rating.css';
const RatingComponent = (props) => {
  const [, setError] = useState('');
  const [value, setValue] = useState('');
  const [ratings, setRatings] = useState('');
  const [avg, setAvg] = useState('');
  const [rated, setRated] = useState('');

  useEffect(() => {
    DisplayRatings();
  });
  const DisplayRatings = async (e) => {
    try {
      const config = {
        Headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      };
      const deviceModel = props.deviceModel;
      await axios
        .post(
          'http://localhost:5000/api/rating/getDeviceAvgRating',
          {
            email: localStorage.getItem('email'),
            user:
              localStorage.getItem('firstName') +
              ' ' +
              localStorage.getItem('lastName'),
            device: deviceModel,
          },
          config
        )
        .then((res) => {
          setAvg(res.data.avg);
          setRatings(res.data.ratings);
          setRated(res.data.rated);
        });
    } catch (error) {
      setError('please retry to reload the page');
      setTimeout(() => {
        setError('');
      }, 5000);
    }
  };

  const submitRating = async (e, value) => {
    try {
      e.preventDefault();
      const config = {
        header: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      };
      const deviceModel = props.deviceModel;
      await axios.post(
        'http://localhost:5000/api/rating/createRating',
        {
          value: value,
          email: localStorage.getItem('email'),
          user:
            localStorage.getItem('firstName') +
            ' ' +
            localStorage.getItem('lastName'),
          device: deviceModel,
        },
        config
      );
      window.location.reload();
    } catch (error) {
      setError('please retry to rate the phone');
      setTimeout(() => {
        setError('');
      }, 5000);
    }
  };

  return (
    <div className="rating-container">
      <div className="rating-parent">
        <Rating
          name="rating-read"
          defaultValue={2.5}
          value={avg}
          precision={0.5}
          readOnly
        />
        <div name="number-of-raters"> ({ratings}) </div>
      </div>
      <RcIf if={rated === false}>
        <form onSubmit={(e) => submitRating(e, value)}>
          <select
            name="rate"
            className="rating-write"
            onChange={(e) => setValue(e.target.value)}
          >
            <option value=""></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <input
            className="submit-button"
            onChange={(e) => setValue(e.target.value)}
            type="submit"
            value="Submit"
          />
        </form>
      </RcIf>
    </div>
  );
};

export default RatingComponent;
