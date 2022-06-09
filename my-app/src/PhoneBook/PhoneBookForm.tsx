import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
} from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import PhoneBookLines from "./PhoneBookLines";
import AddPhoneBookLine from "./AddPhoneBookLine";
import { fetchLines } from "../ACTIONS/PhoneBook";
import { ActionTypes, PhoneBookLine } from "../TYPES";

const useStyles = makeStyles((theme) =>
  createStyles({
    phoneBookForm: {
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
      margin: "40px",
      width: "600px",
      backgroundColor: "#ededed",
      display: "flex",
      padding: "20px",
      flexDirection: "column",
      border: "1px solid red",
    },
    phoneBookHeader: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",

      "& h1": {
        margin: "0px 20px",
      },
    },
    contactsLineContainer: {
      marginTop: "50px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  })
);

const PhoneBook: React.FC<{}> = ({}) => {
  const classes = useStyles();
  const dispatch = useDispatch<any>();

  //Store variables
  const phoneLines = useSelector<any>(
    (state) => state.phoneBookLines
  ) as PhoneBookLine[];
  const crudOperation = useSelector<any>((state) => state.crudOperation);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    dispatch(fetchLines());
  }, []);

  const handleSearchText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const filterPhoneLines = () => {
    return phoneLines?.filter(function (line: any) {
      return line?.lastName.toLowerCase().includes(searchText.toLowerCase());
    });
  };

  const addBookLine = () => {
    dispatch({
      type: ActionTypes.CHANGE_OPERATION,
      payload: "create",
    });

    dispatch({
      type: ActionTypes.SET_CURRENT_LINE,
      payload: {
        id: null,
        firstName: "",
        lastName: "",
        phoneNumber: "",
      },
    });
  };

  return (
    <Card className={classes.phoneBookForm}>
      <CardContent>
        <div>{crudOperation as string}</div>
        <div className={classes.phoneBookHeader}>
          <ContactPhoneIcon fontSize="large" />
          <h1>GU Phone Book App</h1>
        </div>

        <div className={classes.contactsLineContainer}>
          <h3>Contacts</h3>
          <Button onClick={addBookLine} color={"primary"} variant="contained">
            <AddIcon />
            Add Contact
          </Button>
        </div>

        {crudOperation === "view" && (
          <>
            <TextField
              disabled={crudOperation !== "view"}
              fullWidth
              size="small"
              value={searchText}
              onChange={handleSearchText}
              style={{
                marginTop: "10px",
                backgroundColor: "white",
                borderRadius: "4px",
              }}
              placeholder="Search for contact by last name..."
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon fontSize={"small"} />
                  </InputAdornment>
                ),
              }}
            />

            <PhoneBookLines lines={filterPhoneLines()} />
          </>
        )}
        {(crudOperation === "create" || crudOperation === "update") && (
          <AddPhoneBookLine />
        )}
      </CardContent>
    </Card>
  );
};

export default React.memo(PhoneBook);
