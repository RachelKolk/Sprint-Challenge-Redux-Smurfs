import React from 'react';
import {connect} from 'react-redux';

import {getSmurfs, deleteSmurf} from '../actions';

class Smurfs extends React.Component {

    state= {
        smurfs: []
    };

    componentDidMount() {
        this.props.getSmurfs();
    }

    deleteSmurf = (e, id) => {
        e.preventDefault();
        this.props.deleteSmurf(id);
    }

    render() {
        return (
            <div className="SmurfList">
                {this.props.smurfs.map((smurf) => (
                    <div className="IndvSmurf" key={this.props.smurfs.id}>
                        <h1>{smurf.name}</h1>
                        <h1>{smurf.age}</h1>
                        <h1>{smurf.height}</h1>
                        <button onClick={deleteSmurf}>Excommunicate</button>
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