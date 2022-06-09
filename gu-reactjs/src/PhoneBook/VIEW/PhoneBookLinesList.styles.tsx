import { createStyles, makeStyles } from "@material-ui/core";

export const usePhoneBookLinesListStyles = makeStyles((theme) =>
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
      marginTop: "10px",
    },
    phoneLineTitle: {
      fontWeight: 600,
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
