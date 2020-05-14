import React, { Component } from 'react';
import ActionCreator from '../../redux/actionCreators';
import { connect } from 'react-redux';

class Runs extends Component {
  render() {
    return <h1>Runs</h1>;
  }
}

const mapStateToProps = (state) => {
  return {
    runs: state.runs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    load: () => dispatch(ActionCreator.getRunsRequest()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Runs);
