import React from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { VerbsButton } from "../styleButton.js";
import Color from "../../Utils/Color";

const useStyles = makeStyles(theme => ({
  root: {
    paddingBottom: 0
  },
  cardheader: {
    background: `${Color.mainNavy}`,
    color: `${Color.mainWhite}`
  },
  cardcontent: {
    width: 250,
    paddingBottom: 0,
    alignItems: "center",
    display: "flex",
    justify: "space-evenly"
  }
}));

function VerbContainer() {
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="space-evenly" alignItems="center">
      <Card>
        <CardHeader className={classes.cardheader} title="Knowlege ⚛️" />
        <CardContent
          classes={{ root: classes.root }}
          className={classes.cardcontent}
        >
          <VerbsButton>Define</VerbsButton>
          <VerbsButton>Define</VerbsButton>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className={classes.cardheader} title="Comprehension 🎓" />
        <CardContent className={classes.cardcontent}>
          <VerbsButton>Define</VerbsButton>
          <VerbsButton>Define</VerbsButton>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className={classes.cardheader} title="Application 🏂" />
        <CardContent className={classes.cardcontent}>
          <VerbsButton>Define</VerbsButton>
          <VerbsButton>Define</VerbsButton>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default VerbContainer;
