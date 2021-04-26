import React from 'react';
import { NoSsr } from '@material-ui/core';
import GoogleAddressForm from '../GoogleAddressForm/GoogleAddressForm';
import { makeStyles } from '@material-ui/core/styles';
import AddressFormCheck from '../AddressFormCheck/AddressFormCheck';
import AddressText from '../AddressText/AddressText';

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
}));

const StepOne = (props) => {

  const classes = useStyles();

  const [placeChange, setPlaceChange] = React.useState(false);

  const openAddressChageForm = () => {
    setPlaceChange(true);
  };

  return (
      <div className={classes.formWrapper}>
        <GoogleAddressForm savedAddress={props.savedAddress} />
        {props.placeSave ? (
          <React.Fragment>
            <NoSsr defer={props.placeSave}>
              <AddressText onClick={openAddressChageForm} />
            </NoSsr>
          </React.Fragment>
        ) : null}
        {placeChange ? (
          <React.Fragment>
            <NoSsr defer={placeChange}>
              <AddressFormCheck onSubmit={props.onSubmit}/>
            </NoSsr>
          </React.Fragment>
        ) : null}
      </div>
  );
}

export default StepOne;