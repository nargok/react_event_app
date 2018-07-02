import React from "react"
import PropTypes from "prop-types"
class EventApplication extends React.Component {
  render () {
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
      </React.Fragment>
    );
  }
}

EventApplication.propTypes = {
  greeting: PropTypes.string
};
export default EventApplication
