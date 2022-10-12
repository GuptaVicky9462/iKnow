import {View, Text, useState} from 'react-native';
import React from 'react';
import Question from '../Common/Question';
import {image} from '../../assets/images';
const questions = [
  {
    qtext: 'Have your experienced Irrregular cycle?',
    qdescription: 'Delayed cycle by more than 7 days , early cycles',
    qtext1: 'Quis eleifend quam adipiscing vitae proin?',
    qdescription1:
      'Dignissim cras tincidunt lobortis feugiat vivamus. Id neque aliquam vestibulum morbi blandit cursus risus. Et malesuada fames ac turpis egestas integer eget aliquet.',
    qimage: image.Irrregularcycle,
  },
  {
    qtext: 'Have your experienced Heavy flow?',
    qdescription: 'Continuous flow for more than 5 days',
    qtext1: 'Quis eleifend quam adipiscing vitae proin?',
    qdescription1:
      'Dignissim cras tincidunt lobortis feugiat vivamus. Id neque aliquam vestibulum morbi blandit cursus risus. Et malesuada fames ac turpis egestas integer eget aliquet.',
    qimage: image.Irrregularcycle,
  },
  {
    qtext: 'Have your experienced Heavy flow?',
    qdescription: 'Continuous flow for more than 5 days',
    qtext1: 'Quis eleifend quam adipiscing vitae proin?',
    qdescription1:
      'Dignissim cras tincidunt lobortis feugiat vivamus. Id neque aliquam vestibulum morbi blandit cursus risus. Et malesuada fames ac turpis egestas integer eget aliquet.',

    qimage: image.heavyflow,
  },
  {
    qtext: 'Have your experienced Hot Flushes?',
    qdescription: 'Feeling hot in areas like face, neck etc',
    qtext1: 'Quis eleifend quam adipiscing vitae proin?',
    qdescription1:
      'Dignissim cras tincidunt lobortis feugiat vivamus. Id neque aliquam vestibulum morbi blandit cursus risus. Et malesuada fames ac turpis egestas integer eget aliquet.',

    qimage: image.hotflush,
  },
  {
    qtext: 'Have your experienced Night Sweat?',
    qdescription: 'Feeling hot in areas like face, neck etc',
    qtext1: 'Quis eleifend quam adipiscing vitae proin?',
    qdescription1:
      'Dignissim cras tincidunt lobortis feugiat vivamus. Id neque aliquam vestibulum morbi blandit cursus risus. Et malesuada fames ac turpis egestas integer eget aliquet.',

    qimage: image.hotflush,
  },
  {
    qtext: 'Have your experienced Mood Swings?',
    qdescription: 'A sudden or intense change in emotional state.',
    qtext1: 'Quis eleifend quam adipiscing vitae proin?',
    qdescription1:
      'Dignissim cras tincidunt lobortis feugiat vivamus. Id neque aliquam vestibulum morbi blandit cursus risus. Et malesuada fames ac turpis egestas integer eget aliquet.',

    qimage: image.moodswings,
  },
  {
    qtext: 'Are you taking any hormonal treatments for heavy flow?',
    qdescription: 'Excepteur sint occaecat cupidatat non proident.',
    qtext1: 'Quis eleifend quam adipiscing vitae proin?',
    qdescription1:
      'Dignissim cras tincidunt lobortis feugiat vivamus. Id neque aliquam vestibulum morbi blandit cursus risus. Et malesuada fames ac turpis egestas integer eget aliquet.',

    qimage: image.harmones,
  },
];

export default function Assesment() {
  const [activeq, setActiveq] = React.useState(0);
  const handleyes = () => {
    if (questions.length - 1 > activeq) {
      setActiveq(prev => {
        return prev + 1;
      });
    }
  };

  const handleback = () => {
    console.log('questions.length', questions.length - 1);
    console.log('activeq', activeq);
    if (questions.length > activeq && activeq > 0) {
      setActiveq(prev => {
        return prev - 1;
      });
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
