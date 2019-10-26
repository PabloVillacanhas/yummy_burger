import React from "react";

import "./Layout.scss"
import BurgerBuilder from "../../containers/BurgerBuilder/BurgerBuilder";

const Layout = props => {
  return (
    <div className="layout">
      <div className="toolbar">Toolbar, SideDrawer, Backdrop</div>
      <main>
        <BurgerBuilder></BurgerBuilder>
      </main>
    </div>
  );
};

export default Layout;
