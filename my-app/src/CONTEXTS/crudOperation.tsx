import { ActionTypes, AppAction, PhoneBookLine } from "../TYPES";

const initialState = "view";

const crudOperation = (crudOperation = initialState, action: AppAction) => {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.CHANGE_OPERATION:
      return payload;

    default:
      return crudOperation;
  }
};

export default crudOperation;
