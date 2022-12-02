import { StyleProp, TextStyle, View, ViewStyle } from 'react-native'
import React from 'react'
import { color } from '../../../themes'
import { Text } from '../../../components'

interface Props {
    style: StyleProp<ViewStyle>
}

export const BudgetForMonth = ({style}: Props) => {

    const renderDetailItem = (label: string, value: string) => (
        <Text>
            <Text text={label} preset='secondary' style={TXT_LABEL}/>
            <Text text={` : ${value}`} preset='secondary' style={TXT_VALUE}/>
        </Text>
    )

  return (
    <View style={[ROOT, style]}>
        <Text text='June' preset='h1' style={TXT_MONTH}/>
        <View style={VIEW_PROGRESS}>
            <Text text='https://www.npmjs.com/package/react-native-progress-circle' preset='title' style={TXT_PERCENT}/>
        </View>
        <View style={VIEW_DETAIL}>
            {renderDetailItem('Food', '20 kg - 10 %')}
            {renderDetailItem('Transport', '80 kg - 26 %')}
            {renderDetailItem('Streaming', '40 kg - 15 %')}
            {renderDetailItem('Purchase', '60 kg - 17 %')}
            {renderDetailItem('Fashion', '50 kg - 16 %')}
            {renderDetailItem('Electricity', '50 kg - 16 %')}
            {renderDetailItem('Total', '300 kg')}
        </View>
    </View>
  )
}

const ROOT: ViewStyle = {
    borderRadius: 17,
    borderWidth: 2,
    borderColor: color.palette.primary10,
    paddingHorizontal: 12,
    paddingVertical: 20,
}
const TXT_MONTH: TextStyle = {
    textAlign: 'center'
}
const VIEW_PROGRESS: ViewStyle = {
    width: 137,
    height: 137,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
    marginVertical: 26
}
const TXT_PERCENT: TextStyle = {
    color: color.palette.black50,
    textAlign: 'center'
}
const VIEW_DETAIL: ViewStyle = {
    width: '100%',
    alignItems: 'center',
}
const TXT_LABEL: TextStyle = {
    color: color.palette.black90
}
const TXT_VALUE: TextStyle = {
    color: color.palette.black50
}