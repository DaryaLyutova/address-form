import React from 'react';
import GoogleAddressForm from '../GoogleAddressForm/GoogleAddressForm';
import { NoSsr } from '@material-ui/core';
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

  const handlerClick = () => {
    props.onToggle();
  }

  return (
    <div className={classes.formWrapper}>
      <GoogleAddressForm savedAddress={props.savedAddress} />
      {props.placeSave ? (
        <React.Fragment>
          <NoSsr defer={props.placeSave}>
            <AddressText onClick={handlerClick} />
          </NoSsr>
        </React.Fragment>
      ) : null}
      {props.placeChange ? (
        <React.Fragment>
          <NoSsr defer={props.placeChange}>
            <AddressFormCheck onSubmit={props.onSubmit} closeForm={handlerClick} />
          </NoSsr>
        </React.Fragment>
      ) : null}
    </div>
  );
}

export default StepOne;