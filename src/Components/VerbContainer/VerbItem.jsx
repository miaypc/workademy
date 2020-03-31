import React from "react";
import { VerbsButton } from "../styleButton.js";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Color from "../../Utils/Color";
import { flexbox } from "@material-ui/system";

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
    // padding: 0,
    // alignItems: "center",
    display: "flex",
    justifyContent: "space-around"
    // display: "flex",
    // justify: "space-evenly"
    // "&:last-child": {
    //   paddingBottom: 0
    // }
  }
}));
function VerbItem({ title, verbs }) {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader className={classes.cardheader} title={title} />
      <CardContent
        style={{ display: "flex", justifyContent: "space-arround" }}
        classes={{ root: classes.root }}
        className={classes.cardcontent}
      >
        {verbs.map(verb => {
          return <VerbsButton>{verb}</VerbsButton>;
        })}
      </CardContent>
    </Card>
  );
}
export default VerbItem;
