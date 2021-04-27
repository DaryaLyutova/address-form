import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Stepper, Step, StepLabel, Button, Typography, Box } from '@material-ui/core';
import { CurrentAddressContext } from '../../context/CurrentAddressContext';
import StepTwo from './StepTwo';
import StepOne from './StepOne';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        textAlign: "center",
    },
}));

function getSteps() {
    return ['Введите адресс', 'Данные успешно сохранены'];
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return 'Введите адресс';
        case 1:
            return 'Данные успешно сохранены';
        default:
            return 'Unknown stepIndex';
    }
}

export default function HorizontalLabelPositionBelowStepper(props) {

    const classes = useStyles();

    const currentAddress = React.useContext(CurrentAddressContext);
    const YourChooseAddress = Object.values(currentAddress);
    const [placeChange, setPlaceChange] = React.useState(false);
    const [activeStep, setActiveStep] = React.useState(0);
    
    const steps = getSteps();

    const handleNext = () => {
        if (YourChooseAddress.every(value => value)) {
            setActiveStep((prevActiveStep) => prevActiveStep + 2);
        } else {
            handlerToggleForm();
        }
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const handlerToggleForm = () => {
        setPlaceChange(!placeChange);
    };

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel />
                    </Step>
                ))}
            </Stepper>
            <Box>
                {activeStep === steps.length ? (
                    <Box>
                        <Typography className={classes.instructions} variant="h5">{getStepContent(activeStep - 1)}</Typography>
                        <StepTwo />
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleReset}>
                            Внести изменения
                                </Button>
                    </Box>
                ) : (
                    <Box>
                        <Typography className={classes.instructions} variant="h5">{getStepContent(activeStep)}</Typography>
                        <StepOne
                            savedAddress={props.savedAddress}
                            placeSave={props.placeSave}
                            onToggle={handlerToggleForm}
                            placeChange={placeChange}
                            onSubmit={props.onSubmit} />
                        <div>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleNext}
                            >Next
                            </Button>
                        </div>
                    </Box>
                )}
            </Box>
        </div>
    );
}