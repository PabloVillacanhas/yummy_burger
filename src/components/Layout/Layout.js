import "./Layout.scss"

import BurgerBuilder from "containers/BurgerBuilder/BurgerBuilder";
import React from "react";
import Toolbar from "components/Navigation/Toolbal/Toolbar";

const Layout = props => {
  return (
    <div className="layout">
      <div>SideDrawer</div>
      <Toolbar />
      <main>
        <BurgerBuilder></BurgerBuilder>
      </main>
    </div>
  );
};

export default Layout;
