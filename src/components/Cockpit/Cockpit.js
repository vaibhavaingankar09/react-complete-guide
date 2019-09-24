import React, { useEffect} from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {

    useEffect(()=>{
        console.log('[Cockpit.js] useEffedct');
        setTimeout(() => {
            alert('saved data to cloud');
        }, 1000);
        return () =>{
            console.log('[Cockpit.js] cleanup work in useEffect');
        }
    },[]);

    let btnClass = '';
    if(props.showPersons){
        btnClass = classes.Red;
    }
    
    const assignedClasses = [];

    if(props.personsLength <=2){
      assignedClasses.push(classes.red);
    }
    if(props.personLength<=1){
      assignedClasses.push(classes.bold);
    }
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working </p>
            <button 
            className={btnClass}
            onClick={props.clicked}>
                Toggle Persons
            </button>
        </div>
    )
}

export default React.memo(cockpit);