import React  from "react";
import Header from "../../components/Navbar/Navbar.js";
/* import { makeStyles } from '@material-ui/core/styles'; */
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid
} from "@material-ui/core";
/* import Navbar from '../Navbar/Navbar'; */
import Footer from "../../components/Footer/footer";
import Button from "@material-ui/core/Button";
import "../../components/Overview/PhoneOverview.css";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(20),
    flexBasis: "66.66%",
    //color: theme.palette.text.secondary,
  },
}));

//use these styles to create the (other type of) cards

//const url = "https://lh3.googleusercontent.com/pHjFa00pafgrEWD1MxKhHkvjuwdneh4pcE2RNanawru6tNwSVX4oIAEaW020cseFFH4wekpx9i7PyjibuIuspeKMOxCECkOty7V_pCMjFP9hYQbfoLdke08crXRkVZiSz2sg02tRnYxvqGbmIbVsSwpRq4wVVR-39CeTxloxWozib-E9DKUKMxZMCGh56R5Pyn1D2_4_dZ4zxViz2k3pQZ0jcWvRmZanRZ__LIInTzYIQfXiFSIS_83ggV9DthfETyd4FEcAYRVY45PvhGJ0KdgahWTLyvZFO06y5U3hbEt-W5YvpHh8tPYeUS0bJlozN5rWaFX9rGlLneH79Y49Nr4o3kMqylgsDJI8s9ClNpwLa5vwou64Mj9d_Cb0LHEJ4ufzQJPN_sNY3wmtKC_l8gtjpCNTLwZuBv3xlMDavV93ZyeAXsCsGq1v3sd90Fc5ul6pNWcekHl5Zs4vpA089FWp7zuSTWC327V4l7sWJk6L_fM_t-glKjMoewMc_V_gTaCP1t8liYAHB-gUGKa1N9khA8NLXrBvtpvyQrO53eWruafklQdC_TbD0AxMGXcz5kYj56eMUnK98rjD5Gc89Y8jZGO-pzL5Er0WWSvlCzafeNEsyubHmUjEQfDcUB6HrXwacp0jfOkJrNrePqMQT8UQUFLg2_1lGlranOySNTHsNatVzpMTsxL8wCIfB1C_j4TRhR2RKqILO9nWBf4JJYcA=w514-h457-no?authuser=0";

function AboutView() {
  const classes = useStyles();
  //const url = props.product.image;
  //const url = "https://lh3.googleusercontent.com/46xrdt8GJwJAUz-Zq15DO2a5MQVPKfNi8gXYKdPWvWHE4yZgQvh0kxbfVc-RUmwgJ6LSPPVONWgqPDE8t-A-Htm_mLsvE8uQq2gxAElriRS66U6VPCWvnNouoei5DmP44bemB2B_TfN3QxSrC8wAdyhvMUPQtxirZ4andYOuocF0eyQMG03A_HA6ZYZsv-YhLSzgj_sezawZc0ZMvEknsPbF6z2n2y5megNAZPhTJStnINM7IqMOtKfubuxzDaeWUpdhHIMglrzV5vddHib0IQ8D6OUHb3tMrmh_SqOVBb9589ELl2ujhXvCeaTPATTPCb0SwGM-QW2HtUlhnXAA_R7tjYkn_Z8_uwJfKrPol285bBOEaLGQZzCsNsNEkcUzf8_ySQBH2h6t72RJjXpzcM6JwIdLuCWvxKN2zus5T5zBMmw0Im61Wf4D2OlODMhOmPA47QSdoKVXebSZl0KJwng84WWtRuxjgN772-vzFeNauGTJ3j7fdKTj8GhKM1hyrEVHpJsjsuia9X_fusc2izdKzHUfuGfcFuyvbvRPobGjlw-6gw8IfRystPgeOHGrxzXXiUR0QcLRf9RV3DGtFPdrG4v-D4UL1VB7ddCrzPyQH458S1gViN_zLNx1WMWo2xuQXkT34-0bfljaH1IxKsOvPUxr5ski2rH0MlMbn_r12InXW0zSw1dubWYBXRs5ChP2OniRyz37RQaTacTjfKf2=w576-h500-no?authuser=0";

  const [expanded1, setExpanded1] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);
  const [expanded3, setExpanded3] = React.useState(false);
  const [expanded4, setExpanded4] = React.useState(false);
  const [expanded5, setExpanded5] = React.useState(false);

  const handleChange1 = (panel) => (event, isExpanded) => {
    setExpanded1(isExpanded ? panel : false);
  };

  const handleChange2 = (panel) => (event, isExpanded) => {
    setExpanded2(isExpanded ? panel : false);
  };

  const handleChange3 = (panel) => (event, isExpanded) => {
    setExpanded3(isExpanded ? panel : false);
  };

  const handleChange4 = (panel) => (event, isExpanded) => {
    setExpanded4(isExpanded ? panel : false);
  };

  const handleChange5 = (panel) => (event, isExpanded) => {
    setExpanded5(isExpanded ? panel : false);
  };


  const aboutQuestion1 = (
    <div className={classes.root}>
      <div className="border mb-4 rounded overflow-hidden">
        <Accordion
          expanded={expanded1 === "panel1"}
          onChange={handleChange1("panel1")}
          className="accordionGeneral"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            className="accordionSummary"
          >
            <Typography className={classes.heading}>
              <span className="modelNameHeader"> What is EasyPick?</span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="accordionDetails">
            <div className="w-full h-64 bg-blue bg-cover">
              <p>
                EasyPick is a recommender and comparison system that enables you
                to find a phone tailored to your needs! If you want to find a
                phone that is best suited for you, just follow these steps:
              </p>

              <ul>
                <li>Create an account or log in with your account</li>
                <li>Click on the button below to start the questionnaire</li>
                <li>Answer the questions</li>
                <li>Voilá! You get the phones recommended!</li>
              </ul>

              <p>
                You can also complete the questionnaire without logging in, but
                you'll definitely get better results if you have a user account.
              </p>
            </div>

            {/* <img src={url} className="phoneImage"/> */}

            <div className="p-3">
              <Grid container justify="center" alignItems="center">
                <Grid item xs={12} align="center">
                  {/*                   <Link href="/question" target="_blank">
                    <Button
                      className="buyButton"
                      size="medium"
                      variant="contained"
                      color="primary"
                    >
                      Start questionnaire!
                    </Button>
                  </Link> */}
                  <Button
                    component={Link}
                    to="/question"
                    variant="contained"
                    color="primary"
                    size="medium"
                    className="buyButton"
                  >
                    Start Questionnaire
                  </Button>
                </Grid>
              </Grid>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );

  const aboutQuestion2 = (
    <div className={classes.root}>
      <div className="border mb-4 rounded overflow-hidden">
        <Accordion
          expanded={expanded2 === "panel1"}
          onChange={handleChange2("panel1")}
          className="accordionGeneral"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            className="accordionSummary"
          >
            <Typography className={classes.heading}>
              <span className="modelNameHeader">
                {" "}
                Why should I use EasyPick?
              </span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="accordionDetails">
            <div className="w-full h-64 bg-blue bg-cover">
              <p>
                In the digital era, we are flooded with information and
                inventions. There are so many new technologies that is is hard
                to pick the right one without having some technical knowledge.
                Our goal at EasyPick is to help people who don’t know exactly
                which phone they want, but who know what they will use it for,
                and give them a recommendation founded on an algorithm that
                takes their preferences into account. Differently than other
                recommendations:
              </p>

              <ul>
                <li>We won’t try to recommend you the most expensive phone</li>
                <li>
                  You will get a phone that is tailored to your everyday needs
                </li>
                <li>We won’t charge you for this!</li>
              </ul>

              <p>
                If you are convinced and want to take the questionnaire, create
                account and click on the button below to start the
                questionnaire. You can also complete the questionnaire without
                logging in, but you'll definitely get better results if you have
                a user account.
              </p>
            </div>

            <div className="p-3">
              <Grid container justify="center" alignItems="center">
                <Grid item xs={6} align="center">
                  <Button
                    component={Link}
                    to="/question"
                    variant="contained"
                    color="primary"
                    size="medium"
                    className="buyButton"
                  >
                    Start Questionnaire
                  </Button>
                </Grid>
                <Grid item xs={6} align="center">
                  <Button
                    component={Link}
                    to="/overview"
                    variant="contained"
                    color="primary"
                    size="medium"
                    className="buyButton"
                  >
                    Phone Overview
                  </Button>
                </Grid>
              </Grid>
            </div>
            <div className="w-full h-64 bg-blue bg-cover">
              <p>
                {" "}
                If you just want to take a look at the phones that we offer, you
                can see them in our Phone Overview.
              </p>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );

  const aboutQuestion3 = (
    <div className={classes.root}>
      <div className="border mb-4 rounded overflow-hidden">
        <Accordion
          expanded={expanded3 === "panel1"}
          onChange={handleChange3("panel1")}
          className="accordionGeneral"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            className="accordionSummary"
          >
            <Typography className={classes.heading}>
              <span className="modelNameHeader">
                {" "}
                How does the algorithm work?
              </span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="accordionDetails">
            <div className="w-full h-64 bg-blue bg-cover">
              <p>
                The idea of the algorithm is very simple: we map your
                preferences to technical terms. For example, if you respond
                saying that you need a very good camera, we know that we should
                not recommend a phone that has less than 10MP resolution. This
                principle can be applied to many attributes of our phones, such
                as the memory, the CPU or the brand. For the CPU attribute, we
                use external ratings to know which CPUs perform how on which
                phones. Finally, based on these principles, we see which phones
                are best suited for your preferences and budget and return the
                three best ones as a result.
              </p>

              <Grid container justify="center" alignItems="center">
                <Grid item xs={12} align="center">
                  <img alt="explaination" src="https://i.ibb.co/nQW25HN/process2.png" />
                </Grid>
              </Grid>

              <hr></hr>

              <p>
                If you have an idea on how to improve the algorithm, please do
                not hesitate on providing feedback.
              </p>
            </div>

            <div className="p-3">
              <Grid container justify="center" alignItems="center">
                <Grid item xs={6} align="center">
                  <Button
                    component={Link}
                    to="/question"
                    variant="contained"
                    color="primary"
                    size="medium"
                    className="buyButton"
                  >
                    Start Questionnaire
                  </Button>
                </Grid>
                <Grid item xs={6} align="center">
                  <Button
                    component={Link}
                    to="/feedback"
                    variant="contained"
                    color="primary"
                    size="medium"
                    className="buyButton"
                  >
                    Feedback
                  </Button>
                </Grid>
              </Grid>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );

  const aboutQuestion4 = (
    <div className={classes.root}>
      <div className="border mb-4 rounded overflow-hidden">
        <Accordion
          expanded={expanded4 === "panel1"}
          onChange={handleChange4("panel1")}
          className="accordionGeneral"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            className="accordionSummary"
          >
            <Typography className={classes.heading}>
              <span className="modelNameHeader"> How can I give Feedback?</span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="accordionDetails">
            <div className="w-full h-64 bg-blue bg-cover">
              <p>
                If you have an idea on how to improve the algorithm, please do
                not hesitate on providing feedback. Also, if you have any
                complaint about each of the phones or if you want to rate them,
                you can do so by selecting the phones you want to rate in our
                Phone Overview page.
              </p>
            </div>

            <div className="p-3">
              <Grid container justify="center" alignItems="center">
                <Grid item xs={6} align="center">
                  <Button
                    component={Link}
                    to="/overview"
                    variant="contained"
                    color="primary"
                    size="medium"
                    className="buyButton"
                  >
                    Phone Overview
                  </Button>
                </Grid>
                <Grid item xs={6} align="center">
                  <Button
                    component={Link}
                    to="/feedback"
                    variant="contained"
                    color="primary"
                    size="medium"
                    className="buyButton"
                  >
                    Feedback
                  </Button>
                </Grid>
              </Grid>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );

  const aboutQuestion5 = (
    <div className={classes.root}>
      <div className="border mb-4 rounded overflow-hidden">
        <Accordion
          expanded={expanded5 === "panel1"}
          onChange={handleChange5("panel1")}
          className="accordionGeneral"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            className="accordionSummary"
          >
            <Typography className={classes.heading}>
              <span className="modelNameHeader">
                {" "}
                Who are our main partners?
              </span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="accordionDetails">
            <div className="w-full h-64 bg-blue bg-cover">
              <p>
                Right now, we are only offering phones from MediaMarkt-Saturn
                GmbH. We are hoping to get more partners in the future to
                improve the customer experience. If you wish to become a
                partner, please write us on easyPick@gmail.com.
              </p>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );

  /* ---------CONTENT / DISPLAYED PHONES--------- */


  /* ---------RETURN FUNCTION---------- */

  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <h1 className="font-bold text-2xl mb-3 pageTitle">About us</h1>

        <hr />
        <br></br>
        <div id="aboutQuestion1" className="md:flex flex-wrap md:-mx-3">
          {aboutQuestion1}
        </div>
        <div className="md:flex flex-wrap md:-mx-3">{aboutQuestion2}</div>
        <div className="md:flex flex-wrap md:-mx-3">{aboutQuestion3}</div>
        <div className="md:flex flex-wrap md:-mx-3">{aboutQuestion4}</div>
        <div className="md:flex flex-wrap md:-mx-3">{aboutQuestion5}</div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutView;

//Bis hier Änderungen
