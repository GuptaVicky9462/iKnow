import {ImageBackground, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {image} from '../../assets/images';
import CommonCalendar from '../Common/CommonCalendar';

export default function Calendar() {
  return (
    <ImageBackground
      style={{flex: 1, backgroundColor: 'rgb(246,246,246)'}}
      source={image.loginbg}>
      <ScrollView
        style={{padding: 16}}
        contentContainerStyle={{paddingBottom: 30}}>
        <CommonCalendar />
      </ScrollView>
    </ImageBackground>
  );
}

// import React, {useState} from 'react';
// import {Calendar} from 'react-native-big-calendar';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Modal,
//   Dimensions,
//   StyleSheet,
// } from 'react-native';
// import CustomInput from '../Common/CustomInput';
// import DateTimePickerModal from 'react-native-modal-datetime-picker';
// import Feather from 'react-native-vector-icons/Feather';
// import moment from 'moment';
// import {TextInput} from 'react-native-paper';
// const {width} = Dimensions.get('window');

// console.log('aaaaaaaa', new Date(2022, 9, 10, 10, 0));
// function Calandar() {
//   const [modalVisible, setModalVisible] = React.useState(false);
//   const [title, setTitle] = React.useState('Period');
//   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
//   const [start, setStart] = useState('');
//   const [end, setEnd] = useState('');
//   const [check, setCheck] = useState('start');
//   const [events, setEvents] = useState([
//     // {
//     //   title: 'Meeting',
//     //   start: new Date(2022, 9, 10),
//     // },
//   ]);

//   const showDatePicker = data => {
//     setCheck(data);
//     setDatePickerVisibility(true);
//   };

//   const hideDatePicker = () => {
//     setDatePickerVisibility(false);
//   };

//   const handleConfirm = date => {
//     console.log('date-=-=-=-=-=', date);
//     // console.log('date-=-=-=-=-=', JSON.stringify(date).replaceAll(`"`, ''));
//     // const thiss = JSON.stringify(date).replaceAll(`"`, '');
//     // console.log('date-=-=-=-=-=', typeof thiss);
//     if (check == 'start') {
//       setStart(date);
//     } else {
//       setEnd(date);
//     }
//     hideDatePicker();
//   };
//   const Continue = () => {
//     setModalVisible(!modalVisible);
//     console.log('ASDFASDFASDF', title, start, end);
//     setEvents([
//       ...events,
//       {
//         title: title,
//         start: start,
//         end: end,
//       },
//     ]);
//   };
//   console.log('new Date(2022, 9, 10)new Date(2022, 9, 10)', events);
//   return (
//     <View style={{flex: 1}}>
{
  /* <Calendar
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
      return <AntDesign size={35} name="rightcircleo" color="#D47794" />;
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
/> */
}
//       <Calendar
//         events={events}
//         // eventPropGetter={({event, start, end, isSelected}) => {
//         //   event, start, end, isSelected;
//         // }}
//         height={600}
//         onChangeDate={date => console.log(date)}
//         onPressEvent={event => console.log('event', event)}
//         onPressCell={event => {
//           console.log('cellonPressCell', event);
//           // setEvents([
//           //   ...events,
//           //   {
//           //     title: title,
//           //     start: start,
//           //     end: end,
//           //   },
//           // ]);
//         }}
//         // onPressDateHeader={event => console.log('onPressDateHeader', event)}
//         // renderEvent={event => {
//         //   return (
//         //     <TouchableOpacity {...event}>
//         //       <Text>{`My custom event: ${event.title} with a color: ${event.color}`}</Text>
//         //     </TouchableOpacity>
//         //   );
//         // }}
//         mode="month"
//         // renderHeader={() => {
//         //   return (
//         //     <View style={{backgroundColor: 'red', height: 100, width: width}}>
//         //       <Text>lkjiuhyt</Text>
//         //     </View>
//         //   );
//         // }}
//         headerContentStyle={{backgroundColor: 'green'}}
//         // dayHeaderStyle={{backgroundColor: 'red'}}
//         eventCellStyle={{
//           paddingVertical: 10,
//           backgroundColor: 'green',
//           marginTop: 10,
//         }}
//         // eventPropGetter={myEventsList => {
//         //   const backgroundColor = myEventsList.colorEvento
//         //     ? myEventsList.colorEvento
//         //     : 'green';
//         //   const color = myEventsList.color ? myEventsList.color : 'green';
//         //   return {style: {backgroundColor, color}};
//         // }}
//         // headerComponent={() => {
//         //   return (
//         //     <View style={{backgroundColor: 'green'}}>
//         //       <Text>oiukyutrtukil</Text>
//         //     </View>
//         //   );
//         // }}
//         // topHeaderComponent={()=>{
//         //   return(
//         //     <Text>adf</Text>
//         //   )
//         // }}
//         fullHeaderStyle={{backgroundColor: 'green', width: 100, height: 100}}
//         headerContainerStyle={{backgroundColor: 'lightgreen'}}
//         bodyContainerStyle={{width: width}}
//       />
//       <DateTimePickerModal
//         isVisible={isDatePickerVisible}
//         mode="date"
//         onConfirm={handleConfirm}
//         onCancel={hideDatePicker}
//       />
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           Alert.alert('Modal has been closed.');
//           setModalVisible(!modalVisible);
//         }}>
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             <View style={{alignSelf: 'center', width: '95%'}}>
//               <TextInput
//                 style={{
//                   backgroundColor: 'white',
//                   fontSize: 16,
//                   color: 'black',
//                   marginVertical: 10,
//                   marginTop: 10,
//                 }}
//                 mode="outlined"
//                 outlineColor="#ced4da"
//                 activeOutlineColor="#ced4da"
//                 value={title}
//                 onChangeText={text => {
//                   setTitle(text);
//                 }}
//               />
//               <View
//                 style={{
//                   backgroundColor: '#ec187c',
//                   width: 'auto',
//                   maxWidth: '100%',
//                   position: 'absolute',
//                   padding: 6,
//                   left: 20,
//                 }}>
//                 <Text style={{color: 'white'}}>Ttile</Text>
//               </View>
//             </View>
//             <View
//               style={{
//                 width: '95%',
//                 alignSelf: 'center',
//               }}>
//               <TextInput
//                 style={{
//                   backgroundColor: 'white',
//                   fontSize: 16,
//                   color: 'black',
//                   marginVertical: 10,
//                   marginTop: 10,
//                 }}
//                 editable={false}
//                 mode="outlined"
//                 outlineColor="#ced4da"
//                 activeOutlineColor="#ced4da"
//                 value={start}
//                 right={
//                   <TextInput.Icon
//                     name={() => (
//                       <Feather size={16} name="calendar" color="black" />
//                     )}
//                     onPress={() => {
//                       showDatePicker('start');
//                     }}
//                   />
//                 }
//               />

//               <View
//                 style={{
//                   backgroundColor: '#ec187c',
//                   width: 'auto',
//                   maxWidth: '100%',
//                   position: 'absolute',
//                   padding: 6,
//                   left: 20,
//                 }}>
//                 <Text style={{color: 'white'}}>Start Date</Text>
//               </View>
//             </View>
//             <View
//               style={{
//                 width: '95%',
//                 alignSelf: 'center',
//               }}>
//               <TextInput
//                 style={{
//                   backgroundColor: 'white',
//                   fontSize: 16,
//                   color: 'black',
//                   marginVertical: 10,
//                   marginTop: 10,
//                 }}
//                 editable={false}
//                 mode="outlined"
//                 outlineColor="#ced4da"
//                 activeOutlineColor="#ced4da"
//                 value={end}
//                 right={
//                   <TextInput.Icon
//                     name={() => (
//                       <Feather size={16} name="calendar" color="black" />
//                     )}
//                     onPress={() => {
//                       showDatePicker('end');
//                     }}
//                   />
//                 }
//               />

//               <View
//                 style={{
//                   backgroundColor: '#ec187c',
//                   width: 'auto',
//                   maxWidth: '100%',
//                   position: 'absolute',
//                   padding: 6,
//                   left: 20,
//                 }}>
//                 <Text style={{color: 'white'}}>End Date</Text>
//               </View>
//             </View>
//             <TouchableOpacity
//               style={[styles.button, styles.buttonClose]}
//               onPress={() => Continue()}>
//               <Text style={styles.textStyle}>Continue</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//       <TouchableOpacity
//         style={[styles.button, styles.buttonOpen]}
//         onPress={() => setModalVisible(true)}>
//         <Text style={styles.textStyle}>Add Event</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }
// export default Calandar;

// const styles = StyleSheet.create({
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalView: {
//     margin: 20,
//     width: '80%',
//     backgroundColor: 'white',
//     borderRadius: 20,
//     paddingVertical: 30,
//     paddingHorizontal: 15,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//   },
//   buttonOpen: {
//     backgroundColor: '#F194FF',
//   },
//   buttonClose: {
//     backgroundColor: '#2196F3',
//   },
//   textStyle: {
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: 'center',
//   },
// });
