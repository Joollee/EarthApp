import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
const AppButton = (props) => {
    return (
  <TouchableOpacity style={styles.touchoblae}>
    <Text style={styles.txtTouchable}> I agree</Text>
  </TouchableOpacity>)
};
const styles = StyleSheet.create({
    touchoblae: {
        height: 39,
        marginTop: 119,
        marginHorizontal: 24,
        borderRadius: 20,
        backgroundColor: '#0F853B',
        alignItems: 'center',
        justifyContent: 'center'
      },
      txtTouchable: {
       fontFamily: 'Inter-Regular',
       fontSize: 16,
       textAlign: 'center'
      }
})
export default AppButton
