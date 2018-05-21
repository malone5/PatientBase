import React, { Component } from 'react';
import Search from './Search';
import PatientList from './PatientList';
import Error from './Error';


/**
 * FilterablePatientTable is a container for searching and displaying patient data in a table
 * Most of the state lives in this component
 */
class FilterablePatientTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: '',
      errorInfo: '',
      isLoading: false,
      filterText: '',
      patient_list: []
    };
    
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  componentDidMount() {
    this.handleFilterTextChange('')
  }

  /** Call API any time the user updates the filter text */
  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText,
      isLoading: true
    });

    fetch('/patients?name='+filterText)
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.setState({ patient_list: data, isLoading: false });
        return
      })
      .catch( err => {
        this.setState({ error: "there was an error" });
      })
  }


  render() {
    return <div>

      { this.state.error &&
        <Error message={this.state.error} />
      }

      <div className="columns">
        <div className="column"></div>
        <div className="column is-half">

          <Search
            isLoading={this.state.isLoading}
            filterText={this.state.fileterText}
            onFilterTextChange={this.handleFilterTextChange}
          />
          
          <PatientList
            isLoading={this.state.isLoading}
            patients={this.state.patient_list}
            filterText={this.state.fileterText}
          />

        </div>
        <div className="column"></div>
      </div>

    </div>
  }
}

export default FilterablePatientTable;