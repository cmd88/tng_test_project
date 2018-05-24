import {CHANGE_MEASUREMENT} from '../../constants/actions';

const initialState = {
    measurement: 'in'
};

export default function handle(state = initialState, action) {
    switch (action.type) {
        case CHANGE_MEASUREMENT:
            return {
                ...state,
                measurement: action.measurement
            };
        default:
            return state;
    }
}