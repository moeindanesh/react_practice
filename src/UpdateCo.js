import React from 'react';
import ReactDOM from 'react-dom';

export class UpdateCo extends React.Component{
    constructor(){
        super();
        this.state ={
            increasing: false
        }
    }
    update(){
        ReactDOM.render(<UpdateCo val={this.props.val+1} />, document.getElementById('root'));
    }
    componentWillReceiveProps(nextProps){
        this.setState({increasing: nextProps.val > this.props.val})
    }
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.val % 5 === 0;
    }
    render(){
        console.log(`the increasing state is: ${this.state.increasing}`);
        return(
            <div>
                <button onClick={this.update.bind(this)}>{this.props.val}</button>
            </div>
        )
    }
    componentDidUpdate(prevProps, prevState){
        console.log(`prevProps: ${prevProps.val}`);
    }
}

UpdateCo.defaultProps = {
    val: 0
}