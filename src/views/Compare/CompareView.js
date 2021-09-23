import React from "react";
import Header from "../../components/Navbar/Navbar.js";
import Footer from "../../components/Footer/footer";
import "@reach/dialog/styles.css";
import {
  Button,
  Grid,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@material-ui/core";
import "../../components/Cards/ProductCard.css";
import "../../components/Overview/PhoneOverview.css";
import "./CompareViewCard";
import CompareViewCard from "./CompareViewCard";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
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

function CompareView() {
  const classes = useStyles();
  const [expanded3, setExpanded3] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);
  const handleChange3 = (panel) => (event, isExpanded) => {
    setExpanded3(isExpanded ? panel : false);
  };
  const handleChange2 = (panel) => (event, isExpanded) => {
    setExpanded2(isExpanded ? panel : false);
  };

  //MOCK DATA for UseCase 4

  const myRecommendations = [
    {
      id: 12345,
      user: "ilias.soto@tum.de",
      focus: "Memory", //?
      createdOn: "24/07/2021",
      phone1: {
        modelName: "iPhone XR",
        price: 549.99,
        brand: "Apple",
        operatingSystem: "iOS",
        ram: 3,
        faceRecognition: "yes",
        processor: "A12 Bionic",
        fingerprint: "no",
        camera_MP: 12,
        dualSIM: "yes",
        bluetoothVersion: 5,
        batteryHours: 25,
        weight: 194,
        isUsed: "no",
        link: "https://www.mediamarkt.de/de/product/_apple-iphone-xr-64-gb-schwarz-du...",
        cpuScore: 4324,
        image: "https://i.ibb.co/5B6CzVQ/i-Phone-XR.png",
      },
      phone2: {
        modelName: "Pixel 4a",
        price: 349,
        brand: "Google",
        cpuScore: 3159,
        ram: 6,
        camera_MP: 12,
      },

      phone3: {
        modelName: "K22",
        price: 89,
        brand: "LG",
        cpuScore: 382,
        ram: 2,
        camera_MP: 13,
      },
    },
    {
      id: 123454535,
      user: "ilias.soto@tum.de",
      focus: "Battery", //?
      createdOn: "05/07/2021",
      phone1: {
        modelName: "iPhone 12 5G",
        price: 829.99,
        brand: "Apple",
        cpuScore: 7916,
        ram: 6,
        camera_MP: 12,
      },
      phone2: {
        modelName: "Pixel 4a",
        price: 349,
        brand: "Google",
        cpuScore: 3159,
        ram: 6,
        camera_MP: 12,
      },

      phone3: {
        modelName: "iPhone 12 mini",
        price: 669.99,
        brand: "Apple",
        cpuScore: 7120,
        ram: 2,
        camera_MP: 12,
      },
    },
    {
      id: 23423,
      user: "ilias.soto@tum.de",
      focus: "Games", //?
      createdOn: "18/07/2021",
      phone1: {
        modelName: "iPhone 12 5G",
        price: 829.99,
        brand: "Apple",
        cpuScore: 7916,
        ram: 6,
        camera_MP: 12,
      },
      phone2: {
        modelName: "Pixel 5",
        price: 349,
        brand: "Google",
        cpuScore: 3224,
        ram: 8,
        camera_MP: 16,
      },

      phone3: {
        modelName: "P smart Pro",
        price: 269,
        brand: "Huawei",
        cpuScore: 2919,
        ram: 6,
        camera_MP: 48,
      },
    },
    {
      id: 23423,
      user: "ilias.soto@tum.de",
      focus: "Battery", //?
      createdOn: "18/07/2021",
      phone1: {
        modelName: "Y6s",
        price: 109,
        brand: "Huawei",
        cpuScore: 288,
        ram: 3,
        camera_MP: 13,
      },
      phone2: {
        modelName: "Pixel 5",
        price: 349,
        brand: "Google",
        cpuScore: 3224,
        ram: 8,
        camera_MP: 16,
      },

      phone3: {
        modelName: "K41S",
        price: 79,
        brand: "LG",
        cpuScore: 839,
        ram: 3,
        camera_MP: 13,
      },
    },
  ];

  /* ---------CONTENT / DISPLAYED RECOMMENDATIONS--------- */

  var content = (
    <div>
      <div>
        You have not completed any questionnaires, which is why you can't
        perform comparisons yet. Click on the button below to start a
        questionnaire
      </div>
      <div>
        <Grid container justify="center" alignItems="center">
          <Button
            component={Link}
            to="/question"
            variant="contained"
            color="primary"
            size="medium"
            className="emptyRecButton"
          >
            Start Questionnaire
          </Button>
        </Grid>
      </div>
    </div>
  );

  if (myRecommendations) {
    content = myRecommendations.map((rec) => (
      <div key={rec.id}>
        <CompareViewCard recommendation={rec} />
      </div>
    ));
  }

  /* ---------------HERE WE CAN ADD EXPLANATIONS AS ACCORDIONS AGAIN------------------ */

  var wiki1 = (
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
                  <img
                    alt="explaination"
                    src="https://i.ibb.co/nQW25HN/process2.png"
                  />
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

  var wiki2 = (
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
                What are the most important components of a phone?
              </span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="accordionDetails">
            <div className="w-full h-64 bg-blue bg-cover">
              <p>
                Today's smartphones come with lots of technological components
                that blow our minds every day. The most important ones are:
                <ul>
                  <li>
                    THE CPU: The processor (or CPU) is what delivers the
                    high-intesity media and graphics to which smartphone users
                    have become accustomed. The last two to three years have
                    brought fourfold increases in performance, and expect to see
                    additional gains of up to 50% as phones move to dual core
                    technology.
                  </li>
                  <li>
                    The RAM: RAM (Random Access Memory) is very important as it
                    holds the data on your phone. The more RAM your smartphone
                    has, the more applications you can access quickly. Also, you
                    can switch between multiple apps without facing any lag.
                  </li>
                  <li>
                    Camera: Smartphone photography is more popular than Internet
                    browsing, emailing, app downloading, and gaming. According
                    to a Comtech study done in 2014, the quality of a
                    smartphone's camera is the third most important
                    consideration for phone buyers, trailing only 4G/LTE
                    capability and reliability/durability.
                  </li>
                  <li>
                    When your phone's battery is low on power you can't use the
                    internet, you can't make a call or do basic things with your
                    phone, then what is the usefulness of super great smartphone
                    with terrible battery life?
                  </li>
                </ul>
              </p>

              <Grid container justify="center" alignItems="center">
                <Grid item xs={12} align="center">
                  <img
                    alt="explaination"
                    src="https://bilder.pcwelt.de/4245097_620x310_r.webp"
                  />
                </Grid>
              </Grid>

              <hr></hr>

              <p>
                You can look for the specific phones' attributes in our Phone Overview page
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
                    Phone overview
                  </Button>
                </Grid>
              </Grid>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );

  /* ---------RETURN FUNCTION---------- */

  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <h1 className="font-bold text-2xl mb-3 pageTitle">
          Compare your phones
        </h1>

        <hr />
        <br></br>

        <Grid container>{content}</Grid>
        <Grid container>{wiki1}{wiki2}</Grid>
      </div>
      <Footer />
    </div>
  );
}

export default CompareView;
