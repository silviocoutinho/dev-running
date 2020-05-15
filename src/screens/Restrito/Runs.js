import React, { Component } from 'react';
import ActionCreator from '../../redux/actionCreators';
import { connect } from 'react-redux';

class Runs extends Component {
  componentDidMount(){
    this.props.load1();
  }
  renderRun(run){
    return(
      <tr>
        <td>{run.friendly_name}</td>
        <td>{run.duration}</td>
        <td>{run.distance}</td>
        <td>{run.created}</td>        
      </tr>
    )
  }
  render() {
    const run ={
      friendly_name: 'run para teste',
      duration: 100,
      distance: 101,
      created: '2020-05-05 00:00:00'
    }
    return (
      <div>
        <h1>Runs</h1>
        <button onClick={() => this.props.create(run)}>Create</button>
        <table>
          { this.props.runs.data.map(this.renderRun)}
        </table>
      </div>
      
      );

  }
}

const mapStateToProps = (state) => {
  return {
    runs: state.runs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    load1: () => dispatch(ActionCreator.getRunsRequest()),
    create: (run) => dispatch(ActionCreator.createRunRequest(run))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Runs);
