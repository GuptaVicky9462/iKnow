import {View, Text} from 'react-native';
import React from 'react';
import TrackCycle from '../Common/TrackCycle';
import {image} from '../../assets/images';
const data = [
  {
    name: 'Positive',
    time: '12-Sep-2022',
  },
  {
    name: 'Negative',
    time: '11-Aug-2022',
  },
  {
    name: 'Positive',
    time: '10-Jun-2022',
  },
  {
    name: 'Negative',
    time: '08-May-2022',
  },
];
export default function OvulationDashbord(props) {
  return (
    <TrackCycle
      data={data}
      icon={image.ovulation}
      title="OVULATION Reports"
      route="OvulationConsolidatedResult"
      props={props}
    />
  );
}
