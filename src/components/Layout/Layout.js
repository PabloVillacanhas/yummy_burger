import "./Layout.scss"

import BurgerBuilder from "containers/BurgerBuilder/BurgerBuilder";
import React from "react";

const Layout = props => {
  return (
    <div className="layout">
      <div className="toolbar">Toolbar, SideDrawer</div>
      <main>
        <BurgerBuilder></BurgerBuilder>
      </main>
    </div>
  );
};

export default Layout;
