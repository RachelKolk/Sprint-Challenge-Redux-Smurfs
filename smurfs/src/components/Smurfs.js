import React from 'react';
import {connect} from 'react-redux';

import {getSmurfs} from '../actions';

class Smurfs extends React.Component {

    state= {
        smurfs: []
    };

    componentDidMount() {
        this.props.getSmurfs();
    }

    render() {
        return (
            <div className="SmurfList">
                {this.props.smurfs.map((smurf) => (
                    <div className="IndvSmurf" key={smurf.id}>
                        <h1>{smurf.name}</h1>
                        <h1>{smurf.age}</h1>
                        <h1>{smurf.height}</h1>
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
    {getSmurfs}
)(Smurfs);