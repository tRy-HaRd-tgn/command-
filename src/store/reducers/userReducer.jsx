const defaultState = {
  name: "undefined",
  email: "undefined",
  surname: "undefined",
  patronymic: "undefined",
  university: "undefined",
  employmentStatus: "undefined",
  profilePicture: "undefined",
  studyDirection: "undefined",
  appointment: "undefined",
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
    case "SET_PROFILE_PICTURE":
      return { ...state, profilePicture: action.profilePicture };
    case "SET_STUDY_DIRECTION":
      return { ...state, studyDirection: action.studyDirection };
    case "SET_APPOINTMENT":
      return { ...state, appointment: action.appointment };
    default:
      return state;
  }
};
