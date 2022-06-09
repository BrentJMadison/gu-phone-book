import React from "react";
import { Button, Card, CardContent } from "@material-ui/core";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { ActionTypes, PhoneBookLine } from "../../TYPES";
import { useDispatch } from "react-redux";
import { deleteLine } from "../../ACTIONS/PhoneBook";
import { usePhoneBookLinesListStyles } from "./PhoneBookLinesList.styles";

const PhoneBookLinesList: React.FC<{
  lines: PhoneBookLine[];
}> = ({ lines }) => {
  //Component style
  const classes = usePhoneBookLinesListStyles();

  //Dispatch and actions
  const dispatch = useDispatch<any>();

  /**
   * DELETE CRUD OPERATION.
   * Given a PhoneLine object, it will delete in the database and client store
   * @param line PhoneLine
   */
  const deletePhoneLine = (line) => {
    dispatch(deleteLine(line.id));
  };

  /**
   * UPDATE CRUD OPERATION.
   * Given a PhoneLine object, it will change to the 'in-progress' update view
   * @param line PhoneLine
   */
  const updateLine = (line: PhoneBookLine) => {
    dispatch({
      type: ActionTypes.CHANGE_OPERATION,
      payload: "update",
    });

    dispatch({
      type: ActionTypes.SET_CURRENT_LINE,
      payload: line,
    });
  };

  return (
    <div className={classes.phoneBookLineContainer}>
      {lines.map((line, index) => (
        <Card variant="outlined" key={line.id + index}>
          <CardContent className={classes.phoneBookLine}>
            <div className={classes.phoneBookLeft}>
              <p className={classes.phoneLineTitle}>
                {line.firstName} {line.lastName}
              </p>
              <div className={classes.lineTitle}>
                <LocalPhoneIcon fontSize="small" />
                <p className={classes.phoneLinePhoneNumber}>
                  {line.phoneNumber}
                </p>
              </div>
            </div>
            <div className={classes.phoneBookRight}>
              <Button
                size={"small"}
                className={classes.phoneEditButton}
                variant="contained"
                onClick={() => updateLine(line)}
              >
                <EditIcon fontSize="medium" />
              </Button>
              <Button
                size={"small"}
                className={classes.phoneDeleteButton}
                variant="contained"
                onClick={() => deletePhoneLine(line)}
              >
                <DeleteIcon fontSize="medium" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default React.memo(PhoneBookLinesList);
