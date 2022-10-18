import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {DataTable} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {styles} from './style';

export default function CommonCalendar() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerInner}>
          <AntDesign size={35} name="leftcircleo" color="#D47794" />
          <Text style={styles.headerText}>SEPTEMBER 2022</Text>
          <AntDesign size={35} name="rightcircleo" color="#D47794" />
        </View>
      </View>
      <DataTable>
        <View style={styles.tableHeaderRow}>
          <DataTable.Title
            textStyle={styles.tableHeaderText}
            style={{justifyContent: 'center'}}>
            SU
          </DataTable.Title>
          <DataTable.Title
            textStyle={styles.tableHeaderText}
            style={{justifyContent: 'center'}}>
            M
          </DataTable.Title>
          <DataTable.Title
            textStyle={styles.tableHeaderText}
            style={{justifyContent: 'center'}}>
            T
          </DataTable.Title>
          <DataTable.Title
            textStyle={styles.tableHeaderText}
            style={{justifyContent: 'center'}}>
            W
          </DataTable.Title>
          <DataTable.Title
            textStyle={styles.tableHeaderText}
            style={{justifyContent: 'center'}}>
            TH
          </DataTable.Title>
          <DataTable.Title
            textStyle={styles.tableHeaderText}
            style={{justifyContent: 'center'}}>
            F
          </DataTable.Title>
          <DataTable.Title
            textStyle={styles.tableHeaderText}
            style={{justifyContent: 'center'}}>
            S
          </DataTable.Title>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.dayCellInactive}>
            <Text style={styles.dayCellTextInactive}>28</Text>
          </View>
          <View style={styles.dayCellInactive}>
            <Text style={styles.dayCellTextInactive}>29</Text>
            <View
              style={{
                backgroundColor: '#fcd8e2',
                paddingVertical: 5,
                paddingHorizontal: 1,
                marginVertical: 5,
              }}>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#d80a44',
                }}>
                Period
              </Text>
            </View>
          </View>
          <View style={styles.dayCellInactive}>
            <Text style={styles.dayCellTextInactive}>30</Text>
            <View
              style={{
                backgroundColor: '#fcd8e2',
                paddingVertical: 5,
                paddingHorizontal: 1,
                marginVertical: 5,
              }}>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#d80a44',
                }}></Text>
            </View>
          </View>
          <View style={styles.dayCellInactive}>
            <Text style={styles.dayCellTextInactive}>31</Text>
            <View
              style={{
                backgroundColor: '#fcd8e2',
                paddingVertical: 5,
                paddingHorizontal: 1,
                marginVertical: 5,
              }}>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#d80a44',
                }}></Text>
            </View>
          </View>
          <View style={styles.dayCellActive}>
            <Text style={styles.dayCellTextActive}>1</Text>
            <View
              style={{
                backgroundColor: '#fcd8e2',
                paddingVertical: 5,
                paddingHorizontal: 1,
                marginVertical: 5,
              }}>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#d80a44',
                }}></Text>
            </View>
          </View>
          <View style={styles.dayCellActive}>
            <Text style={styles.dayCellTextActive}>2</Text>
            <View
              style={{
                backgroundColor: '#fcd8e2',
                paddingVertical: 5,
                paddingHorizontal: 1,
                marginVertical: 5,
              }}>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#d80a44',
                }}></Text>
            </View>
          </View>
          <View style={styles.dayCellActive}>
            <Text style={styles.dayCellTextActive}>3</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.dayCellActive}>
            <Text style={styles.dayCellTextActive}>4</Text>
          </View>
          <View style={styles.dayCellActive}>
            <Text style={styles.dayCellTextActive}>5</Text>
          </View>
          <View style={styles.dayCellActive}>
            <Text style={styles.dayCellTextActive}>6</Text>
          </View>
          <View style={styles.dayCellActive}>
            <Text style={styles.dayCellTextActive}>7</Text>
          </View>
          <View style={styles.dayCellActive}>
            <Text style={styles.dayCellTextActive}>8</Text>
          </View>
          <View style={styles.dayCellActive}>
            <Text style={styles.dayCellTextActive}>9</Text>
            <View
              style={{
                backgroundColor: '#fff0e9',
                paddingVertical: 5,
                paddingHorizontal: 1,
                marginVertical: 5,
              }}>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#f66d18',
                }}>
                Fertile
              </Text>
            </View>
          </View>
          <View style={styles.dayCellActive}>
            <Text style={styles.dayCellTextActive}>10</Text>
            <View
              style={{
                backgroundColor: '#fff0e9',
                paddingVertical: 5,
                paddingHorizontal: 1,
                marginVertical: 5,
              }}>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#cd943d',
                }}></Text>
            </View>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.dayCellActive}>
            <Text style={styles.dayCellTextActive}>11</Text>
            <View
              style={{
                backgroundColor: '#fff0e9',
                paddingVertical: 5,
                paddingHorizontal: 1,
                marginVertical: 5,
              }}>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#f66d18',
                }}></Text>
            </View>
          </View>
          <View style={styles.dayCellActive}>
            <Text style={styles.dayCellTextActive}>12</Text>
            <View
              style={{
                backgroundColor: '#fff0e9',
                paddingVertical: 5,
                paddingHorizontal: 1,
                marginVertical: 5,
              }}>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#f66d18',
                }}></Text>
            </View>
          </View>
          <View style={styles.dayCellActive}>
            <Text style={styles.dayCellTextActive}>13</Text>
            <View
              style={{
                backgroundColor: '#fff0e9',
                paddingVertical: 5,
                paddingHorizontal: 1,
                marginVertical: 5,
              }}>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#f66d18',
                }}>
                Ovulation
              </Text>
            </View>
          </View>
          <View style={styles.dayCellActive}>
            <Text style={styles.dayCellTextActive}>14</Text>
          </View>
          <View style={styles.dayCellActive}>
            <Text style={styles.dayCellTextActive}>15</Text>
          </View>
          <View style={styles.dayCellActive}>
            <Text style={styles.dayCellTextActive}>16</Text>
          </View>
          <View style={styles.dayCellActive}>
            <Text style={styles.dayCellTextActive}>17</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.dayCellActive}>
            <Text style={styles.dayCellTextActive}>18</Text>
          </View>
          <View style={styles.dayCellActive}>
            <Text style={styles.dayCellTextActive}>19</Text>
          </View>
          <View style={styles.dayCellActive}>
            <Text style={styles.dayCellTextActive}>20</Text>
          </View>
          <View style={styles.dayCellActive}>
            <Text style={styles.dayCellTextActive}>21</Text>
          </View>
          <View style={styles.dayCellActive}>
            <Text style={styles.dayCellTextActive}>22</Text>
          </View>
          <View style={styles.dayCellActive}>
            <Text style={styles.dayCellTextActive}>23</Text>
          </View>
          <View style={styles.dayCellActive}>
            <Text style={styles.dayCellTextActive}>24</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.dayCellActive}>
            <Text style={styles.dayCellTextActive}>25</Text>
          </View>
          <View style={styles.dayCellActive}>
            <Text style={styles.dayCellTextActive}>26</Text>
          </View>
          <View style={styles.dayCellActive}>
            <Text style={styles.dayCellTextActive}>27</Text>
            <View
              style={{
                backgroundColor: '#fcd8e2',
                paddingVertical: 5,
                paddingHorizontal: 1,
                marginVertical: 5,
              }}>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#d80a44',
                }}>
                Period
              </Text>
            </View>
          </View>
          <View style={styles.dayCellActive}>
            <Text style={styles.dayCellTextActive}>28</Text>
          </View>
          <View style={styles.dayCellActive}>
            <Text style={styles.dayCellTextActive}>29</Text>
          </View>
          <View style={styles.dayCellActive}>
            <Text style={styles.dayCellTextActive}>30</Text>
          </View>
          <View style={styles.dayCellInactive}>
            <Text style={styles.dayCellTextInactive}>1</Text>
          </View>
        </View>
      </DataTable>
      <Text
        style={{
          color: '#D47794',
          fontSize: 16,
          fontWeight: 'bold',
          alignSelf: 'center',
          paddingVertical: 10,
        }}>
        Long tap to set your new cycle.
      </Text>
    </View>
  );
}
