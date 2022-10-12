import {View, Text, useState} from 'react-native';
import React from 'react';
import Question from './Question';
import {image} from '../../assets/images';
import {useNavigation} from '@react-navigation/native';

const questions = [
  {
    qtext: 'Have your experienced Frequent urge to urinate?',
    qdescription:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    qtext1: 'Duis aute irure dolor in voluptate velit esse cillum',
    qdescription1:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  },
  {
    qtext:
      'Have your experienced Less output of urine or feeling of having incomplete urination?',
    qdescription:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    qtext1: 'Duis aute irure dolor in voluptate velit esse cillum',
    qdescription1:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    qtext:
      'Have your experienced Pain or burning sensation while passing urine?',
    qdescription:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    qtext1: 'Duis aute irure dolor in voluptate velit esse cillum',
    qdescription1:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    qtext: 'Have your experienced Milkiness seen in urine colour?',
    qdescription:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    qtext1: 'Duis aute irure dolor in voluptate velit esse cillum',
    qdescription1:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    qtext: 'Have your experienced Blood seen in urine?',
    qdescription:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    qtext1: 'Duis aute irure dolor in voluptate velit esse cillum',
    qdescription1:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

export default function UtiDetectionStep3() {
  const navigation = useNavigation();
  const [activeq, setActiveq] = React.useState(0);
  const handleyes = () => {
    if (questions.length - 1 > activeq) {
      setActiveq(prev => {
        return prev + 1;
      });
    } else {
      navigation.navigate('UtiDetectionStep4');
    }
  };

  const handleback = () => {
    console.log('questions.length', questions.length - 1);
    console.log('activeq', activeq);
    if (questions.length > activeq && activeq > 0) {
      setActiveq(prev => {
        return prev - 1;
      });
    } else {
      navigation.goBack();
    }
  };
  return (
    <>
      <Question
        handleyes={handleyes}
        questions={questions[activeq]}
        handleback={handleback}
      />
    </>
  );
}
