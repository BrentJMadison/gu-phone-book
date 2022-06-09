import { ActionTypes } from "../TYPES";

import PhoneService from "../API/PhoneService";

export const addBookLine =
  (firstName, lastName, phoneNumber) => async (dispatch) => {
    try {
      const res = await PhoneService.create({
        firstName,
        lastName,
        phoneNumber,
      });

      dispatch({
        type: ActionTypes.ADD_LINE,
        payload: res.data,
      });

      //Refresh lines
      dispatch(fetchLines());

      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

export const fetchLines = () => async (dispatch) => {
  try {
    const res = await PhoneService.getAll();

    console.log(res);

    dispatch({
      type: ActionTypes.FETCH_LINES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteLine = (id) => async (dispatch) => {
  try {
    await PhoneService.delete(id);

    dispatch({
      type: ActionTypes.DELETE_LINE,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateLine = (id, data) => async (dispatch) => {
  try {
    const res = await PhoneService.update(id, data);

    dispatch({
      type: ActionTypes.UPDATE_LINE,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
