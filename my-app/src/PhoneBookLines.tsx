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
    phoneBookLineContainer: {
      marginTop: "30px",
    },
    phoneBookLine: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    phoneBookLeft: {
      display: "flex",
      flexDirection: "column",
    },
    phoneBookRight: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    lineTitle: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      color: "gray",
      fontWeight: "bold",
    },
    phoneLineTitle: {
      fontWeight: "bold",
      fontSize: "20px",
      margin: "0",
    },
    phoneLinePhoneNumber: {
      fontSize: "20px",
      margin: "0",
    },
    phoneDeleteButton: {
      color: "white",
      minWidth: "unset",
      height: "40px",
      backgroundColor: "#A8201A",
    },
    phoneEditButton: {
      color: "white",
      minWidth: "unset",
      height: "40px",
      backgroundColor: "#3f51b5",
      marginRight: "5px",
    },
  })
);

const PhoneBookLines: React.FC<{
  lines: PhoneBookLine[];
  updateLine: any;
  deleteLine: any;
}> = ({ lines, updateLine, deleteLine }) => {
  const [crudOperation, setCrudOperation] = useState("view");
  const classes = useStyles();

  console.log(lines);
  return (
    <div className={classes.phoneBookLineContainer}>
      {lines.map((line, index) => (
        <Card variant="outlined" key={line.firstName + index}>
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
                onClick={() => deleteLine(line)}
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

export default React.memo(PhoneBookLines);
