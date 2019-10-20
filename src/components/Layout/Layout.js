import React from "react";

import "./Layout.scss"

const Layout = props => {
  return (
    <div className="layout">
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
