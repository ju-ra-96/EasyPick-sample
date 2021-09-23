import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './ProductCard.css';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import RatingComponent from '../Rating/rating';
import CommentsComponent from '../Comment/comments';
import {Dialog} from '@reach/dialog';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(20),
    flexBasis: '66.66%',
    //color: theme.palette.text.secondary,
  },
}));

export default function ProductCard(props) {
  const classes = useStyles();
  const url = props.product.image;

  const [expanded, setExpanded] = React.useState(false);
  const [showDialog, setShowDialog] = React.useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <div className="border mb-4 rounded overflow-hidden">
        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
          className="accordionGeneral"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            className="accordionSummary"
          >
            <Typography className={classes.heading}>
              {props.product.brand.toUpperCase()}&emsp;
              <span className="modelNameHeader">{props.product.modelName}</span>
            </Typography>

            <Typography className={`priceTag ${classes.secondaryHeading}`}>
              {props.product.price}€
            </Typography>

            <Box
              className="ratingStars"
              component="fieldset"
              mb={3}
              borderColor="transparent"
            >
              <RatingComponent
                deviceModel={props.product.modelName}
                className="titleCompactCard"
              />
            </Box>
          </AccordionSummary>
          <AccordionDetails className="accordionDetails">
            <div
              style={
                {
                  /* 'background-image': `url('${props.product.images[0]})` */
                }
              }
              className="w-full h-64 bg-blue bg-cover"
            ></div>

            <div className="p-3">
              <h3 className="font-bold text-xl mb-3">
                {props.product.modelName}
              </h3>
              <Grid container justify="center" alignItems="center">
                <Grid item xs={4} align="center">
                  <img src={url} alt="The phone" className="phoneImage" />
                </Grid>
                <Grid item xs={4} className="card_text">
                  <div className="font-bold mb-3">
                    Price: {props.product.price} €
                  </div>
                  <div className="mb-3">
                    Brand:{props.product.brand.toUpperCase()}
                  </div>
                  <div className="mb-3">
                    Operating System: {props.product.operatingSystem}
                  </div>
                  <div className="mb-3">RAM: {props.product.ram} GB</div>
                  <div className="mb-3">
                    Face Recognition Included:{' '}
                    {props.product.faceRecognition.toUpperCase()}
                  </div>
                  <div className="mb-3">
                    Processor: {props.product.processor}
                  </div>
                  <div className="mb-3">
                    Fingerprint sensor included:{' '}
                    {props.product.fingerprint.toUpperCase()}
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div className="mb-3">
                    Megapixels in camera: {props.product.camera_MP} MP
                  </div>
                  <div className="mb-3">
                    Dual SIM option: {props.product.dualSIM.toUpperCase()}
                  </div>
                  <div className="mb-3">
                    Bluetooth Version: {props.product.bluetoothVersion}
                  </div>
                  <div className="mb-3">
                    Battery Hours (calling): {props.product.batteryHours}
                  </div>
                  <div className="mb-3">
                    Product weight: {props.product.weight} grams
                  </div>
                  <div className="mb-3">
                    Used product: {props.product.isUsed.toUpperCase()}
                  </div>
                </Grid>
              </Grid>

              <Grid container justify="right" alignItems="right">
                <Grid item xs={10} align="right">
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
                <Grid item xs={2} align="right">
                  <Button
                    onClick={open}
                    className="buyButton"
                    size="medium"
                    variant="contained"
                    color="primary"
                  >
                    View comments
                  </Button>
                  <Dialog
                    aria-labelledby={props.product.modelName}
                    isOpen={showDialog}
                    onDismiss={close}
                  >
                    <CommentsComponent deviceModel={props.product.modelName} />
                  </Dialog>
                </Grid>
              </Grid>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
