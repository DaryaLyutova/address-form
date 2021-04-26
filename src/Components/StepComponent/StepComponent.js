import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Stepper, Step, StepLabel, Button, Typography, Box } from '@material-ui/core';
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
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 2);
    };

    const handleReset = () => {
        setActiveStep(0);
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
                            onSubmit={props.onSubmit} />
                        <div>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleNext}
                            // disabled={activeStep === 0}
                            >Next
                            </Button>
                        </div>
                    </Box>
                )}
            </Box>
        </div>
    );
}