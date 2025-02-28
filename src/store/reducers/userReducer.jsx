const defaultState = {
  name: "undefined",
  email: "undefined",
  surname: "undefined",
  patronymic: "undefined",
  university: "undefined",
  employmentStatus: "undefined",
};
export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.name };
    case "SET_EMAIL":
      return { ...state, email: action.email };
    case "SET_SURNAME":
      return { ...state, surname: action.surname };
    case "SET_PATRONYMIC":
      return { ...state, patronymic: action.patronymic };
    case "SET_UNIVERSITY":
      return { ...state, university: action.university };
    case "SET_EMPLOYMENT_STATUS":
      return { ...state, employmentStatus: action.employmentStatus };
    default:
      return state;
  }
};
