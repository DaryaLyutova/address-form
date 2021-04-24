import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Container, Typography, ThemeProvider, Button } from '@material-ui/core';
// import styled from 'styled-components';
import Autocomplete from "react-google-autocomplete";
import { CurrentAddressContext } from '../../context/CurrentAddressContext';
import API_KEY from '../../consts';
import { createMuiTheme } from '@material-ui/core/styles';
// import Form from '../Form/Form';

const theme = createMuiTheme();

theme.typography.h1 = {
  fontSize: '1.5rem',
  '@media (min-width:600px)': {
    fontSize: '2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
};
// const Box = styled.div`
//   display:flex;
//   flex-direction: column; 
//   align-items: center;
//   justify-content: center;
//   border: 1px solid seagreen;
//   border-radius: 10px;
//   width: 500px;
//   padding: 10px;
// `

function App() {

  const [currentAddress, SetCurrentAddress] = React.useState({
    postal_code: '',
    country: '',
    administrative_area: '',
    locality: '',
    route: '',
    street_number: '',
    postal_code_suffix: '',
    formatted_address: ''
  });

  const savedAddress = (place) => {
    place.address_components.forEach((component) => {
      const componentType = component.types[0];
      switch (componentType) {
        case "street_number":
          return SetCurrentAddress(
            currentAddress.street_number = component.long_name
          )
        case "route":
          return SetCurrentAddress(
            currentAddress.route = component.short_name
          )
        case "postal_code":
          return SetCurrentAddress(
            currentAddress.postal_code = component.long_name
          )
        case "postal_code_suffix":
          return SetCurrentAddress(
            currentAddress.postal_code_suffix = component.long_name
          )
        case "locality":
          return SetCurrentAddress(
            currentAddress.locality = component.long_name
          )
        case "administrative_area_level_1":
          return SetCurrentAddress(
            currentAddress.administrative_area = component.short_name
          )
        case "country":{
          return SetCurrentAddress(
            currentAddress.country = component.long_name
          )}
        default:
          return currentAddress;
      };

    });
    return SetCurrentAddress({...currentAddress,
      formatted_address: place.formatted_address});
  }
  // const handlSubmite = (values) => {
  //   SetCurrentAddress(values);
    console.log(currentAddress)
  // }

  return (
    <CurrentAddressContext.Provider value={currentAddress}>
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
          <Typography variant="h1">
            Введите адрес
          </Typography>
          <Formik
            initialValues={{ currentAddress }}
          >
            <Form>
              <Autocomplete
                name="address"
                placeholder="Введите адрес"
                as="input"
                apiKey={API_KEY}
                style={{ width: "90%" }}
                onPlaceSelected={savedAddress}
                options={{
                  types: ["address"],
                  componentRestrictions: { country: "ru" },
                }}
              />

              {/* // <Form>
            //   <Field */}
              {/* //     name="address" placeholder="Введите адрес" as="input">
            //   </Field>
            // </Form> */}
              <label htmlFor="address">Вы выбрали {currentAddress.formatted_address}</label>
            </Form>

          </Formik>
        </Container>
      </ThemeProvider>
    </CurrentAddressContext.Provider>
  );
}

export default App;
