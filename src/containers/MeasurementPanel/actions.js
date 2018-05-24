import {CHANGE_MEASUREMENT} from '../../constants/actions';

const changeMeasurement = measurement => {
    return {
        type: CHANGE_MEASUREMENT,
        measurement: measurement
    };
}

export const setMeasurement = measurement => {
    localStorage.setItem('measurement', measurement);

    return changeMeasurement(measurement);
};