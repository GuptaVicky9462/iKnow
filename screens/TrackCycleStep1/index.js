import {View, Text} from 'react-native';
import React from 'react';
import GetStarted from '../Common/GetStarted';
import {image} from '../../assets/images/index';

export default function TrackCycleStep1() {
  return (
    <GetStarted
      icon={image.periodCycle}
      navigate="TrackCycleStep2"
      title="Track Your Cycle"
      description="Keeping track of your period and monthly changes can aid family planning, pregnancy prevention, and general health."
    />
  );
}
