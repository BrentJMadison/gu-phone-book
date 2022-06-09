import React from "react";
import { Button, Card, CardContent, TextField } from "@material-ui/core";
import { createStyles, makeStyles, useTheme } from "@material-ui/styles";

import { ActionTypes, PhoneBookLine } from "../TYPES";
import { useDispatch, useSelector } from "react-redux";
import { addBookLine, fetchLines, updateLine } from "../ACTIONS/PhoneBook";
import "react-phone-number-input/style.css";

import PhoneInput from "react-phone-number-input";

const useStyles = makeStyles((theme) =>
  createStyles({
    addPhoneBookContainer: {
      marginTop: "30px",
    },
    phoneLineInput: {
      marginBottom: "20px",
    },

    phoneBookLine: {
      display: "flex",
      flexDirection: "column",
    },
  })
);

const AddPhoneBookLine: React.FC<{}> = ({}) => {
  const dispatch = useDispatch<any>();

  const currentLine = useSelector<any>(
    (state) => state.currentLine
  ) as PhoneBookLine;
  const crudOperation = useSelector<any>((state) => state.crudOperation);

  const classes = useStyles();

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: any
  ) => {
    dispatch({
      type: ActionTypes.SET_CURRENT_LINE,
      payload: { ...currentLine, [field]: event.target.value },
    });
  };

  const handlePhoneNumber = (value) => {
    dispatch({
      type: ActionTypes.SET_CURRENT_LINE,
      payload: { ...currentLine, phoneNumber: value },
    });
  };

  const cancelAdd = () => {
    dispatch({
      type: ActionTypes.CHANGE_OPERATION,
      payload: "view",
    });
  };

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
              onChange={(e: any) => handleChange(e, "firstName")}
              variant="outlined"
            />
            <TextField
              fullWidth
              className={classes.phoneLineInput}
              label="Last Name"
              value={currentLine.lastName}
              onChange={(e: any) => handleChange(e, "lastName")}
              variant="outlined"
            />

            <PhoneInput
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
