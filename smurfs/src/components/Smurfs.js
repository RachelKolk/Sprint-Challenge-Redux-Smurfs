import React from 'react';
import {connect} from 'react-redux';

import {getSmurfs, deleteSmurf} from '../actions';

import './smurfs.css';

class Smurfs extends React.Component {

    state= {
        smurfs: []
    };

    componentDidMount() {
        this.props.getSmurfs();
    }

    deleteSmurf = (e, id) => {
        e.preventDefault();
        console.log(id);
        this.props.deleteSmurf(this.props.id);
    }

    render() {
        return (
            <div className="SmurfList">
                {this.props.smurfs.map((smurf) => (
                    <div className="IndvSmurf" key={this.props.smurfs.id}>
                        <h4 className="IndvSmurfName">{smurf.name}</h4>
                        <p className="IndvSmurfAge">Age: {smurf.age}</p>
                        <p className="IndvSmurfHeight">Height: {smurf.height}</p>
                        <button className="deleteButton" onClick={this.deleteSmurf}>Captured by Gargamel</button>
                        
                    </div>
                
                ))}
            </div>
        )
    };

}

const mapStateToProps = state => ({
    smurfs: state.smurfs
});

export default connect(
    mapStateToProps,
    {getSmurfs, deleteSmurf}
)(Smurfs);