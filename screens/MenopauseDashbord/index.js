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
    time: '12-Sep-2022',
  },
  {
    name: 'Positive',
    time: '12-Sep-2022',
  },
  {
    name: 'Negative',
    time: '12-Sep-2022',
  },
];
export default function MenopauseDashbord(props) {
  return (
    <TrackCycle
      data={data}
      icon={image.menopause}
      title="MENOPAUSE REPORT"
      route="MenopauseResult"
      props={props}
    />
  );
}