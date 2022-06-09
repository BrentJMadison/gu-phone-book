import { createStyles, makeStyles } from "@material-ui/core";

export const usePhoneBookStyles = makeStyles((theme) =>
  createStyles({
    phoneBookForm: {
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
      margin: "40px",
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
      marginTop: "50px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  })
);
