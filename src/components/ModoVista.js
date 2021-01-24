import React, { useState } from "react";
import { Tabs, Tab, Divider } from "@material-ui/core";
import VistaSimulacion from "./VistaSimulacion";

const ModoVista = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
      console.log(newValue);
      setSelectedTab(newValue);
  };

  return (
    <>
      <Tabs value={selectedTab} centered onChange={handleChange}>
        <Tab label="Simulacion" />
        <Tab label="Explicacion" />
      </Tabs>
      <Divider />
      {selectedTab === 0 ? <VistaSimulacion /> : "vista Explicacion"}
      </>
  );
};

export default ModoVista;
