import { combineReducers } from 'redux';
import ComparePanel from './ComparePanel/reducer';
import ControlPanel from './ControlPanel/reducer';
import MeasurementPanel from './MeasurementPanel/reducer';

export default combineReducers({
    ComparePanel,
    ControlPanel,
    MeasurementPanel
});