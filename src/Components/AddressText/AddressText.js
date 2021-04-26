import React from 'react';
import { Grid, Typography, IconButton } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import { CurrentAddressContext } from '../../context/CurrentAddressContext';

const AddressText = (props) => {

    const currentAddress = React.useContext(CurrentAddressContext);
    const YourChooseAddress = Object.values(currentAddress).filter(element => !!(element) === true).join(', ');

    return (
        <Grid container spacing={2} style={{ alignItems: "center",justifyContent:"center", margin: "20px 0"}}>
            <Grid item xs={9}>
                <Typography>Вы ввели: {YourChooseAddress}</Typography>
            </Grid>
            <Grid item xs={2}>
                <IconButton>
                    <CreateIcon fontSize="small" onClick={props.onClick} />
                </IconButton>
            </Grid>
        </Grid>
    )
}

export default AddressText;