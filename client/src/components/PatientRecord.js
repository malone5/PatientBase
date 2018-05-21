import React from 'react';

/**
 * PatientRecord contains all patient information
 */
class PatientRecord extends React.Component {
  render() {

    return (
      <div>
        
        {this.props.patient && this.props.patient.full_name ? (
          <div className="card has-text-left">
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <i className="far fa-address-card fa-2x"></i>
                </div>
                <div className="media-content is-vertical-center">
                  <p className="title is-4">{this.props.patient.full_name}</p>
                </div>
              </div>

              <div className="content">
                <p><span className="has-text-weight-bold">ID:</span> {this.props.patient.id}</p>
                <p><span className="has-text-weight-bold">MRN:</span> {this.props.patient.mrn}</p>
                <p>
                  <span className="has-text-weight-bold">First:</span> {this.props.patient.first} 
                   &nbsp;&nbsp; 
                  <span className="has-text-weight-bold">Last:</span> {this.props.patient.last}
                </p>
                <p><span className="has-text-weight-bold">Gender:</span> {this.props.patient.gender}</p>
                <p><span className="has-text-weight-bold">Birthday:</span> {this.props.patient.birthdate}</p>
              </div>
            </div>
          </div>


        ) : (
          <div> No record with that MRN was found </div>
        )}

      </div>

    );
  }
}

export default PatientRecord;