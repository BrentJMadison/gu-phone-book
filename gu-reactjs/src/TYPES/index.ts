export interface PhoneBookLine {
  phoneBookLines: unknown;
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

export interface AppAction {
  type: string;
  payload: any;
}

export enum ActionTypes {
  DELETE_LINE = 'DELETE_LINE',
  ADD_LINE = 'ADD_LINE',
  UPDATE_LINE = 'UPDATE_LINE',
  FETCH_LINES = 'FETCH_LINES',
  CHANGE_OPERATION = 'CHANGE_OPERATION',
  SET_CURRENT_LINE = 'SET_CURRENT_LINE',
}