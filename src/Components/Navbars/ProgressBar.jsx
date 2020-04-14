import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  // I modified this theme here that comes originally from Material UI.
  palette: {
    primary: { main: "#253858" },
    secondary: { main: "#FCB536" },
    action: {
      disabledBackground: "#7D8799",
      disabled: "#7D8799",
    },

    text: {
      secondary: "#7D8799",
      disabled: "#7D8799",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#f0f0f0",
    padding: "0.2",
    display: "flex",
    flexDirection: "column",
    flexShrink: "1",
    position: "relative",
    justifyContent: "center",
    minWidth: "50px",
    fontSize: "1em",
  },

  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
    active: {
      color: "#253858",
    },

    completed: {
      color: "#253858",
    },
  },

  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ["Course parameters", "Goals", "Evaluation", "Content", "Publish"];
}

export default function ProgressBar({ currentStep }) {
  const classes = useStyles();
  // const [activeStep, setActiveStep] = React.useState(currentStep);
  const activeStep = currentStep - 1;
  const steps = getSteps();

  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  const handleReset = () => {
    // setActiveStep(0);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Stepper
          activeStep={activeStep}
          orientation="vertical"
          className={classes.root}
        >
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                <div className={classes.actionsContainer}></div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </Paper>
        )}
      </div>
    </ThemeProvider>
  );
}
