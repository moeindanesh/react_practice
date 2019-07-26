import React from 'react';

export class Children extends React.Component{
    render(){
        return(
            <Parent>
                <div className="childA"></div>
                <div className="childB"></div>
            </Parent>
        )
    }
}

class Parent extends React.Component{
    render(){
        // let items = this.props.children.map(child => child) // for 2 or more

        // let items = React.Children.map(this.props.children, child => child);

        let items = React.Children.toArray(this.props.children)

        // let items = React.Children.only(this.props.children)
        console.log(items);
        return null
    }
}