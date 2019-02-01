import React from 'react';

import './smurfform.css';

function SmurfForm(props) {

    const handleClick = e => {
        e.preventDefault();
        props.addNewSmurf();
    }

    return (
        <div>
            <form className="Form">

                <input className="SmurfName"
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={props.changeHandler}
                    value={props.smurf.name}
                />

                <input className="SmurfAge" 
                    type="number"
                    name="age"
                    placeholder="Age"
                    onChange={props.changeHandler}
                    value={props.smurf.age}
                />

                <input className="SmurfHeight"
                    type="text"
                    name="height"
                    placeholder="Height"
                    onChange={props.changeHandler}
                    value={props.smurf.height}
                />

                <p className="Button" onClick={handleClick}>Add Smurf to Village</p>
            </form>
        </div>
    );
}

export default SmurfForm;