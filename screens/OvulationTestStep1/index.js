import {View, Text} from 'react-native';
import React from 'react';
import GetStarted from '../Common/GetStarted';
import {image} from '../../assets/images/index';

export default function OvulationTestStep1() {
  return (
    <GetStarted
      icon={image.ovulation}
      navigate="OvulationTestStep2"
      title="Start Your Ovulation Testing"
      description="Start your exciting and beautiful journey of parenthood with the support of i-know ovulation testing strip. Experience the joy of finding out your most fertile days to get pregnant with i-know."
    />
  );
}
