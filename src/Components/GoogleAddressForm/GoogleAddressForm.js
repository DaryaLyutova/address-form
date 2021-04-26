import React from 'react';
import Autocomplete from "react-google-autocomplete";
import { Formik, Form } from 'formik';
import { Grid, Typography} from '@material-ui/core';
import API_KEY from '../../consts';
import { CurrentAddressContext } from '../../context/CurrentAddressContext';

function GoogleAddressForm(props) {

  const currentAddress = React.useContext(CurrentAddressContext);

  const handlerPlaceSelected = (place) => {
    props.savedAddress(place);
  }


  return (
    <Formik initialValues={{ currentAddress }}>
      <Form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5">Адрес</Typography>
            </Grid>
            <Grid item xs={12}>
            <Autocomplete
                name="address"
                placeholder="Введите адрес"
                as="input"
                apiKey={API_KEY}
                style={{ width: "524px",
                borderRadius: "4px",
                lineHeight: "1.1876em",
                fontSize: "1.1876em",
                height: "1.1876em",
                margin: 0,
                padding: "18.5px 14px",
                color: "rgba(0, 0, 0, 0.87)",
                background: "none"}}
                onPlaceSelected={handlerPlaceSelected}
                options={{
                  types: ["address"],
                  componentRestrictions: { country: "ru" },
                }}
              />
            </Grid>
        </Grid>
      </Form>
    </Formik >
  );
}

export default GoogleAddressForm;
