import React, { useEffect, useState } from "react";
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

const useStyles = makeStyles((theme) =>
  createStyles({
    phoneBookForm: {
      margin: "20px",
      width: "600px",
      backgroundColor: "#ededed",
      display: "flex",
      padding: "20px",
      flexDirection: "column",
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
      marginTop: "40px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  })
);

const PhoneBook: React.FC<{}> = ({}) => {
  const classes = useStyles();

  const SAMPLE_DATA = [
    {
      id: 123,
      firstName: "Test",
      lastName: "regular",
      phoneNumber: "512-312-3115",
    },
    {
      id: 421,
      firstName: "Test1",
      lastName: "searching",
      phoneNumber: "512-312-3235",
    },
  ];

  const DEFAULT_EDITTING = {
    id: -1,
    firstName: "",
    lastName: "",
    phoneNumber: "",
  };

  const [crudOperation, setCrudOperation] = useState("view");
  const [lineEditting, setLineEditting] = useState(DEFAULT_EDITTING);
  const [searchText, setSearchText] = useState("");
  const [phoneLines, setPhoneLines] = useState(SAMPLE_DATA);

  useEffect(() => {
    //TODO load phone lines on mount
  }, []);

  const handleSearchText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const filterPhoneLines = () => {
    return phoneLines.filter(function (line) {
      return line.lastName.toLowerCase().includes(searchText.toLowerCase());
    });
  };

  //TODO
  const deleteLine = () => {
    console.log("delete");
    return "";
  };

  //TODO ADD METHOD
  const addPhoneBookLine = (currentLine: PhoneBookLine) => {
    setCrudOperation("view");
    return "";
  };

  const updateLine = (line: PhoneBookLine) => {
    setLineEditting(line);
    setCrudOperation("update");
  };

  const addBookLine = () => {
    setLineEditting(DEFAULT_EDITTING);
    setCrudOperation("create");
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
                marginTop: "20px",
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

            <PhoneBookLines
              updateLine={updateLine}
              lines={filterPhoneLines()}
              deleteLine={deleteLine}
            />
          </>
        )}
        {(crudOperation === "create" || crudOperation === "update") && (
          <AddPhoneBookLine
            addLine={addPhoneBookLine}
            setCrudOperation={setCrudOperation}
            lineObj={lineEditting}
          />
        )}
      </CardContent>
    </Card>
  );
};

export default React.memo(PhoneBook);
