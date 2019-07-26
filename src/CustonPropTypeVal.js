import React from 'react';

export class CustomProp extends React.Component{
    render(){
        return <Title text='MoeinDanA'/>
    }
}

const Title = (props) => <h1>Title: {props.text}</h1>

Title.propTypes = {
    text(props, propName, component){
        if(!(propName in props)){
            return new Error(`Missing ${propName}`)
        }
        if(props[propName].length < 6){
            return new Error(`${propName} is too short dude!`)
        }
    }
}