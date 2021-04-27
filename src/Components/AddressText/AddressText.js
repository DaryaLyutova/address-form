import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, IconButton } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import { CurrentAddressContext } from '../../context/CurrentAddressContext';

const useStyles = makeStyles((theme) => ({
    gridContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    }
}));

const AddressText = (props) => {

    const classes = useStyles();

    const currentAddress = React.useContext(CurrentAddressContext);
    const YourChooseAddress = Object.values(currentAddress).filter(element => !!(element) === true).join(', ');

    return (
        <Grid container spacing={2} className={classes.gridContainer}>
            <Grid item xs={9}>
                <Typography>Вы ввели: {YourChooseAddress}</Typography>
            </Grid>
            <Grid item xs={2}>
                <IconButton onClick={props.onClick}>
                    <CreateIcon fontSize="small" />
                </IconButton>
            </Grid>
        </Grid>
    )
}

export default AddressText;