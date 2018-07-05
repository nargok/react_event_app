import React from "react"
import PropTypes from "prop-types"
class EventTable extends React.Component {
  render () {
    return (
      <React.Fragment>
    	    <table className="table table-striped">
        <thead>
          <tr>
            <th className="col-md-3">Name</th>
            <th className="col-md-2">Date</th>
            <th className="col-md-3">Place</th>
            <th className="col-md-4">Description</th>
          </tr>
        </thead>
	    <tbody></tbody>
	    </table>    
      </React.Fragment>
    );
  }
}

export default EventTable
