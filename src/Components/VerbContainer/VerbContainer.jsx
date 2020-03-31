import React from "react";
import Grid from "@material-ui/core/Grid";
import { VerbsButton } from "../styleButton.js";
import VerbItem from "./VerbItem";
const skills = [
  { title: "knowledge ⚛️", verbs: ["define", "define"] },
  { title: "Comprehension 🎓", verbs: ["define", "define"] },
  { title: "Application �", verbs: ["define", "define"] }
];

function VerbContainer() {
  return (
    <Grid container direction="row" justify="space-evenly" alignItems="center">
      {skills.map(skill => {
        return <VerbItem title={skill.title} verbs={skill.verbs} />;
      })}
    </Grid>
  );
}

export default VerbContainer;
