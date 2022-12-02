import { StyleProp, StyleSheet, TextStyle, View, ViewStyle } from 'react-native'
import React from 'react'
import { color } from '../../../themes'
import { Text } from '../../../components'
import ProgressCircle from 'react-native-progress-circle'


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
    <View style = {CONTAINER}>
    <View style={[ROOT, style]}>
        <Text text='June' preset='h1' style={TXT_MONTH}/>
        <View style={VIEW_PROGRESS}>
         <ProgressCircle
            percent={75}
            radius={86}
            borderWidth={10}
            color="#0F853B"
            shadowColor="#ffff"
            bgColor="#ffff"
            outerCircleStyle = {{
              backgroundColor: '#CFE7D8'
              
            }}
        >
            <Text style={{ fontSize: 18 }}>{'75%'}</Text>
         </ProgressCircle>
        </View>
        <View style={VIEW_DETAIL}>
            {renderDetailItem('Food', '20 kg - 10 %')}
            {renderDetailItem('Transport', '80 kg - 26 %')}
            {renderDetailItem('Streaming', '40 kg - 15 %')}
            {renderDetailItem('Purchase', '60 kg - 17 %')}
            {renderDetailItem('Fashion', '50 kg - 16 %')}
            {renderDetailItem('Electricity', '50 kg - 16 %')}
            {renderDetailItem('Total', '300 kg')}
            <View style = {TXT_TOTAL}>
              <Text text={'Budget for December'} preset='secondary' style={TXT_TOTAL_LABEL}/>
              <Text text={` : ${'400kg'}}`} preset='secondary' style={TXT_TOTAL_VALUE}/>
            </View>
        </View>
        
    </View>
    <View style = {TXT_SUMDAYOFMONTH}>
          <Text text='27' style = {TXT_SUMDAY}/>
          <Text text='days without meat or fish, good job!' style = {TXT_SUMDAYTOTAL}/>
        </View>
    </View>
    
  )
}
const CONTAINER =  {
    flex: 1,
    marginTop: 19.25
}

const ROOT: ViewStyle = {
    borderRadius: 17,
    borderWidth: 2,
    borderColor: color.palette.primary10,
    paddingHorizontal: 12,
    paddingVertical: 20,
    marginTop: 46.25
}
const TXT_MONTH: TextStyle = {
    textAlign: 'center'
}
const VIEW_PROGRESS: ViewStyle = {
    width: 137,
    height: 335,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginVertical: 26,
    marginTop: 27
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
    color: color.palette.black90,
    fontSize: 12,
    alignItems: 'center',
   

}
const TXT_VALUE: TextStyle = {
    color: color.palette.black50
}
const TXT_TOTAL_LABEL: TextStyle = {
    color: color.palette.black90,
    fontSize: 12,
    alignItems: 'center',
    fontWeight: 'bold'
}
const TXT_TOTAL_VALUE: TextStyle = {
    color: color.palette.black50,
    fontSize: 12
}
const TXT_TOTAL: TextStyle = {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 26
     
}
const TXT_SUMDAYOFMONTH: TextStyle = {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop:23,
    justifyContent: 'center'
}
const TXT_SUMDAY: TextStyle = {
    fontSize: 16,
    color:'#4BB377'
}
const TXT_SUMDAYTOTAL : TextStyle = {
    fontSize: 16,
    color: '#111714'
    
}
