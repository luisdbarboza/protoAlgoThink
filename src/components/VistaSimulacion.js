import React from "react";
import { Grid, Paper, Button, ButtonGroup } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  animationSection: {
    flexBasis: 8,
    padding: "1rem",
  },
  inputPanel: {
    flexBasis: 2,
  },
});

const VistaSimulacion = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item className={classes.animationSection}>
          <img src="assets/img/stack.gif" alt="stack gif" />
        </Grid>
        <Grid item className={classes.inputPanel}>
          <Paper variant="outlined">
            <ButtonGroup>
            <Button>&lt;</Button>
            <Button>||</Button>
            <Button>&gt;</Button>
            </ButtonGroup>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default VistaSimulacion;
