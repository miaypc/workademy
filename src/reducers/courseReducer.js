export default function (state = {}, action) {
  switch (action.type) {
    case "CREATE_DESCRIPTION":
      return {
        ...state,
        courseName: action.courseName,
        courseDescription: action.courseDescription,
      };
    default:
      return state;
  }
}
