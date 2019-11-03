import "./Layout.scss"

import BurgerBuilder from "containers/BurgerBuilder/BurgerBuilder";
import React from "react";
import SideDrawer from 'components/Navigation/SideDrawer/SideDrawer'
import Toolbar from "components/Navigation/Toolbar/Toolbar";

const Layout = props => {
  return (
    <div className="layout">
      <SideDrawer></SideDrawer>
      <Toolbar />
      <main>
        <BurgerBuilder></BurgerBuilder>
      </main>
    </div>
  );
};

export default Layout;
