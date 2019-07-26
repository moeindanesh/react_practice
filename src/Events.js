import React from 'react';

export class Events extends React.Component{
    constructor(){
        super();
        this.state = {
            currrentEvent : `---`
        }
        this.update = this.update.bind(this)
    }
    update(e){
        this.setState({currentEvent : e.type})
    }
    render(){
        return(
            <div>
                <textarea cols="30" rows='10' onKeyPress={this.update} onCopy={this.update} onPaste={this.update} />
                <h1>{this.state.currentEvent}</h1>                
            </div>
        )
    }
}