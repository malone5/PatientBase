import React from 'react';

/**
 * Responsible for handeling input when filtering patients by names
 */
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }
  
  /** send filter text changes back up to Parent to handle state change */
  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }
  
  render() {
    return (
      <form>
        {this.props.isLoading}

        <div className="field">
          <div className={"control is-large " + (this.props.isLoading ? 'is-loading' : '')}>
            <input
              className="input is-large"
              type="text"
              placeholder="Search Patient Name..."
              value={this.props.filterText}
              onChange={this.handleFilterTextChange}
            />
          </div>
        </div>
      </form>
    );
  }
}


export default Search;