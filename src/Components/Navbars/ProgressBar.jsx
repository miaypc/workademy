import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepButton from "@material-ui/core/StepButton";
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
    position: "sticky",
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
  return [
    "Course parameters",
    "Goals",
    "New Goal",
    "Evaluation",
    "Content",
    "Summary",
  ];
}

export default function ProgressBar({ currentStep }) {
  const classes = useStyles();
  // const [activeStep, setActiveStep] = React.useState(currentStep);
  const activeStep = currentStep - 1;
  const [completed, setCompleted] = React.useState({});
  const steps = getSteps();

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    // setActiveStep(newActiveStep);
  };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  const handleStep = (step) => () => {
    // setActiveStep(step);
  };

  // const handleComplete = () => {
  //   const newCompleted = completed;
  //   newCompleted[activeStep] = true;
  //   setCompleted(newCompleted);
  //   handleNext();
  // };

  // const handleReset = () => {
  //   setActiveStep(0);
  //   setCompleted({});
  // };
  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  // const handleReset = () => {
  // setActiveStep(0);
  // };

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
              <StepButton
                onClick={handleStep(index)}
                completed={completed[index]}
              >
                {label}
              </StepButton>
              {/* <StepLabel>{label}
              </StepLabel> */}
              <StepContent>
                <div className={classes.actionsContainer}></div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </div>
    </ThemeProvider>
  );
}
