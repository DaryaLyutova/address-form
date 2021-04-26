import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import { CurrentAddressContext } from '../../context/CurrentAddressContext';

const AddressText = (props) => {

    const currentAddress = React.useContext(CurrentAddressContext);

    return (
        <Grid container spacing={9} style={{alignItems: "center"}}>
            <Grid item xs={11}>
                <Typography>Вы ввели: {currentAddress.formatted_address}</Typography>
                
            </Grid>
            <CreateIcon fontSize="small" onClick={props.onClick}/>
        </Grid>
    )
}

export default AddressText;