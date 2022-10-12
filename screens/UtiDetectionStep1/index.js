import {View, Text} from 'react-native';
import React from 'react';
import GetStarted from '../Common/GetStarted';
import {image} from '../../assets/images/index';

export default function UtiDetectionStep1() {
  return (
    <GetStarted
      icon={image.UTI}
      navigate="UtiDetectionStep2"
      title="Start Your UTI Detection"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    />
  );
}
