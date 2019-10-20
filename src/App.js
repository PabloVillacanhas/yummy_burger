import React from "react";
import "./App.scss";

import Layout from "./components/Layout/Layout";
import BurguerBuilder from "./containers/BurguerBuilder/BurguerBuilder"  

function App() {
  return (
    <div className="App">
      <Layout>
        <p>Layout</p>
        <BurguerBuilder></BurguerBuilder>
      </Layout>
    </div>
  );
}

export default App;
