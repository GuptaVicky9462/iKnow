import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Animated,
  LayoutAnimation,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {image} from '../../assets/images';
import {FlatList} from 'react-native-gesture-handler';
// import MaterialIcon from 'react-native-vector-icons/MaterialIcon';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const data = [
  {
    id: 0,
    title: 'Days1',
    body: '17 Aug 2022',
    image: image.ovelationkitresult,
    type: 'Negative',
    description:
      'A single line in C indicates that the fertile days have not started. Invalid: No line on the kit indicates an invalid result. If so, test again using a fresh kit.',
  },
  {
    id: 1,
    title: 'Days2',
    body: '16 Aug 2022',
    type: 'Positive',

    image: image.ovelationkitresult,
    description:
      'Two pink lines in C & T indicate the beginning of the fertile days',
  },
  {
    id: 2,
    title: 'Days3',
    body: '15 Aug 2022',
    type: 'Positive',

    image: image.ovelationkitresult,
    description:
      'Two pink lines in C & T indicate the beginning of the fertile days',
  },
  {
    id: 3,
    title: 'Days4',
    body: '14 Aug 2022',
    image: image.ovelationkitresult,
    type: 'Positive',

    description:
      'Two pink lines in C & T indicate the beginning of the fertile days',
  },
  {
    id: 4,
    title: 'Days5',
    body: '13 Aug 2022',
    image: image.ovelationkitresult,
    type: 'Positive',

    description:
      'Two pink lines in C & T indicate the beginning of the fertile days',
  },
];
const toggleAnimation = {
  duration: 300,
  update: {
    duration: 300,
    property: LayoutAnimation.Properties.opacity,
    type: LayoutAnimation.Types.easeInEaseOut,
  },
  delete: {
    duration: 200,
    property: LayoutAnimation.Properties.opacity,
    type: LayoutAnimation.Types.easeInEaseOut,
  },
};
const Accordian = ({title, bodyText, image, description, type}) => {
  const [showContent, setShowContent] = useState(false);
  const animationController = React.useRef(new Animated.Value(0)).current;
  const toggleListItem = () => {
    const config = {
      duration: 300,
      toValue: showContent ? 0 : 1,
      useNativeDriver: true,
    };
    Animated.timing(animationController, config).start();
    LayoutAnimation.configureNext(toggleAnimation);
    setShowContent(!showContent);
  };
  const arrowTransform = animationController.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });
  return (
    <>
      <View
        style={{
          overflow: 'hidden',
          borderTopWidth: 0.6,
          borderColor: '#dfdfdf',
        }}>
        <TouchableOpacity onPress={() => toggleListItem()}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: '3%',
              paddingVertical: '5%',
              backgroundColor: showContent ? '#ec187c' : 'white',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Ionicons
                size={20}
                name={'checkbox-outline'}
                color={showContent ? 'white' : '#222222'}
              />
              <Text
                style={{
                  fontSize: 16,
                  color: '#2d2d2d',
                  fontWeight: 'bold',
                  marginLeft: 5,
                  color: showContent ? 'white' : '#222222',
                }}>
                {title}
              </Text>
            </View>
            <Animated.View style={{transform: [{rotateZ: arrowTransform}]}}>
              <MaterialIcons
                name="keyboard-arrow-down"
                color={showContent ? '#0c63e4' : 'black'}
                size={30}
              />
            </Animated.View>
          </View>
        </TouchableOpacity>
        {showContent && (
          <View
            style={{
              paddingHorizontal: '4%',
              paddingVertical: '3%',
            }}>
            <Text
              style={{
                color: '#222222',
                fontSize: 16,
              }}>
              {bodyText}
            </Text>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={image}
                style={{height: 200, width: 300}}
                resizeMode="contain"
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  color: '#222222',
                  fontSize: 14,
                }}>
                <Text
                  style={{
                    color: '#ec187c',
                    fontSize: 14,
                  }}>
                  {type}{' '}
                </Text>
                :{description}
              </Text>
            </View>
          </View>
        )}
      </View>
    </>
  );
};
export default function OvulationConsolidatedResult(props) {
  return (
    <ImageBackground source={image.loginbg} style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 30,
          paddingHorizontal: 15,
        }}>
        <Text
          style={{
            color: '#222222',
            fontSize: 16,
            fontWeight: '500',
          }}>
          Select Day to view the result
        </Text>

        <View
          style={{
            backgroundColor: '#fff',
            overflow: 'hidden',
            borderRadius: 5,
            marginVertical: 15,
          }}>
          <FlatList
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <Accordian
                title={item.title}
                bodyText={item.body}
                image={item.image}
                description={item.description}
                type={item.type}
              />
            )}
          />
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('OvulationDashbord')}
          style={{
            backgroundColor: '#ec187c',
            paddingVertical: 10,
            marginVertical: 20,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
            }}>
            OVULATION DASHBORD
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
}
