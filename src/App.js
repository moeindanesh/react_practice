import React from 'react';


class App extends React.Component{
  render(){
    let name = this.props.name;
    let num = this.props.num;
    return (
    <div>
      <h1>{name}</h1>
      <bold>{num}</bold>
    </div>
    
    )
  }
}

App.propTypes = {
  name : React.PropTypes.string,
  num : React.PropTypes.number.isRequired
}
App.defaultProps = {
  name : 'The Name',
  num : 1234
}

export default App;