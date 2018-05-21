import React from 'react';
import PatientRecord from './PatientRecord.js';
import Error from './Error.js';


/**
 * PatientMRNLookup is responsible for performing searches on MRN
 */
class PatientMRNLookup extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      error: '',
      patient_record: [],
    };

    this.handleMRNSearch = this.handleMRNSearch.bind(this);
    this.handleMRNParamSearch = this.handleMRNParamSearch.bind(this)
  }



  componentDidMount() {
    this.handleMRNParamSearch()
  }

  /** Use the URL parameter :mrn to search for patient */
  handleMRNParamSearch() {
    if (this.props.match && this.props.match.params.mrn) {
      fetch('/patient/'+this.props.match.params.mrn)
        .then(response => {
          
          return response.json()
        })
        .then(data => {
          console.log(data)
          this.setState({ patient_record: data });
        })
        .catch( err => {
          this.setState({ error: "Could not fetch patient from backend service" });
        })
    }
  }

  /** Use the input box to search for patient */
  handleMRNSearch(e) {
    if (e.key === 'Enter') {
      window.location = '/patient/'+e.target.value;
    }
  }

  render() {

    return (

      <div>
        { this.state.error &&
          <Error message={this.state.error} />
        }
        
         <div className="columns">
          <div className="column"></div>
          <div className="column is half">
            
            <div>Type in an MRN and press Enter   </div>

            <div className="field">
              <div className="control is-large ">
                <input
                  className="input is-large"
                  type="text"
                  placeholder="Search MRN..."
                  value={this.props.mrnSearch}
                  onKeyPress={this.handleMRNSearch}
                />
              </div>
            </div>
          </div>
          <div className="column"></div>
        </div>

        <div className="columns">
          <div className="column"></div>
          <div className="column is half">
            <PatientRecord  patient={this.state.patient_record} />
          </div>
          <div className="column"></div>
        </div>
        
      </div>

    );
  }
}

export default PatientMRNLookup;