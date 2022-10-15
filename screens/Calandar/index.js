import {View, Text, Image, ImageBackground, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {image} from '../../assets/images';
import {Calendar} from 'react-native-calendars';
import moment from 'moment';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useEffect} from 'react/cjs/react.production.min';
import Feather from 'react-native-vector-icons/Feather';

export default function Calandar() {
  // console.log(
  //   'moment(new Date()).for',
  //   moment(new Date()).format('yyyy-MM-DD'),
  // );
  const [selectedDay, setSlectedDay] = useState([]);
  // console.log('vsetSlectedDay', selectedDay);
  const coloredData = () => {
    console.log('selectedDay', selectedDay);
    // if (selectedDay.length > 1) {
    let a = {
      // [selectedDay[0]]: {startingDay: true, color: 'green'},
      // [selectedDay[selectedDay.length - 1]]: {
      //   endingDay: true,
      //   color: 'green',
      // },
    };
    selectedDay.map((el, index) => {
      // if (index != 0 && index != selectedDay.length - 1) {
      a[el] = {color: 'green'};
      // }
    });
    console.log('a', a);
    return a;
    // } else {
    //   return {[selectedDay[0]]: {color: 'green'}};
    // }
  };

  return (
    <ImageBackground
      style={{flex: 1, backgroundColor: 'rgb(246,246,246)'}}
      source={image.loginbg}>
      <ScrollView
        style={{padding: 16}}
        contentContainerStyle={{paddingBottom: 30}}>
        {/* <Image
          resizeMode="contain"
          style={{
            width: '100%',
            height: 600,
            borderRadius: 10,
            marginVertical: 20,
          }}
          source={image.trackcycleresultjpg}
        /> */}

        <Calendar
          markingType={'period'}
          markedDates={coloredData()}
          // {{
          //   ...selectedDay.map(item => {
          //     return {[item]: {color: 'green'}};
          //   }),
          // }}
          // selectedDay.map((item=>{
          //   return(
          //     {item:{color:'green'}}
          //   )
          // }))
          //   {
          //   '2012-10-15': {textColor: 'green'},
          //   '2022-10-15': {startingDay: true, color: 'green'},
          //   '2022-10-16': {
          //     selected: true,
          //     // endingDay: true,
          //     color: 'green',
          //     textColor: 'gray',
          //   },
          //   '2022-10-17': {
          //     disabled: true,
          //     // startingDay: true,
          //     color: 'green',
          //     endingDay: true,
          //   },
          // }
          // Initially visible month. Default = now
          ///////////////////////////
          style={{paddingBottom: 10, borderRadius: 10}}
          theme={{
            'stylesheet.calendar.header': {
              header: {
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              },
              monthText: {
                fontSize: 22,
                fontWeight: 'bold',
                color: '#D47794',
                textTransform: 'uppercase',
                paddingHorizontal: 5,
              },
              week: {
                marginTop: 7,
                flexDirection: 'row',
                justifyContent: 'space-around',
              },
              dayHeader: {
                marginTop: 5,
                marginBottom: 7,
                fontSize: 16,
                fontWeight: 'bold',
                color: 'black',
              },
            },
            'stylesheet.calendar.main': {
              dayContainer: {
                borderColor: '#D1D3D4',
                borderWidth: 0.5,
                flex: 1,
                paddingBottom: 100,
                height: 100,
                width: 100,
              },
              emptyDayContainer: {
                borderColor: '#D1D3D4',
                borderWidth: 0.5,
                height: 70,
              },
              week: {
                flexDirection: 'row',
                justifyContent: 'space-around',
              },
            },
          }}
          // initialDate={moment(new Date()).format('YYYY-MM-DD')}
          onDayPress={day => {
            console.log('selected day', day);
            if (selectedDay.includes(day.dateString)) {
              let a = selectedDay;
              let aa = selectedDay.sort((a, b) => a - b);
              const aaa = aa.slice(aa.indexOf(day.dateString));
              console.log('aaaaaaaaaaaa', aaa);
              let filtered = aa.filter((el, inde) => {
                // console.log('bhhbhbh', a.indexOf(el));
                return el != day.dateString;
              });
              setSlectedDay(filtered);
            } else {
              setSlectedDay([...selectedDay, day.dateString]);
            }
            // setSlectedDay(prev => ({name: prev.name + `,${day.dateString}`}));
          }}
          // Handler which gets executed on day long press. Default = undefined
          onDayLongPress={day => {
            console.log('selected day', day);
          }}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={'MMMM yyyy'}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={month => {
            console.log('month changed', month);
          }}
          // Hide month navigation arrows. Default = false
          // hideArrows={true}
          // Replace default arrows with custom ones (direction can be 'left' or 'right')
          renderArrow={direction => {
            if (direction == 'left') {
              return <AntDesign size={35} name="leftcircleo" color="#D47794" />;
            } else {
              return (
                <AntDesign size={35} name="rightcircleo" color="#D47794" />
              );
            }
          }}
          // Do not show days of other months in month page. Default = false
          // hideExtraDays={true}
          // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          // disableMonthChange={true}
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
          // firstDay={1}
          // Hide day names. Default = false
          // hideDayNames={true}
          // Show week numbers to the left. Default = false
          // showWeekNumbers={true}
          // Handler which gets executed when press arrow icon left. It receive a callback can go back month
          onPressArrowLeft={subtractMonth => subtractMonth()}
          // Handler which gets executed when press arrow icon right. It receive a callback can go next month
          onPressArrowRight={addMonth => addMonth()}
          // Disable left arrow. Default = false
          // disableArrowLeft={true}
          // Disable right arrow. Default = false
          // disableArrowRight={true}
          // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
          // disableAllTouchEventsForDisabledDays={true}
          // Replace default month and year title with custom one. the function receive a date as parameter
          // renderHeader={date => {
          //   // console.log('renderHeader', moment(date).format('MM YYYY'));
          //   return (
          //     <Text style={{color: '#222222', fontWeight: '600'}}>
          //       {moment(date).subtract(1, 'month').format('MMMM')}
          //       {moment(date).format('YYYY')}
          //     </Text>
          //   );
          // }}
          // Enable the option to swipe between months. Default = false
          enableSwipeMonths={true}
        />
      </ScrollView>
    </ImageBackground>
  );
}

// <Calendar
// markingType={'period'}
// markedDates={{
//   '2012-10-15': {textColor: 'green'},
//   '2022-10-15': {startingDay: true, color: 'green'},
//   '2022-10-16': {
//     selected: true,
//     // endingDay: true,
//     color: 'green',
//     textColor: 'gray',
//   },
//   '2022-10-17': {
//     disabled: true,
//     // startingDay: true,
//     color: 'green',
//     endingDay: true,
//   },
// }}
// style={{paddingBottom: 10, borderRadius: 10}}
// theme={{
//   'stylesheet.calendar.header': {
//     header: {
//       flexDirection: 'row',
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     monthText: {
//       fontSize: 22,
//       fontWeight: 'bold',
//       color: '#D47794',
//       textTransform: 'uppercase',
//       paddingHorizontal: 5,
//     },
//     week: {
//       marginTop: 7,
//       flexDirection: 'row',
//       justifyContent: 'space-around',
//     },
//     dayHeader: {
//       marginTop: 5,
//       marginBottom: 7,
//       fontSize: 16,
//       fontWeight: 'bold',
//       color: 'black',
//     },
//   },
//   'stylesheet.calendar.main': {
//     dayContainer: {
//       borderColor: '#D1D3D4',
//       borderWidth: 0.5,
//       flex: 1,
//       paddingBottom: 100,
//       height: 100,
//       width: 100,
//     },
//     emptyDayContainer: {
//       borderColor: '#D1D3D4',
//       borderWidth: 0.5,
//       height: 70,
//     },
//     week: {
//       flexDirection: 'row',
//       justifyContent: 'space-around',
//     },
//   },
// }}
// // Initially visible month. Default = now
// onDayPress={day => {
//   console.log('selected day', day);
// }}
// // Handler which gets executed on day long press. Default = undefined
// onDayLongPress={day => {
//   console.log('selected day', day);
// }}
// // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
// monthFormat={'MMMM yyyy'}
// // Handler which gets executed when visible month changes in calendar. Default = undefined
// onMonthChange={month => {
//   console.log('month changed', month);
// }}
// // Hide month navigation arrows. Default = false
// // hideArrows={true}
// // Replace default arrows with custom ones (direction can be 'left' or 'right')
// renderArrow={direction => {
//   if (direction == 'left') {
//     return <AntDesign size={35} name="leftcircleo" color="#D47794" />;
//   } else {
//     return (
//       <AntDesign size={35} name="rightcircleo" color="#D47794" />
//     );
//   }
// }}
// // Do not show days of other months in month page. Default = false
// // hideExtraDays={true}
// // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
// // day from another month that is visible in calendar page. Default = false
// // disableMonthChange={true}
// // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
// // firstDay={1}
// // Hide day names. Default = false
// // hideDayNames={true}
// // Show week numbers to the left. Default = false
// // showWeekNumbers={true}
// // Handler which gets executed when press arrow icon left. It receive a callback can go back month
// onPressArrowLeft={subtractMonth => subtractMonth()}
// // Handler which gets executed when press arrow icon right. It receive a callback can go next month
// onPressArrowRight={addMonth => addMonth()}
// // Disable left arrow. Default = false
// // disableArrowLeft={true}
// // Disable right arrow. Default = false
// // disableArrowRight={true}
// // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
// // disableAllTouchEventsForDisabledDays={true}
// // Replace default month and year title with custom one. the function receive a date as parameter
// // renderHeader={date => {
// //   console.log('date', date);
// //   return (
// //     <Text style={{color: '#222222', fontWeight: '600'}}>
// //       {moment(date).subtract(1, 'month').format('MMMM')}
// //       {moment(date).format('YYYY')}
// //     </Text>
// //   );
// //   /*Return JSX*/
// // }}
// // Enable the option to swipe between months. Default = false
// enableSwipeMonths={true}
// />
