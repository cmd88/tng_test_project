import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './measurementPanel.css';
import * as actionCreators from './actions';

export class MeasurementPanel extends Component {
    constructor(props) {
        super(props);
        //this.handleMeasurementChange = this.handleMeasurementChange.bind(this);
    }

    render() {
        return (
            <div className="measurement-panel">
                    <label>
                        <input type="radio" name="measurement" value="in" checked={this.props.measurement === 'in'}
                               onChange={this.handleMeasurementChange}/>
                        <span>IN</span>
                    </label>
                    <label>
                        <input type="radio" name="measurement" value="cm" checked={this.props.measurement === 'cm'}
                               onChange={this.handleMeasurementChange}/>
                        <span>CM</span>
                    </label>
            </div>
        );
    }

    handleMeasurementChange = (changeEvent) => {
        this.props.changeMeasurment(changeEvent.target.value);
    }
}

let mapStateToProps = (state) => {
    return {
        measurement: state.MeasurementPanel.measurement
    };
};

let mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(MeasurementPanel);