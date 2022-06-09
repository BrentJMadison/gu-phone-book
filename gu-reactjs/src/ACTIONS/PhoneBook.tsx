import { ActionTypes } from "../TYPES";
import PhoneService from "../API/PhoneService";

/**
 * ADD CRUD OPERATION. Add to database and refresh data
 * @param firstName
 * @param lastName
 * @param phoneNumber
 * @returns
 */
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

/**
 * VIEW CRUD OPERATION. Fetches data from database and populates store.
 * @returns
 */
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

/**
 * DELETE CRUD OPERATION. Deletes line from database. Assumes delete was okay and removes from client side store. (Could be improved if client found issues)
 * @param id
 * @returns
 */

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

/**
 * UPDATE CRUD OPERATION. Updates line by ID in database. Assumes update was okay and does no requery database. (Again could be improved)
 * @param id
 * @param data
 * @returns
 */
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
