import React, { Component } from 'react';
import ActionCreator from '../../redux/actionCreators';
import { connect } from 'react-redux';
import { Table, Button } from 'semantic-ui-react';

class Runs extends Component {
  componentDidMount(){
    this.props.load1();
  }
  renderRun(run){
    return(
      <Table.Row>
        <Table.Cell>{run.friendly_name}</Table.Cell>
        <Table.Cell>{run.duration}</Table.Cell>
        <Table.Cell>{run.distance}</Table.Cell>
        <Table.Cell>{run.created}</Table.Cell>        
      </Table.Row>
    )
  }
  render() {
    const run ={
      friendly_name: 'run para teste',
      duration: 80,
      distance: 71,
      created: '2020-05-05 00:00:00'
    }
    return (
      <div>
        <h1>Corridas</h1>
        <Button onClick={() => this.props.create(run)}>Create!</Button>
        <Table celled>
          <Table.Header>
            <Table.HeaderCell>Nome</Table.HeaderCell>
            <Table.HeaderCell>Duração</Table.HeaderCell>
            <Table.HeaderCell>Distância</Table.HeaderCell>
            <Table.HeaderCell>Data</Table.HeaderCell>
          </Table.Header>
          <Table.Body>
          { this.props.runs.data.map(this.renderRun)}
          </Table.Body>          
        </Table>
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
    create: (run1) => dispatch(ActionCreator.createRunRequest(run1))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Runs);
