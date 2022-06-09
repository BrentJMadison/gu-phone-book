import { createStyles, makeStyles } from "@material-ui/core";

export const useAddUpdateBookLinesStyles = makeStyles((theme) =>
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
    phoneNumberInput: {
      border: "1px solid #c0c0c0 !important",
      borderRadius: "4px",
      padding: "10px",
      width: "534px !important",
      marginBottom: "50px",

      "&:before": {
        border: "none !important",
      },
    },
  })
);
