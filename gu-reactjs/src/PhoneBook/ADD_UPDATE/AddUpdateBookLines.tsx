import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, CardContent, TextField } from "@material-ui/core";
import MuiPhoneNumber from "material-ui-phone-number";

import { ActionTypes, PhoneBookLine } from "../../TYPES";
import { addBookLine, fetchLines, updateLine } from "../../ACTIONS/PhoneBook";
import { useAddUpdateBookLinesStyles } from "./AddUpdateBookLines.styles";

const AddPhoneBookLine: React.FC<{}> = ({}) => {
  //Component style
  const classes = useAddUpdateBookLinesStyles();

  //Dispatch and actions
  const dispatch = useDispatch<any>();
  const currentLine = useSelector<any>(
    (state) => state.currentLine
  ) as PhoneBookLine;
  const crudOperation = useSelector<any>((state) => state.crudOperation);

  /**
   * Handles event from firstName and lastName inputs
   * @param event
   * @param field "firstName" | "lastName"
   */
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: "firstName" | "lastName"
  ) => {
    dispatch({
      type: ActionTypes.SET_CURRENT_LINE,
      payload: { ...currentLine, [field]: event.target.value },
    });
  };

  /**
   * Handles event strictly for phone number
   * @param value String
   */
  const handlePhoneNumber = (value) => {
    dispatch({
      type: ActionTypes.SET_CURRENT_LINE,
      payload: { ...currentLine, phoneNumber: value },
    });
  };

  /**
   * Function to switch back to main view, cancelling operation.
   */
  const cancelAdd = () => {
    dispatch({
      type: ActionTypes.CHANGE_OPERATION,
      payload: "view",
    });
  };

  /**
   * CREATE/UPDATE CRUD OPERATION.
   * Creates or updates object determined by crudOperation.
   * Refreshes databases and view on api call.
   */
  const savePhoneBookLine = () => {
    const { id, firstName, lastName, phoneNumber } = currentLine;

    if (crudOperation === "update") {
      dispatch(updateLine(id, currentLine))
        .then((data) => {
          fetchLines();

          dispatch({
            type: ActionTypes.CHANGE_OPERATION,
            payload: "view",
          });
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      dispatch(addBookLine(firstName, lastName, phoneNumber))
        .then((data) => {
          fetchLines();

          dispatch({
            type: ActionTypes.CHANGE_OPERATION,
            payload: "view",
          });
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <div className={classes.addPhoneBookContainer}>
      <Card variant="outlined">
        <CardContent className={classes.phoneBookLine}>
          <div>
            <TextField
              fullWidth
              className={classes.phoneLineInput}
              label="First Name"
              value={currentLine.firstName}
              onChange={(e: any) => handleInputChange(e, "firstName")}
              variant="outlined"
            />
            <TextField
              fullWidth
              className={classes.phoneLineInput}
              label="Last Name"
              value={currentLine.lastName}
              onChange={(e: any) => handleInputChange(e, "lastName")}
              variant="outlined"
            />

            <MuiPhoneNumber
              defaultCountry={"us"}
              InputProps={{
                className: classes.phoneNumberInput,
              }}
              placeholder="Enter phone number"
              value={currentLine.phoneNumber}
              onChange={handlePhoneNumber}
            />
          </div>

          <div>
            <Button onClick={cancelAdd} variant="contained">
              Cancel
            </Button>
            <Button
              style={{ marginLeft: "20px" }}
              color={"primary"}
              variant="contained"
              onClick={savePhoneBookLine}
            >
              Submit
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default React.memo(AddPhoneBookLine);
