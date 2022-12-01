import React from 'react';
import {Text, StyleSheet,View} from 'react-native';
// const AppTexT = props => {
//   return <Text style={styles.txt}>hello</Text>;
// };
const Textshow = (props) => {
  const { TextshowStyle, bgTextshow } = styles;
  return (
    <View style = {bgTextshow}>
      <Text style = { TextshowStyle }>{props.TextshowText}</Text>
    </View>
  );
};

const styles = {
  bgTextshow: {
    color: '#0F0F0F',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '900',
    backgroundColor: 'yellow',
    textAlign: 'center'
  },
  TextshowStyle: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    color: '#fff'
  }
  
};
export default Textshow;
