import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { CurrentAddressContext } from '../../context/CurrentAddressContext';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    formWrapper: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(8),
    },
    gridContainer: {
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        textAlign: "center"
    }
}));

const StepTwo = () => {

    const currentAddress = React.useContext(CurrentAddressContext);
    const YourChooseAddress = Object.values(currentAddress).filter(element => !!(element) === true).join(', ');

    const classes = useStyles();

    return (
        <Container maxWidth="sm">
            <div className={classes.formWrapper}>
                <Grid container spacing={9} className={classes.gridContainer}>
                    <Grid item xs={12}>
                        <Typography className={classes.text}>Вы выбрали:
                            {YourChooseAddress}
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
}

export default StepTwo;