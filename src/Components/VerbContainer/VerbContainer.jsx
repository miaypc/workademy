import React from "react";
import Grid from "@material-ui/core/Grid";
import VerbItem from "./VerbItem";
const skills = [
  {
    title: "knowledge ⚛️",
    verbs: [
      "Define",
      "Describ",
      "Identify",
      "Match",
      "Name",
      "Recognize",
      "Cite",
      "Read",

      "Study"
    ]
  },
  {
    title: "Comprehension 🎓",
    verbs: [
      "Clarify",
      "Detail",
      "Estimate",
      "Estimate",
      "Factor",
      "Interact",
      "Observe",
      "Rewrite",
      "Summarize"
    ]
  },
  {
    title: "Application 🏂",
    verbs: [
      "Manage",
      "Explain",
      "Diagnose",
      "Confirm",
      "Analyze",
      "Characterize",
      "Figure out",
      "Order",
      "Prioritize",
      "Select"
    ]
  }
];

function VerbContainer() {
  return (
    <Grid container direction="row" justify="space-evenly">
      {skills.map(skill => {
        return <VerbItem title={skill.title} verbs={skill.verbs} />;
      })}
    </Grid>
  );
}

export default VerbContainer;
