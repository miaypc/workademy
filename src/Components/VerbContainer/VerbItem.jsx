import React from "react";
import { VerbsButton } from "../styleButton.js";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Color from "../../Utils/Color";

const useStyles = makeStyles(theme => ({
  cardheader: {
    background: `${Color.mainNavy}`,
    color: `${Color.mainWhite}`,
    textAlign: "center"
  },
  cardcontent: {
    width: 250,
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    margin: 10
  },
  button: {
    margin: 8
  }
}));
function VerbItem({ title, verbs }) {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader className={classes.cardheader} title={title} />
      <CardContent className={classes.cardcontent}>
        {verbs.map(verb => {
          return <VerbsButton className={classes.button}>{verb}</VerbsButton>;
        })}
      </CardContent>
    </Card>
  );
}
export default VerbItem;
