import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0)
  },

  appBar: {
   
    top: "auto",
    bottom: 0,
    alignItems: 'center',
  }
  
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="static" color="primary" className={classes.appBar}>
        <Toolbar ><p>Copyright © 2020 Albenus All Rights Reserved</p></Toolbar>
      </AppBar>
    </React.Fragment>
  );
}