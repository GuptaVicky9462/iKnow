import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 10,
    marginVertical: 20,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: 'pink',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  headerInner: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
    paddingVertical: 5,
    marginHorizontal: 30,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '900',
    paddingHorizontal: 5,
    color: '#D47794',
  },
  tableRow: {
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  tableHeaderRow: {
    flexDirection: 'row',
    paddingHorizontal: 17,
    paddingVertical: 10,
  },
  tableHeaderText: {
    fontSize: 18,
    color: '#000000',
    fontWeight: 'bold',
  },
  dayCellInactive: {
    backgroundColor: '#ebebeb',
    borderWidth: 0.3,
    borderColor: 'lightgrey',
    height: 80,
    width: '14.2%',
  },
  dayCellTextInactive: {
    alignSelf: 'flex-end',
    fontSize: 15,
    fontWeight: 'bold',
    padding: 5,
    color: 'grey',
  },
  dayCellActive: {
    backgroundColor: 'white',
    borderWidth: 0.3,
    borderColor: 'lightgrey',
    height: 80,
    width: '14.2%',
  },
  dayCellTextActive: {
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    padding: 5,
    color: 'black',
  },
});
