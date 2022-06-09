import { ActionTypes, AppAction } from "../TYPES";

const initialState = [
  {
    id: 1,
    firstName: "defaa",
    lastName: "regular",
    phoneNumber: "512-312-3115",
  },
  {
    id: 2,
    firstName: "defa1123",
    lastName: "searching",
    phoneNumber: "512-312-3235",
  },
  {
    id: 2,
    firstName: "default",
    lastName: "Madison",
    phoneNumber: "815-312-3235",
  },
];

const phoneBookLines = (phoneBookLines = initialState, action: AppAction) => {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.ADD_LINE:
      return [...phoneBookLines, payload];

    case ActionTypes.FETCH_LINES:
      return payload;

    case ActionTypes.UPDATE_LINE:
      return phoneBookLines.map((line) => {
        if (line?.id === payload.id) {
          return {
            ...line,
            ...payload,
          };
        } else {
          return line;
        }
      });

    case ActionTypes.DELETE_LINE:
      return phoneBookLines.filter(({ id }) => id !== payload.id);

    default:
      return phoneBookLines;
  }
};

export default phoneBookLines;
