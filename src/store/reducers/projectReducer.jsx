const defaultState = {
  projects: undefined,
};
export const projectReducer = (state = defaultState, action) => {
  // action={type'',isAuth:''}
  switch (action.type) {
    case "SET_PROJECTS":
      return { ...state, projects: action.projects };
    default:
      return state;
  }
};
