import React from 'react';
import { CurrentAddressContext } from '../../context/CurrentAddressContext';
import { Container } from '@material-ui/core';
import StepComponent from '../StepComponent/StepComponent';

function App() {

  const [currentAddress, SetCurrentAddress] = React.useState({
    postal_code: '',
    country: '',
    administrative_area: '',
    locality: '',
    route: '',
    street_number: '',
  });
  const [placeSave, setPlaceSave] = React.useState(false);

  const savedAddress = (place) => {
    setPlaceSave(true)
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
        case "locality":
          return SetCurrentAddress(
            currentAddress.locality = component.long_name
          )
        case "administrative_area_level_1":
          return SetCurrentAddress(
            currentAddress.administrative_area = component.short_name
          )
        case "country": {
          return SetCurrentAddress(
            currentAddress.country = component.long_name
          )
        }
        default:
          return currentAddress;
      };
    });
    return SetCurrentAddress({
      ...currentAddress
    });
  };

  function onSubmit(values) {
    SetCurrentAddress(values);
  }

  return (
    <CurrentAddressContext.Provider value={currentAddress}>

      <Container maxWidth="sm">
        <StepComponent
          savedAddress={savedAddress}
          placeSave={placeSave}
          onSubmit={onSubmit}
        />
      </Container>

    </CurrentAddressContext.Provider>
  );
}

export default App;
