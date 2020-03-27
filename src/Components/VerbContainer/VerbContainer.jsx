import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Button from "../Button/Button";
import Color from "../../Utils/Color";
import "./VerbContainer.scss";

function VerbContainer() {
  return (
    <Card>
      <CardHeader className="verb-container-header" title="Knowlege " />
      <CardContent>
        <Button
          size="verbs"
          color={Color.mainGrey}
          textColor={Color.mainNavy}
          name="Define"
        />
        <Button
          size="verbs"
          color={Color.mainGrey}
          textColor={Color.mainNavy}
          name="Define"
        />
      </CardContent>
    </Card>
  );
}

export default VerbContainer;
