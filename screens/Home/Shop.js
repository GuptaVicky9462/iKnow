import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {Rating} from 'react-native-ratings';
import {image} from '../../assets/images';

export default function Shop() {
  const [isActive, setIsActive] = React.useState([]);
  console.log('vvvvvvvv', isActive);
  return (
    <>
      <Text
        style={{
          marginVertical: 20,
          paddingHorizontal: 10,
          fontWeight: 'bold',
          fontSize: 16,
          color: 'black',
        }}>
        Shop Now
      </Text>
      <ScrollView horizontal={true}>
        {[
          {name: 'name1', id: 0},
          {name: 'name2', id: 1},
          {name: 'name3', id: 2},
        ].map((item, index) => {
          console.log('isActive[item.id]', isActive[item.id]?.name);
          return (
            <>
              <View
                key={index}
                style={{
                  margin: 10,
                  width: 170,
                  position: 'relative',
                }}>
                <View
                  style={{
                    elevation: 1,
                    borderRadius: 5,
                  }}>
                  <Image
                    source={image.product}
                    style={{height: 170, width: 170}}
                  />
                </View>

                <Rating
                  type="custom"
                  ratingColor="orange"
                  ratingBackgroundColor="#c8c7c8"
                  ratingCount={5}
                  imageSize={20}
                  style={{
                    paddingVertical: 10,
                    alignItems: 'flex-start',
                  }}
                />
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 'bold',
                    color: 'black',
                    flexWrap: 'wrap',
                  }}>
                  i-Know ovulation testing Strips
                </Text>
                <Text style={{color: 'black'}}>
                  ₹ 549.00{' '}
                  <Text
                    style={{
                      color: 'grey',
                      textDecorationLine: 'line-through',
                    }}>
                    ₹650.00
                  </Text>
                  <Text style={{color: '#F76F44'}}>{'  '}20%</Text>
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    const filter = isActive.filter((ite, index) => {
                      return ite.id == item.id;
                    });
                    const excluded = isActive.filter((ite, index) => {
                      return ite.id !== item.id;
                    });

                    if (filter.length > 0) {
                      setIsActive([...excluded]);
                    } else {
                      setIsActive([...excluded, item]);
                    }
                  }}
                  style={{
                    position: 'absolute',
                    backgroundColor: 'white',
                    right: 13,
                    top: 10,
                    zIndex: 99,
                    borderRadius: 50,
                    padding: 8,
                  }}>
                  {isActive.filter(el => el.id == item.id).length ? (
                    <FontAwesome size={15} name="heart" color="#f76f44" />
                  ) : (
                    <Feather size={15} name="heart" />
                  )}
                </TouchableOpacity>
              </View>
            </>
          );
        })}
      </ScrollView>
    </>
  );
}
