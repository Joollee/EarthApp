import { View, ViewStyle, FlatList, ListRenderItem } from 'react-native'
import React,{FC} from 'react'
import { color } from '../../../themes'
import { hp, ImageTypes, wp } from '../../../utils'
import { ItemAdd } from '../components/ItemAdd'
import { Text } from '../../../components'
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigatorParamList} from '../../../navigators/bottom-tab';

interface ItemNavigate {
  icon: ImageTypes;
  text: string;
  check?: boolean
}
export  const Add_EmissionScreen: FC<
NativeStackScreenProps<NavigatorParamList, 'add_emission_detail'>
> = ({navigation,route}) => {
    const onPress = (title: string )=> () => {navigation.navigate("add_emission_time", {title})}
    const {data} = route.params
     
    const renderItem: ListRenderItem<ItemNavigate> = ({item}) => {
        return(
          
            <ItemAdd icon={item.icon} text={item.text} onPress={onPress(item.text)} check={item.check}/>
        )
    }
  return (
    <View style={ROOT}>
      <Text text='Select a sub-category' preset='h1'/>
      <FlatList renderItem={renderItem} 
      data={data}
      keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}
const ROOT: ViewStyle = {
    flex:1 ,
    backgroundColor: color.palette.white,
    paddingHorizontal: wp(24),
    paddingTop: hp(34)
}

