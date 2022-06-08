import React, { useEffect, useRef, useState } from "react";
import {
  Grid,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { createStyles, makeStyles, useTheme } from "@material-ui/styles";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

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

const AddPhoneBookLine: React.FC<{
  addLine: any;
  lineObj: PhoneBookLine;
  setCrudOperation: any;
}> = ({ addLine, lineObj, setCrudOperation }) => {
  const [currentLine, setCurrentLine] = useState(lineObj);
  const classes = useStyles();

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: any
  ) => {
    setCurrentLine({ ...currentLine, [field]: event.target.value });
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
            <TextField
              fullWidth
              className={classes.phoneLineInput}
              label="Phone Number"
              value={currentLine.phoneNumber}
              onChange={(e: any) => handleChange(e, "phoneNumber")}
              variant="outlined"
            />
          </div>

          <div>
            <Button
              onClick={() => setCrudOperation("view")}
              variant="contained"
            >
              Cancel
            </Button>
            <Button
              style={{ marginLeft: "20px" }}
              color={"primary"}
              variant="contained"
              onClick={() => addLine(currentLine)}
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
