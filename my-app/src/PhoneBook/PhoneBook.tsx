import React, { useEffect } from "react";

import { createStyles, makeStyles, useTheme } from "@material-ui/styles";
import PhoneBookForm from "./PhoneBookForm";

const useStyles = makeStyles((theme) =>
  createStyles({
    phoneBookPage: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  })
);

const PhoneBook: React.FC<{}> = ({}) => {
  const classes = useStyles();

  return (
    <div className={classes.phoneBookPage}>
      <PhoneBookForm />
    </div>
  );
};

export default React.memo(PhoneBook);
