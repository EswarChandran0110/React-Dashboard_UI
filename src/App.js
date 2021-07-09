import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard"
import Footer from "./components/Footer";

function App() {
  return (
    <div id="wrapper">
      <Sidebar/>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Navbar/>
          <div className="container-fluid">
            <Dashboard/>
          </div>
        </div>
         <Footer/>
      </div>
    </div>
  );
}

export default App;
