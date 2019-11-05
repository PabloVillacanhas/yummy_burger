import "./Layout.scss"

import React, { useState } from "react";

import BurgerBuilder from "containers/BurgerBuilder/BurgerBuilder";
import SideDrawer from 'components/Navigation/SideDrawer/SideDrawer'
import Toolbar from "components/Navigation/Toolbar/Toolbar";

const Layout = props => {

  const [showSidebar, setShowSidebar] = useState(false)

  const toggleSidebarHandler = () => {
    setShowSidebar(!showSidebar);
  }

  return (
    <div className="layout">
      <SideDrawer click={toggleSidebarHandler} show={showSidebar}></SideDrawer>
      <Toolbar toggle={toggleSidebarHandler} />
      <main>
        <BurgerBuilder></BurgerBuilder>
      </main>
    </div>
  );
};

export default Layout;
