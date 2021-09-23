import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import axios from 'axios';
import {Button}  from 'reactstrap'; 
import Icon from '@material-ui/core/Icon';
/* import Button from '@material-ui/core/Button'; */

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));


export default function NativeSelects() {
  const classes = useStyles();
  const [mode, setMode] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = async (e, mode) => {
    e.preventDefault();

  const config = {
      header: {
        "Content-Type": "application/json",
      },
    }; 


    try {
       await axios.post(
        "http://localhost:5000/api/questionnaire/getPrio",
        { mode },
       config  
      );
    } catch (error) {
      console.log(error.message);
    }
  };
  


  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  
  //Send data to backend to include the Quiz Mode in the query
  const postData = async (e) => {
    e.preventDefault();

  const config = {
      header: {
        "Content-Type": "application/json",
      },
    }; 


    try {
       await axios.post(
        "http://localhost:5000/api/questionnaire/getPrio",
        { mode },
       config  
      );
    } catch (error) {
      console.log(error.message);
    }
  };




  return (
    <div>
    {/* <Button className={classes.button} onClick={handleOpen}>
        Open the select
      </Button>  */}
      {/* <FormControl onSubmit={(e) => handleChange(e, mode)} className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Quiz Mode</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={mode}
          onChange={(e) => setMode(e.target.value)}
        >
          <MenuItem value={''}></MenuItem>
          <MenuItem value={'Price'}>Price</MenuItem>
          <MenuItem value={'Battery Life'}>Battery Life</MenuItem>
          <MenuItem value={'Camera'}>Camera</MenuItem>
          <MenuItem value={'Performance'}>Performance</MenuItem>
        </Select>
      </FormControl> 
      <input
            className="submit-button"
            onChange={(e) => setMode(e.target.value)}
            type="submit"
            value="Submit"
          /> */}
     <form onSubmit={(e) => handleChange(e, mode)}>
          <select
            name="rate"
            className="rating-write"
            onChange={(e) => setMode(e.target.value)}
          >
            <option value=""></option>
            <option value="Price">Price</option>
            <option value="Battery Life">Battery Life</option>
            <option value="Camera">Camera</option>
            <option value="Performance">Performance</option>
          </select>
          <input
            className="btn btn-primary"
            onChange={(e) => setMode(e.target.value)}
            type="submit"
            value="Submit"
          />
        </form> 
    </div>
  );
}

  