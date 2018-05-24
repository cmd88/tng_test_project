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
                <div onClick={this.handleMeasurementChange.bind(null, 'in')}
                     className={this.props.measurement === 'in' ? 'measurement_active' : ''}>IN</div>
                <div onClick={this.handleMeasurementChange.bind(null, 'cm')}
                     className={this.props.measurement === 'cm' ? 'measurement_active' : ''}>CM</div>
{/*                    <label>
                        <input type="radio" name="measurement" value="in" checked={this.props.measurement === 'in'}
                               onChange={this.handleMeasurementChange}/>
                        <span>IN</span>
                    </label>
                    <label>
                        <input type="radio" name="measurement" value="cm" checked={this.props.measurement === 'cm'}
                               onChange={this.handleMeasurementChange}/>
                        <span>CM</span>
                    </label>*/}
            </div>
        );
    }

    handleMeasurementChange = measurement => {
        this.props.setMeasurement(measurement);
    }
}

let mapStateToProps = (state) => {
    return {
        measurement: state.MeasurementPanel.measurement
    };
};

let mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(MeasurementPanel);