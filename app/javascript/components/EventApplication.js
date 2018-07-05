import React from "react"
import PropTypes from "prop-types"
import EventTable from './EventTable'

class EventApplication extends React.Component {
  render () {
    return (
        <div className="container">
            <div className="jumbotron">
              <h1>ReactJS Tutorial</h1>
              <p>by your name </p>
            </div>
            <div className="row">
                <div className="col-md-12">
                  <EventTable />
                </div>
            </div>
        </div>
    );
  }
}

EventApplication.propTypes = {
  greeting: PropTypes.string
};
export default EventApplication
