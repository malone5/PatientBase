import React from 'react';
import ReactTable from 'react-table'
import { Link } from "react-router-dom";

/**
 * PatientList is responsible for receving a list of patients and constructing the table.
 * Uses react-table to enable sorting and pagination
 */
class PatientList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      patient_list: [],
    };
  }
  
  render() {
    const columns = [{
                      Header: 'id',
                      accessor: 'id'
                    }, {
                      Header: 'Name',
                      accessor: 'full_name'
                    }, {
                      Header: 'MRN',
                      accessor: 'mrn',
                      Cell: ({ row }) => (<Link to={{ pathname: `/patient/${row.mrn}` }}>{row.mrn}</Link>)
                    }]

    return (
      <div>

      <ReactTable
        data={this.props.patients}
        columns={columns}
        defaultPageSize={10}
        defaulktSorted={[
                          {
                            id: "id",
                            desc: true
                          }
                        ]}
        className="-striped -highlight"
      />

      </div>
    );
  }
}

export default PatientList;