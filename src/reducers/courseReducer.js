// {courseName:"", courseDescription:"", goals:[{verb:"", name:""},{},{}]}

export default function (state = {}, action) {
  switch (action.type) {
    case "CREATE_DESCRIPTION":
      return {
        ...state,
        courseName: action.courseName,
        courseDescription: action.courseDescription,
      };
    case "CREATE_GOAL":
      return {
        ...state,
        goals: [
          ...(state.goals || []),
          { verb: action.verb, name: action.name },
        ],
      };
    default:
      return state;
  }
}

// (a, b) => a > b? a:b
