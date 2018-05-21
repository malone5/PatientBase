import React, { Component } from 'react';
import logo from '../PB-logo.PNG';

/**
 * Homepage + description of the applicaiton
 */
class Home extends Component {
  render() {
    return <section className="section">
            <div className="container">
              <img src={logo} alt="logo"  width="20%" height="20%"/> 
              <p className="subtitle has-text-left">
                PatientBase is a web application built with a backend using Node.js/Express.js and a front-end using React.js. 
                PatientBase allows the user 2 major functions. (1) The ability to search a patient data set and 
                (2) the ability to lookup specific records based on their Medical Record Number (MRN)
              </p>
              <p className="subtitle has-text-left">
                To search a patient, select the [Patients] tab and type in a name. 
                The table will automatically filter and allow the user to sort on id, name, or MRN.
                You can also navigate straight to a patient record by clicking on their MRN.
              </p>
              <p className="subtitle has-text-left">
                To look up a specific patient record, select the [MRN Lookup] tab, enter a valid MRN and press enter to submit. 
                If a match was found on the MRN, the patient record will display.
              </p>
            </div>
          </section>
  }
}

export default Home;