import React, {useEffect, useState} from 'react';
import Header from '../Navbar/Navbar';
/* import { makeStyles } from '@material-ui/core/styles'; */
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  Select,
  FormControl,
  InputLabel,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Radio,
  RadioGroup,
  Slider,
  Grid,
  Switch,
} from '@material-ui/core';
/* import Navbar from '../Navbar/Navbar'; */
import EuroIcon from '@material-ui/icons/Euro';
import Footer from '../Footer/footer';
import axios from 'axios';
import Loader from '../Loader/Loader';
import ProductCard from '../Cards/ProductCard';
import ProductCardCompact from '../Cards/ProductCardCompact';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './PhoneOverview.css';

function PhoneOverview() {
  /* ------UPLOADING THE DATA -------- */
  const url = `http://localhost:5000/api/device/products/`;
  const [products, setProducts] = React.useState({
    loading: false,
    data: null,
    error: false,
  });
  const [filteredData, setFilteredData] = useState(products.data);

  useEffect(() => {
    setFilteredData(products.data);
  }, [products.data]);

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
        console.error();
        setProducts({
          loading: false,
          data: null,
          error: true,
        });
      });
  }, [url]);

  /* --------FILTER VARIABLES-------- */

  var availableBrands = [
    'Apple',
    'Samsung',
    'Huawei',
    'Xiaomi',
    'Google',
    'LG',
    'Sony',
  ];
  var availableOS = ['Android', 'iOS', 'EMUI'];
  var availableBluetoothVersions = [5, 5.1];

  const [searchTermModelName, setSearchTermModelName] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [displayMode, setDisplayMode] = useState('card');
  const [priceMax, setPriceMax] = useState(1500);
  const [brandFilters, setBrandFilters] = useState(availableBrands);
  const [OSFilters, setOSFilters] = useState(availableOS);
  const [faceRecognitionValue, setFaceRecognitionValue] = useState('no');
  const [dualSIMValue, setDualSIMValue] = useState('no');
  const [fingerprintValue, setFingerprintValue] = useState('no');
  const [bluetoothVersionFilter, setBluetoothVersionFilter] = useState(
    availableBluetoothVersions
  );
  const [maxWeight, setMaxWeight] = useState('250');
  const [minRAM, setMinRAM] = useState('0');
  const [minCameraMegapixels, setMinCameraMegapixels] = useState('0');

  /* --------FILTER FUNCTIONS TOP BAR--------- */

  const filterFunctionModelName = (mySearchTerm) => {
    let phonesIncluded = [];
    let count = 0;
    products.data.forEach((phone) => {
      if (
        phone.modelName.toLowerCase().includes(mySearchTerm.toLowerCase()) ||
        phone.brand.toLowerCase().includes(mySearchTerm.toLowerCase())
      ) {
        count = phonesIncluded.push(phone);
      }
    });
    setFilteredData(phonesIncluded);
  };

  useEffect(() => {
    console.log(products.data);

    if (filteredData) {
      filterFunctionModelName(searchTermModelName);
    }
  }, [searchTermModelName]);

  //Here we sort the array everytime before we map the data to the cards/accordions
  const sortByFunction = (filteredDataArray) => {
    if (sortBy === 'PriceAsc') {
      filteredDataArray.sort(function (a, b) {
        return a.price - b.price;
      });
    }

    if (sortBy === 'PriceDsc') {
      filteredDataArray.sort(function (a, b) {
        return b.price - a.price;
      });
    }

    if (sortBy === 'PerformaceWorstToBest') {
      filteredDataArray.sort(function (a, b) {
        return a.cpuScore - b.cpuScore;
      });
    }

    if (sortBy === 'PerformaceBestToWorst') {
      filteredDataArray.sort(function (a, b) {
        return b.cpuScore - a.cpuScore;
      });
    }
    return filteredDataArray;
  };

  const changeDisplayMode = () => {
    if (displayMode === 'list') {
      setDisplayMode('card');
    } else {
      setDisplayMode('list');
    }
  };

  /* --------FILTER FUNCTIONS TECHNICAL FILTERS--------- */

  const applyFiltersBrand = (checkbox) => {
    if (checkbox.checked) {
      setBrandFilters(brandFilters.concat([checkbox.value]));
    } else {
      setBrandFilters(
        brandFilters.filter((brand) => {
          return brand !== checkbox.value;
        })
      );
    }
    setFilterButtonDisabled(false);
  };

  const applyFiltersOS = (checkbox) => {
    if (checkbox.checked) {
      setOSFilters(OSFilters.concat([checkbox.value]));
    } else {
      setOSFilters(OSFilters.filter((os) => os !== checkbox.value));
    }
    setFilterButtonDisabled(false);
  };

  const applyFilterPrice = (event, newValue) => {
    setPriceMax(newValue);
    setFilterButtonDisabled(false);
  };

  const applyFiltersAdditionalFeatures = (checkbox) => {
    if (checkbox.name === 'fingerprint') {
      if (checkbox.checked) {
        setFingerprintValue('yes');
      } else {
        setFingerprintValue('no');
      }
    }
    if (checkbox.name === 'faceRecognition') {
      if (checkbox.checked) {
        setFaceRecognitionValue('yes');
      } else {
        setFaceRecognitionValue('no');
      }
    }
    if (checkbox.name === 'dualSIM') {
      if (checkbox.checked) {
        setDualSIMValue('yes');
      } else {
        setDualSIMValue('no');
      }
    }
    console.log('dualSIMValue: ' + dualSIMValue);
    console.log('faceRecognitionValue: ' + faceRecognitionValue);
    console.log('fingerPrintValue: ' + fingerprintValue);

    setFilterButtonDisabled(false);
  };

  const propLogic = (ifArg, thenArg) => {
    let result = true;
    if (ifArg === 'yes' && thenArg === 'no') {
      result = false;
    }
    return result;
  };

  const applyFiltersBluetoothVersion = (checkbox) => {
    if (checkbox.checked) {
      setBluetoothVersionFilter(
        bluetoothVersionFilter.concat([Number(checkbox.value)])
      ); //Parse the value (String) into a number
    } else {
      setBluetoothVersionFilter(
        bluetoothVersionFilter.filter((version) => version !== checkbox.value)
      );
    }
    console.log(bluetoothVersionFilter);
    setFilterButtonDisabled(false);
  };

  const applyWeightFilters = (weight) => {
    setMaxWeight(weight);
    setFilterButtonDisabled(false);
  };

  const applyRAMFilters = (ram) => {
    setMinRAM(ram);
    setFilterButtonDisabled(false);
  };

  const applyCameraFilters = (megapixels) => {
    setMinCameraMegapixels(megapixels);
    setFilterButtonDisabled(false);
  };

  function applyFilters() {
    //filterFunctionModelName(searchTermModelName); //apply the input field filter first
    let phonesIncluded = [];
    console.log('dualSIMValue: ' + dualSIMValue);
    console.log('faceRecognitionValue: ' + faceRecognitionValue);
    console.log('fingerPrintValue: ' + fingerprintValue);
    let count = 0;
    products.data.forEach((phone) => {
      if (
        brandFilters.includes(phone.brand) &&
        OSFilters.includes(phone.operatingSystem) &&
        priceMax >= phone.price &&
        propLogic(dualSIMValue, phone.dualSIM) &&
        propLogic(faceRecognitionValue, phone.faceRecognition) &&
        propLogic(fingerprintValue, phone.fingerprint) &&
        bluetoothVersionFilter.includes(phone.bluetoothVersion) &&
        Number(maxWeight) >= phone.weight &&
        Number(minRAM) <= phone.ram &&
        Number(minCameraMegapixels) <= phone.camera_MP
      ) {
        count = phonesIncluded.push(phone);
      }
    });

    setFilteredData(phonesIncluded);
    //setFilterButtonDisabled(true);
  }

  /* ----------FILTERING AND SORTING BAR----------- */

  const availableBrandsHTML = availableBrands.map((brand) => (
    <FormControlLabel
      control={<Checkbox defaultChecked="false" />}
      name={brand}
      label={brand}
      value={brand}
      onChange={(e) => applyFiltersBrand(e.target)}
    />
  ));

  const availableOSHTML = availableOS.map((os) => (
    <FormControlLabel
      control={<Checkbox defaultChecked="false" />}
      name={os}
      label={os}
      value={os}
      onChange={(e) => applyFiltersOS(e.target)}
    />
  ));

  var availableAdditionalFeatures = [
    {name: 'faceRecognition', label: 'Face Recognition'},
    {name: 'fingerprint', label: 'Fingerprint sensor'},
    {name: 'dualSIM', label: 'Dual SIM capacity'},
  ];
  const availableAdditionalFeaturesHTML = availableAdditionalFeatures.map(
    (feature) => (
      <FormControlLabel
        control={<Checkbox />}
        name={feature.name}
        label={feature.label}
        value={false}
        onChange={(e) => applyFiltersAdditionalFeatures(e.target)}
      />
    )
  );

  const availableBluetoothVersionsHTML = availableBluetoothVersions.map(
    (version) => (
      <FormControlLabel
        control={<Checkbox defaultChecked="false" />}
        name={version}
        label={version}
        value={version}
        onChange={(e) => applyFiltersBluetoothVersion(e.target)}
      />
    )
  );

  const weightRadioButtonsHTML = (
    <RadioGroup
      value={maxWeight}
      onChange={(e) => applyWeightFilters(e.target.value)}
    >
      <FormControlLabel value="250" control={<Radio />} label="<250 g" />
      <FormControlLabel value="200" control={<Radio />} label="<200 g" />
      <FormControlLabel value="180" control={<Radio />} label="<180 g" />
      <FormControlLabel value="150" control={<Radio />} label="<150 g" />
    </RadioGroup>
  );

  const ramRadioButtonsHTML = (
    <RadioGroup
      value={minRAM}
      onChange={(e) => applyRAMFilters(e.target.value)}
    >
      <FormControlLabel value="6" control={<Radio />} label="6GB or more" />
      <FormControlLabel value="5" control={<Radio />} label="5GB or more" />
      <FormControlLabel value="4" control={<Radio />} label="4GB or more" />
      <FormControlLabel value="3" control={<Radio />} label="3GB or more" />
      <FormControlLabel value="2" control={<Radio />} label="2GB or more" />
      <FormControlLabel
        value="0"
        control={<Radio />}
        label="No min RAM requirements"
      />
    </RadioGroup>
  );

  const cameraRadioButtonsHTML = (
    <RadioGroup
      value={minCameraMegapixels}
      onChange={(e) => applyCameraFilters(e.target.value)}
    >
      <FormControlLabel value="12" control={<Radio />} label="12MP or more" />
      <FormControlLabel value="11" control={<Radio />} label="11MP or more" />
      <FormControlLabel value="10" control={<Radio />} label="10MP or more" />
      <FormControlLabel value="8" control={<Radio />} label="8MP or more" />
      <FormControlLabel value="5" control={<Radio />} label="5MP or more" />
      <FormControlLabel
        value="0"
        control={<Radio />}
        label="No min megapixels required"
      />
    </RadioGroup>
  );

  const [filterButtonDisabled, setFilterButtonDisabled] = useState(false);

  let filterBar = (
    <div>
      <form>
        <Grid container spacing={5}>
          <Grid item xs={4}>
            <TextField
              className="inputField"
              variant="outlined"
              label="Search phones by model or brand"
              value={searchTermModelName}
              onChange={(e) => setSearchTermModelName(e.target.value)} //e is the event Object triggered by the onChange
            />
          </Grid>

          <Grid item xs={4}>
            <FormControl>
              <InputLabel>Sort Results By</InputLabel>
              <Select
                native
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value=""></option>
                <option value="PriceAsc">Sort by price (ascending)</option>
                <option value="PriceDsc">Sort by price (descending)</option>
                <option value="PerformaceBestToWorst">
                  Sort by performance (best to worst)
                </option>
                <option value="PerformaceWorstToBest">
                  Sort by performance (worst to best)
                </option>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Switch
                  onChange={changeDisplayMode}
                  name="checkedB"
                  color="primary"
                />
              }
              label="Card / List display"
            />
          </Grid>
        </Grid>
      </form>
      <form>
        <Accordion class="filterAccordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            /* aria-controls="panel1a-content"
            id="panel1a-header" */
            class="filterAccordionSummary"
          >
            <Typography>Technical filters</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Grid container spacing={5} alignItems="top">
              <Grid item xs={1}>
                <Typography id="input-slider" gutterBottom>
                  Maximum Price
                </Typography>
              </Grid>
              <Grid item xs={1}>
                <EuroIcon />
              </Grid>
              <Grid item xs={10}>
                <Slider
                  onChangeCommitted={applyFilterPrice}
                  valueLabelDisplay="on"
                  max="1500"
                  aria-label="Price"
                />
              </Grid>

              <Grid item xs={3}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Operating system</FormLabel>
                  <FormGroup>{availableOSHTML}</FormGroup>
                </FormControl>
              </Grid>

              <Grid item xs={3}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Additional Features</FormLabel>
                  <FormGroup>{availableAdditionalFeaturesHTML}</FormGroup>
                </FormControl>
              </Grid>

              <Grid item xs={3}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Bluetooth Version</FormLabel>
                  <FormGroup>{availableBluetoothVersionsHTML}</FormGroup>
                </FormControl>
              </Grid>

              <Grid item xs={3}>
                <FormControl>
                  <FormLabel>Max weight</FormLabel>
                  <FormGroup>{weightRadioButtonsHTML}</FormGroup>
                </FormControl>
              </Grid>

              <Grid item xs={3}>
                <FormControl>
                  <FormLabel>Min RAM</FormLabel>
                  <FormGroup>{ramRadioButtonsHTML}</FormGroup>
                </FormControl>
              </Grid>

              <Grid item xs={3}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Brand</FormLabel>
                  <FormGroup>{availableBrandsHTML}</FormGroup>
                </FormControl>
              </Grid>

              <Grid item xs={3}>
                <FormControl>
                  <FormLabel>Min camera Megapixels</FormLabel>
                  <FormGroup>{cameraRadioButtonsHTML}</FormGroup>
                </FormControl>
              </Grid>

              <Grid item xs={10}>
                <Button
                  class="filterButton"
                  size="large"
                  variant="contained"
                  onClick={() => applyFilters()}
                  disabled={filterButtonDisabled}
                >
                  APPLY FILTERS
                </Button>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </form>
    </div>
  );

  /* ---------CONTENT / DISPLAYED PHONES--------- */

  let content = null;

  if (products.error) {
    content = <p>There was an error please refresh or try again later.</p>;
  }

  if (products.loading) {
    content = <Loader></Loader>;
  }

  if (products.data) {
    if (filteredData) {
      if (sortBy === '') {
        if (displayMode === 'list') {
          content = filteredData.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ));
        } else {
          var cards = filteredData.map((product) => (
            <div key={product.id}>
              <ProductCardCompact product={product} />
            </div>
          ));
          content = <Grid container>{cards}</Grid>;
        }
      } else {
        if (displayMode === 'list') {
          content = sortByFunction(filteredData).map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ));
        } else {
          var cards = sortByFunction(filteredData).map((product) => (
            <div key={product.id}>
              <ProductCardCompact product={product} />
            </div>
          ));
          content = <Grid container>{cards}</Grid>;
        }
      }
    } else {
      if (displayMode === 'list') {
        content = products.data.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ));
      } else {
        var cards = products.data.map((product) => (
          <div key={product.id}>
            <ProductCardCompact product={product} />
          </div>
        ));
        content = <Grid container>{cards}</Grid>;
      }
    }
  }

  /* ---------RETURN FUNCTION---------- */

  return (
    <>
    <div>
      <Header />
      <div className="container mx-auto">
        <h1 className="font-bold text-2xl mb-3 pageTitle">Offered Phones</h1>

        <div>{filterBar}</div>
        <br></br>
        <hr />
        <br></br>
        <div className="md:flex flex-wrap md:-mx-3">{content}</div>     
      </div>
    </div>
     <Footer /> 
     </>
  );
}

export default PhoneOverview;

//Bis hier Änderungen
