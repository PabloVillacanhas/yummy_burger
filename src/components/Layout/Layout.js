import React from "react";

import "./Layout.scss"
import BurguerBuilder from "../../containers/BurguerBuilder/BurguerBuilder";

const Layout = props => {
  return (
    <div className="layout">
        <div className="toolbar">Toolbar, SideDrawer, Backdrop</div>
        <main>
          <BurguerBuilder></BurguerBuilder>
        </main>
    </div>
  );
};

export default Layout;
