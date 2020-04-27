export default function (state = {}, action) {
  switch (action.type) {
    case "CREATE_DESCRIPTION":
      return {
        ...state,
        courseName: action.courseName,
        courseDescription: action.courseDescription,
      };
    case "CREATE_GOAL":
      // create id so we can have unique ids for everything
      let lastId = (state.lastId || 0) + 1;
      let addedGoal = { verb: action.verb, name: action.name, id: lastId };
      return {
        ...state,
        lastId,
        goals: [...(state.goals || []), addedGoal],
        selectedGoal: addedGoal,
      };

    case "CREATE_QUESTION":
      return {
        ...state,
        questions: [
          ...(state.questions || []),
          {
            goalId: action.goalId,
            name: action.name,
            questionType: action.questionType,
            answers: action.answers,
            correct: action.correct,
          },
        ],
      };
    default:
      return state;
  }
}

// (a, b) => a > b? a:b
