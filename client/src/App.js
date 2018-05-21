import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './PB-logo.PNG';

// CSS
import './App.css';
import 'react-table/react-table.css';

//Componenets
import FilterablePatientTable from './components/FilterablePatientTable.js';
import Home from './components/Home.js';
import PatientMRNLookup from './components/PatientMRNLookup.js';

class App extends Component {
  render() {
    
    return (
      <div className="App">

        <Router>
          <div>
            <div className="navbar" role="navigation" aria-label="main navigation">
              <div className="navbar-brand">

                <a className="navbar-item" href="/">
                  {/* <h1>PatientBase</h1> */}
                   <img src={logo} alt="logo" /> 
                </a>


                <Link to="/" className="navbar-item">Home</Link>
                <Link to="/patients" className="navbar-item">Patients</Link>
                <Link to="/patient" className="navbar-item">MRN Lookup</Link>

              </div>
            </div>
            <div>
              <Route exact path="/" component={Home} />
              <Route path="/patients" component={FilterablePatientTable} />
              <Route exact path="/patient/:mrn" component={PatientMRNLookup} />
              <Route exact path="/patient/" component={PatientMRNLookup} />
            </div>
          </div>
        </Router>


      </div>
    );
  }
}

export default App;
