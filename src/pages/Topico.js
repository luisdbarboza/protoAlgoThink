import React from "react";
import { Grid } from "@material-ui/core";
import PageWrapper from "../components/PageWrapper";
import ModoVista from "../components/ModoVista";
import EditorDeCodigo from "../components/EditorDeCodigo";

const Topico = () => {
  return (
    <>
      <PageWrapper>
        <Grid container>
          <Grid item xs={7}>
            <ModoVista />
          </Grid>
          <Grid item xs={5}>
            <EditorDeCodigo />
          </Grid>
        </Grid>
      </PageWrapper>
    </>
  );
};

export default Topico;
