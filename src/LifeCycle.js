import React from 'react';
import ReactDOM from 'react-dom';

class LifeCycle extends React.Component{
    constructor(){
        super();
        this.state = {
            val : 0
        }
        this.update = this.update.bind(this)
    }
    update(){
        this.setState({val : this.state.val + 1})
    }
    componentWillMount(){
        console.log(`componentWillMount`);
        this.setState({m: 2})
    }
    componentDidMount(){
        console.log(`componentDidMount`);
        this.inc = setInterval(this.update, 500);
    }
    componentWillUnmount(){
        console.log(`componentWillUnmount`);
        clearInterval(this.inc);
    }
    render(){
        console.log(`render`);
        return(
            <div>
                <button onClick={this.update}>{this.state.val * this.state.m}</button>
            </div>
        )
    }
}

export class  Wrapper extends React.Component{
    mount(){
        ReactDOM.render(<LifeCycle />, document.getElementById('wrapper'));
    }
    unMount(){
        ReactDOM.unmountComponentAtNode(document.getElementById('wrapper'));
    }
    render(){
        return(
            <div>
                <button onClick={this.mount.bind(this)}>Mount</button>
                <button onClick={this.unMount.bind(this)}>UnMount</button>
                <div id="wrapper"></div>
            </div>
        )
    }
}
