export default function (state = {}, action) {
  switch (action.type) {
    case "CREATE_DESCRIPTION":
      return {
        ...state,
        courseName: action.courseName,
        courseDescription: action.courseDescription,
      };
    case "CREATE_GOAL": {
      // create id so we can have unique ids for everything
      let lastId = (state.lastId || 0) + 1;
      let addedGoal = { verb: action.verb, name: action.name, id: lastId };
      return {
        ...state,
        lastId,
        goals: [...(state.goals || []), addedGoal],
        selectedGoal: addedGoal,
      };
    }
    case "UPDATE_GOAL": {
      let updatedGoal = { verb: action.verb, name: action.name, id: action.id };
      return {
        ...state,
        goals: state.goals.map((goal) =>
          goal.id === updatedGoal.id ? updatedGoal : goal
        ),
        selectedGoal: updatedGoal,
      };
    }
    case "SELECT_GOAL":
      return {
        ...state,
        selectedGoal: action.goal,
      };
    case "CREATE_QUESTION": {
      let lastId = (state.lastId || 0) + 1;
      return {
        ...state,
        lastId,
        questions: [
          ...(state.questions || []),
          {
            id: lastId,
            goalId: action.goalId,
            name: action.name,
            questionType: action.questionType,
            answers: action.answers,
            correct: action.correct,
          },
        ],
      };
    }
    case "DELETE_QUESTION":
      return {
        ...state,
        questions: state.questions.filter(
          (question) => question.id !== action.id
        ),
      };
    default:
      return state;
  }
}

// (a, b) => a > b? a:b
