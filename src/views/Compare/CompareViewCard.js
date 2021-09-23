import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";

import {
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  Grid,

} from "@material-ui/core";
import "./CompareView.css";




const useStyles = makeStyles({
  root: {
    width: 400,
    height: 250,
    marginBottom: 20,
  },
  media: {
    height: 80,
    width: 80,
    margin: 10,
  },
});

const CompareViewCard = (props) => {





  /* --------------------VARIABLES AND ARGUMENTS-------------------- */

  const classes = useStyles();

  const [openCompare, setOpenCompare] = React.useState(false);

  const handleClickOpenCompare = () => {
    setOpenCompare(true);
  };

  const handleCloseCompare = () => {
    setOpenCompare(false);
  };



  const [openDelete, setOpenDelete] = React.useState(false);

  const handleClickOpenDelete = () => {
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };


  /* --------------------------COMPARE FUNCTIONS------------------------------- */



  const compareCPU = (phone1, phone2, phone3)=>{ //This case is easy because the likelihood of cpuScores being the same is tiny
    if (phone1.cpuScore >= phone2.cpuScore && phone1.cpuScore >= phone3.cpuScore){
      return phone1;
    }
    if (phone2.cpuScore >= phone3.cpuScore && phone2.cpuScore >= phone1.cpuScore){
      return phone2;
    }
    if (phone3.cpuScore >= phone1.cpuScore && phone3.cpuScore >= phone2.cpuScore){
      return phone2;
    }
  }

  const compareCPUtext = (phone1, phone2, phone3) =>{
    let best = compareCPU(phone1, phone2, phone3);
    let result = "Out of the three recommended phones, the " + best.brand + " " +best.modelName+ " has the highest CPU-score. This means that it has the best performance in computing power. The better the CPU performance of one's phone, the better it will perform 'difficult' tasks such as streaming videos, having a Zoom call with your coworkers, or leaving many tabs open and running";
    return result;
  }




  const memoryCase = (phone1, phone2, phone3) =>{
    let result = 2;
    if (phone1.ram === phone2.ram && phone1.ram===phone3.ram){
      result = 3;
    }
    if (phone1.ram>phone2.ram && phone1.ram>phone3.ram || phone2.ram>phone1.ram && phone2.ram>phone3.ram || phone3.ram>phone2.ram && phone3.ram>phone2.ram){
      result =1;
    }
    return result;
  }

  const oneMoreRAM = (phone1, phone2, phone3)=>{
    if(phone1.ram>phone2.ram && phone1.ram>phone3.ram){
      return phone1;
    }
    if(phone2.ram>phone1.ram && phone2.ram>phone3.ram){
      return phone2;
    }
    if(phone3.ram>phone1.ram && phone3.ram>phone2.ram){
      return phone3;
    }
  }


  const twoMoreRAM = (phone1, phone2, phone3)=>{
    let resultingString = "";
    if(phone1.ram===phone2.ram){
      resultingString="the "+phone1.brand+" "+phone1.modelName+" and the "+phone2.brand+" "+phone2.modelName;
    }
    if(phone1.ram===phone3.ram){
      resultingString="the "+phone1.brand+" "+phone1.modelName+" and the "+phone3.brand+" "+phone3.modelName;
    }
    if(phone2.ram===phone3.ram){
      resultingString="the "+phone2.brand+" "+phone2.modelName+" and the "+phone3.brand+" "+phone3.modelName;
    }
    return resultingString;
  }

  const compareMemoryText = (phone1, phone2, phone3) =>{
    let after ="RAM (short for Random Access Memory), is a super-fast type of memory that stores the apps you've opened since you turned on your phone. Generally, The more RAM your phone has, the more apps it can store for quick access, which results in an overall feeling of your phone working faster.";
    let finalText ="";
    let memoryCase1 = memoryCase(phone1, phone2, phone3);
    switch(memoryCase1){
      case 1:
        let winnerPhone = oneMoreRAM(phone1, phone2, phone3);
        finalText= "The "+winnerPhone.brand +" "+winnerPhone.modelName+" has the best RAM capacity. "
        break;
      case 2:
        let twoWinnerPhoneNames = twoMoreRAM(phone1, phone2, phone3);
        finalText = "In this case, both phones, "+twoWinnerPhoneNames+", have the same RAM installed."
        break;
      case 3:
        finalText="In this case, all three recommended phones phones have the same RAM capacity. "
        break;
      default:
        //codeblock
        break;
    }
    let result = finalText+after;
    return result;
  }



  const cameraCase = (phone1, phone2, phone3) =>{
    let result = 2;
    if (phone1.camera_MP === phone2.camera_MP && phone1.camera_MP===phone3.camera_MP){
      result = 3;
    }
    if (phone1.camera_MP>phone2.camera_MP && phone1.camera_MP>phone3.camera_MP || phone2.camera_MP>phone1.camera_MP && phone2.camera_MP>phone3.camera_MP || phone3.camera_MP>phone2.camera_MP && phone3.camera_MP>phone2.camera_MP){
      result =1;
    }
    return result;
  }

  const oneMoreCamera = (phone1, phone2, phone3)=>{
    if(phone1.camera_MP>phone2.camera_MP && phone1.camera_MP>phone3.camera_MP){
      return phone1;
    }
    if(phone2.camera_MP>phone1.camera_MP && phone2.camera_MP>phone3.camera_MP){
      return phone2;
    }
    if(phone3.camera_MP>phone1.camera_MP && phone3.camera_MP>phone2.camera_MP){
      return phone3;
    }
  }

  const twoMoreCamera = (phone1, phone2, phone3)=>{
    let resultingString = "";
    if(phone1.camera_MP===phone2.camera_MP){
      resultingString="the "+phone1.brand+" "+phone1.modelName+" and the "+phone2.brand+" "+phone2.modelName;
    }
    if(phone1.camera_MP===phone3.camera_MP){
      resultingString="the "+phone1.brand+" "+phone1.modelName+" and the "+phone3.brand+" "+phone3.modelName;
    }
    if(phone2.camera_MP===phone3.camera_MP){
      resultingString="the "+phone2.brand+" "+phone2.modelName+" and the "+phone3.brand+" "+phone3.modelName;
    }
    return resultingString;
  }

  const compareCameraText = (phone1, phone2, phone3) =>{
    let after ="Megapixel resolution plays an important role in how large you can print your pictures. Because the more megapixels you have, the more detail is recorded, high-resolution cameras allow you to make larger prints or crop shots without worrying about the image’s pixel structure becoming visible.";
    let finalText ="";
    let cameraCase1 = cameraCase(phone1, phone2, phone3);
    switch(cameraCase1){
      case 1:
        let winnerPhone = oneMoreCamera(phone1, phone2, phone3);
        finalText= "The "+winnerPhone.brand +" "+winnerPhone.modelName+" has the best camera  (megapixel resolution). "
        break;
      case 2:
        let twoWinnerPhoneNames = twoMoreCamera(phone1, phone2, phone3);
        finalText = "In this case, both phones, "+twoWinnerPhoneNames+", have the same camera megapixel resoultion."
        break;
      case 3:
        finalText="In this case, all three recommended phones phones have the same megapixel resolution. "
        break;
      default:
        //codeblock
        break;
    }
    let result = finalText+after;
    return result;
  }

  const comparePrice = (phone1, phone2, phone3)=>{ //This case is easy because the likelihood of cpuScores being the same is tiny
    if (phone1.price <= phone2.price && phone1.price <= phone3.price){
      return phone1;
    }
    if (phone2.price <= phone3.price && phone2.price <= phone1.price){
      return phone2;
    }
    if (phone3.price <= phone1.price && phone3.price <= phone2.price){
      return phone2;
    }
  }

  const comparePriceText = (phone1, phone2, phone3) =>{
    let best = comparePrice(phone1, phone2, phone3);
    let result = "The " + best.brand + " " +best.modelName+ " is cheaper while still being one of the better options given your choices!";
    return result;
  }


  const cpuText = compareCPUtext(props.recommendation.phone1, props.recommendation.phone2, props.recommendation.phone3);
  const ramText = compareMemoryText(props.recommendation.phone1, props.recommendation.phone2, props.recommendation.phone3);
  const cameraText = compareCameraText(props.recommendation.phone1, props.recommendation.phone2, props.recommendation.phone3);
  const priceText = comparePriceText(props.recommendation.phone1, props.recommendation.phone2, props.recommendation.phone3);






  /* --------------------RETURN HTML---------------------- */

  return (
    <div>
      <Card className="cardComponentCompare">
        <Grid container>
          <Grid item xs={4} className="compareCardImage">
            <img src="Phone_Ilias_Icon_V2.svg" className={classes.media} />
          </Grid>
          <Grid item xs={8} className="priceTag">
            <div className="header1Card">Recommendation from {props.recommendation.createdOn}</div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6}>
            <div className="focusText">Focus: {props.recommendation.focus}</div>
            <div className="header3Card">Recommended phones:</div>
            <div className="recPhones">{props.recommendation.phone1.brand} {props.recommendation.phone1.modelName} ({props.recommendation.phone1.price}€)</div>
            <div className="recPhones">{props.recommendation.phone2.brand} {props.recommendation.phone2.modelName} ({props.recommendation.phone2.price}€)</div>
            <div className="recPhones">{props.recommendation.phone3.brand} {props.recommendation.phone3.modelName} ({props.recommendation.phone3.price}€)</div>
          </Grid>
          <Grid item xs={6} align="center">
            <Button
              className="selectButton"
              size="medium"
              variant="contained"
              color="primary"
              onClick={handleClickOpenCompare}
            >
              Compare
            </Button>
            <Button
              className="deleteButton"
              size="medium"
              variant="contained"
              color="primary"
              onClick={handleClickOpenDelete}
            >
              Delete
            </Button>
          </Grid>
        </Grid>
      </Card>


      <Dialog
        open={openCompare}
        onClose={handleCloseCompare}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Summary of your recommendations"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <p>
              The questionnaire made on {props.recommendation.createdOn} was more focused on {props.recommendation.focus}, 
              compared to the other recommendations.
            </p>
            <ul>
              <li>
                {cpuText}
              </li>
              <li>
                {ramText}
              </li>
              <li>
                {cameraText}
              </li>
              <li>
                {priceText}
              </li>
            </ul>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Grid container justify="center">
            <Button
              onClick={handleCloseCompare}
              color="primary"
              className="selectButton"
              align="center"
            >
              Close summary
            </Button>
          </Grid>
        </DialogActions>
      </Dialog>



      <Dialog
        open={openDelete}
        onClose={handleCloseDelete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Summary of your recommendations"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <p>
              Are you sure you want to delete this questionnaire instance?
            </p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Grid container justify="center">
            <Grid item xs={6}>
            <Button
              color="primary"
              className="selectButton"
              align="center"
            >
              Yes
            </Button>
            </Grid>

            <Grid item xs={6}>
            <Button
              onClick={handleCloseDelete}
              color="primary"
              className="selectButton"
              align="center"
            >
              No
            </Button>
            </Grid>

          </Grid>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CompareViewCard;
