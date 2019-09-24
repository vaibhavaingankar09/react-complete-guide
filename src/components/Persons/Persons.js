import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component{
    // static getDerivedStateFromProps(props,state){
    //     console.log('[Persons.js] getDerivedStateFromProps',props);
    //     return state;
    // }

    // componentWillReceiveProps( props){
    //     console.log('[Persons.js] componentWillRecieveProps', props);
    // }

    shouldComponentUpdate(nextProps, nextState){
        console.log('[Persons.js] shouldComponentUpdate');
        if(nextProps.persons !== this.props.persons){
            return true;
        } else {
            return false;
        }
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('[Persons.js getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate(){
        console.log('[Persons.js] componentDidUpdate'); 
    }

    componentWillUnmount(){
        console.log('[Persons.js] componentWillUnmount');
    }

    render(){
        console.log('[Persons.js] render')
        return this.props.persons.map((person, index) =>{
            return <Person
            key={person.id} 
            name={person.name} 
            age={person.age}
            changed={(event)=>this.props.changed(event, person.id)}
            click={()=>this.props.clicked(index)} />
        });
    }
}
export default Persons;