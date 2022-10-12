import {View, Text} from 'react-native';
import React from 'react';
import GetStarted from '../Common/GetStarted';
import {image} from '../../assets/images/index';

export default function MenopauseStep1() {
  return (
    <GetStarted
      icon={image.menopause}
      navigate="MenopauseStep2"
      title="Menopause"
      description="Menopause is a point in time 12 months after a woman's last period. The years leading up to that point, when women may have changes in their monthly cycles, hot flashes, or other symptoms, are called the menopausal transition or perimenopause. The menopausal transition most often begins between ages 45 and 55."
    />
  );
}
