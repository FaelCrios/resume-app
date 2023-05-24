import React from "react";

import "./App.css";
import { Navbar } from "./layout/NavBarAndFooter/Navbar";
import { Redirect, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Homepage } from "./layout/HomePage/HomePage";
import { Projetos } from "./layout/Projetos/Projetos";
import { Footer } from "./layout/NavBarAndFooter/Footer";
import { ProjetosUnitarios } from "./layout/ProjetosUnitarios/ProjetosUnitarios";

export const App = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Switch>
          <Route path='/' exact component={Homepage}>
            <Redirect to="/home"/>
            </Route>
          <Route path='/home' component={Homepage}>
            <Homepage/>
          </Route>
          <Route path='/projeto/projeto1'component={ProjetosUnitarios}>
            <ProjetosUnitarios/>
          </Route>
          <Route path='/projeto/projeto2'component={ProjetosUnitarios}>
            <ProjetosUnitarios/>
          </Route>

          <Route path='/projetos' component={Projetos}>
            <Projetos/>
            </Route> 
        </Switch>
      </div>
      <Footer/>

    </div>
  );
};
