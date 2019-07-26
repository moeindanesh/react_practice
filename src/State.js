import React from 'react';


class State extends React.Component{
  constructor(){
    super();
    this.state = {
      name : 'NoName!',
      num : '94'
    }
  }
  update(e){
    this.setState({name : e.target.value})
  }
  render(){
    return (
      <div>
        <h1>{this.state.num} - {this.state.name}</h1>
        <Widget update={this.update.bind(this)}/>
      </div>
    )
  }
}

const Widget = (props) =>
  <input type="text" onChange={props.update} />


export default State;