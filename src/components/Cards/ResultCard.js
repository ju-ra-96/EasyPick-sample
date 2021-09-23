import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import './ProductCard.css';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import '../Questionnaire/Quiz.css'
import './ResultCard.css'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    minWidth: 275,
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(20),
    flexBasis: '66.66%',
    //color: theme.palette.text.secondary,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

export default function ResultCard(props) {
  const classes = useStyles();
  const url = props.product.image;


  return (
    <div className={classes.root}>
      <div className="border mb-4 rounded overflow-hidden margin-adjust">
          <Card className={classes.root}>
            <CardContent>

            <div className="p-3">
              <h3 className="font-bold text-xl mb-3 center-align">
                {props.product.modelName}
              </h3>
              <Grid container justify="center" alignItems="center">
                <Grid item xs={12} align="center">
                  <img src={url} alt="The phone" className="phoneImage" />
                </Grid>
                <Grid item xs={6} className="card_text">
                  <div className="font-bold mb-3">
                    <strong>Price:</strong> {props.product.price} €
                  </div>
                  <div className="mb-3">
                    <strong>Brand:</strong>{props.product.brand.toUpperCase()}
                  </div>
                  <div className="mb-3">
                    <strong>Operating System:</strong> {props.product.operatingSystem}
                  </div>
                  <div className="mb-3"><strong>RAM:</strong> {props.product.ram} GB</div>
                </Grid>
                <Grid item xs={6}>
                  <div className="mb-3">
                    <strong>Megapixels in camera:</strong> {props.product.camera_MP} MP
                  </div>
                  <div className="mb-3">
                    <strong>Dual SIM option:</strong> {props.product.dualSIM.toUpperCase()}
                  </div>
                  <div className="mb-3">
                    <strong>Bluetooth Version:</strong> {props.product.bluetoothVersion}
                  </div>
                  <div className="mb-3">
                    <strong>Battery Hours (calling):</strong> {props.product.batteryHours}
                  </div>
                </Grid>
              </Grid>
            <CardActions>
              <Grid container justify="center" alignItems="center">
                <Grid item xs={12} align="center">
                  <Link href={props.product.link} target="_blank">
                    <Button
                      className="buyButton"
                      size="medium"
                      variant="contained"
                      color="primary"
                    >
                      Buy phone
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </CardActions>
            </div>
          </CardContent>
           </Card>
      </div>
    </div>
  );
}

