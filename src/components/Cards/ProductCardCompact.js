import {makeStyles} from '@material-ui/core/styles';
import React from 'react';
import {Dialog} from '@reach/dialog';
import RatingComponent from '../Rating/rating';
import CommentsComponent from '../Comment/comments';
import '@reach/dialog/styles.css';
import {Card, CardMedia, Button, Grid, Box, Link} from '@material-ui/core';
import './ProductCard.css';

const useStyles = makeStyles({
  root: {
    width: 600,
    height: 200,
    margin: 20,
  },
  media: {
    height: 200,
    width: 200,
    //margin: 10,
  },
});

const ProductCardCompact = (props) => {
  const classes = useStyles();
  const url = props.product.image;
  const [showDialog, setShowDialog] = React.useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  return (
    <Card className="cardComponent">
      <Grid container>
        <Grid item xs={4}>
          <CardMedia className={classes.media} image={url} title="" />
        </Grid>
        <Grid item xs={8} className="pad1">
          <Grid container>
            <Grid item xs={8}>
              <p className="titleCompactCard">{props.product.modelName}</p>
            </Grid>
            <Grid item xs={4}>
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
            </Grid>

            <Grid item xs={6}>
              <p className="descriptionCompactCard">
                Brand: {props.product.brand}
              </p>
              <p className="descriptionCompactCard">
                OS: {props.product.operatingSystem}
              </p>
              <p className="descriptionCompactCard">
                RAM: {props.product.ram} GB
              </p>
            </Grid>

            <Grid item xs={6}>
              <p className="descriptionCompactCard">
                Camera MP: {props.product.camera_MP} MP
              </p>
              <p className="descriptionCompactCard">
                Battery hours: {props.product.batteryHours} hours
              </p>
              <p className="descriptionCompactCard">
                Product Weight: {props.product.weight} g
              </p>
            </Grid>

            <Grid item xs={4}>
              <p className="priceTagCompact">{props.product.price}€</p>
            </Grid>
            <Grid item xs={8} className="bothButtons ">
              <Grid container justify="right">
                <Grid item xs={12} align="right">
                  <Grid container>
                    <Grid item xs={6} align="right">
                      <Link href={props.product.link} target="_blank">
                        <Button
                          size="medium"
                          color="primary"
                          className="buyButtonCard"
                        >
                          BUY
                        </Button>
                      </Link>
                    </Grid>
                    <Grid item xs={6} align="center">
                      <Button
                        onClick={open}
                        size="medium"
                        color="primary"
                        className="commentButtonCard"
                      >
                        View Comments
                      </Button>
                      <Dialog
                        aria-labelledby={props.product.modelName}
                        isOpen={showDialog}
                        onDismiss={close}
                      >
                        <CommentsComponent
                          deviceModel={props.product.modelName}
                        />
                      </Dialog>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ProductCardCompact;
