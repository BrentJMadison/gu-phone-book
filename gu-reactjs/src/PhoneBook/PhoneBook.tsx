import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
} from "@material-ui/core";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";

import PhoneBookLinesList from "./VIEW/PhoneBookLinesList";
import AddPhoneBookLine from "./ADD_UPDATE/AddUpdateBookLines";
import { fetchLines } from "../ACTIONS/PhoneBook";
import { ActionTypes, PhoneBookLine } from "../TYPES";
import { usePhoneBookStyles } from "./PhoneBook.styles";

const PhoneBook: React.FC<{}> = ({}) => {
  //Store variables and dispatch
  const phoneLines = useSelector<any>(
    (state) => state.phoneBookLines
  ) as PhoneBookLine[];
  const crudOperation = useSelector<any>((state) => state.crudOperation);
  const dispatch = useDispatch<any>();

  //Styles
  const classes = usePhoneBookStyles();

  //Local component state
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    dispatch(fetchLines());
  }, []);

  /**
   * Handles search input for filtering by last name
   */
  const handleSearchText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  /**
   * Helper method to filter lines by searchText on lastName
   */
  const filterPhoneLines = () => {
    return phoneLines?.filter(function (line: any) {
      return line?.lastName.toLowerCase().includes(searchText.toLowerCase());
    });
  };

  /**
   * Function to add line after clicking "ADD CONTACT"
   */
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

            <PhoneBookLinesList lines={filterPhoneLines()} />
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
