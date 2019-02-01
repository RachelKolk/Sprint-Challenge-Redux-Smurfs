import React from 'react';

function SmurfForm(props) {

    const handleClick = e => {
        e.preventDefault();
        props.addNewSmurf();
    }

    return (
        <div>
            <form>

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

                <button onClick={handleClick}>Add Smurf to Village</button>
            </form>
        </div>
    );
}

export default SmurfForm;