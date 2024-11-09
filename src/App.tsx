import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import RCAP_logo from "./assets/RCAP_logo.png";
//import "./App.css";
import "./App2.css";
import InfoPanel from "./components/InfoPanel/InfoPanel";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={RCAP_logo} alt="" width={65}></img>
        <h1>National Forage Data Hub</h1>
      </header>
      <body className="App-body">
        <InfoPanel />
      </body>
      <footer className="App-footer">
        <p>
          Questions? Contact us at <i>foragedatahub@gmail.com</i>.
        </p>
        <p>
          This work is supported by AFRI Sustainable Agricultural Systems
          Coordinated Agricultural Project (SAS-CAP) grant no. 2021-68012-35917
          from the USDA National Institute of Food and Agriculture.
        </p>
      </footer>
    </div>
  );
}

export default App;
