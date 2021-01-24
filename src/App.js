import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Drawer from "./components/Drawer";
import Topico from "./pages/Topico";

const App = () => {
  return (
    <BrowserRouter>
      <div style={{display: 'flex'}}>
      <Drawer />
      <Switch>
        <Route exact from="/" component={Home} />
        <Route from="/tema" component={Topico} />
      </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
