import React from 'react';
import ControlPanel from './ControlPanel/ControlPanel';
import ComparePanel from './ComparePanel/ComparePanel';
import MeasurementPanel from './MeasurementPanel/MeasurementPanel';
import './root.css';

export const Root = () => (
    <div className="tangiblee-app">
        <ComparePanel />
        <MeasurementPanel />
        <ControlPanel />
    </div>
);
