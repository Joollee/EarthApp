import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const hp = (value: number) => {
    return (windowHeight*value/812)
}
export const wp = (value: number) => {
    return (windowWidth*value/375)
}