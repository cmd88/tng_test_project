import { CHANGE_MEASUREMENT } from '../../constants/actions';

export function changeMeasurment(measurement)  {
    return {
        type: CHANGE_MEASUREMENT,
        measurement: measurement
    };
};