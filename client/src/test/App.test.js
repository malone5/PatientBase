import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

import FilterablePatientTable from '../components/FilterablePatientTable.js';
import PatientMRNLookup from '../components/PatientMRNLookup.js';
import Home from '../components/Home.js';

describe('Component renders', function() {

  it('App renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('FilterablePatientTable renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FilterablePatientTable />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('PatientMRNLookup renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PatientMRNLookup />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Home renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Home />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

})