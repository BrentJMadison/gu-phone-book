import { ActionTypes, AppAction, PhoneBookLine } from "../TYPES";

const initialState = {
  id: null,
  firstName: "",
  lastName: "",
  phoneNumber: "",
};

const currentLine = (currentLine = initialState, action: AppAction) => {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.SET_CURRENT_LINE:
      return payload;

    default:
      return currentLine;
  }
};

export default currentLine;
