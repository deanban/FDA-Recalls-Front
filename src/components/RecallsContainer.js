import React, { Component } from 'react';
import { fetchData } from '../actions/recallsAction'
import { connect } from 'react-redux'

class RecallsContainer extends Component {

  componentDidMount(){
    this.props.fetchData()
  }
  render() {
    return (
      <div>MyComponent</div>
    )
  }
}

function mapStateToProps(state){
  return{
    recallData: state.recalls
  }
}

function mapDispatchToProps(dispatch){
  return{
    fetchData: () => {
      dispatch(fetchData())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecallsContainer)
