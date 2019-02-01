import React from 'react';
import {connect} from 'react-redux';

import {addSmurf} from '../actions';

import SmurfForm from './SmurfForm';

class AddNewSmurf extends React.Component {
    state= {
        smurf: {
            id: '',
            name: '',
            age: '',
            height: ''
        }
    };

    changeHandler = e => {
        this.setState({
            smurf: {
                ...this.state.smurf,
                [e.target.name]: e.target.value
            }
        });
    };

    addNewSmurf = () => {
        this.props.addSmurf(this.state.smurf);
    };

    render() {
        return (
            <div>
                <SmurfForm 
                    addNewSmurf={this.addNewSmurf}                
                    changeHandler={this.changeHandler}
                    smurf={this.state.smurf}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({});

export default connect(
    mapStateToProps,
    {addSmurf}
)(AddNewSmurf);