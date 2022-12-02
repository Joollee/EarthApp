import * as React from "react"
import { View, ImageStyle, Image } from "react-native"
import { IMAGES } from "../../utils"
import { IconProps } from "./icon.props"

const ICON_SIZE = 26

const ROOT: ImageStyle = {
  width: ICON_SIZE,
  height: ICON_SIZE
}

export function Icon(props: IconProps) {
  const { style: styleOverride, icon, containerStyle } = props

  return (
    <View style={containerStyle}>
      <Image style={[ROOT, styleOverride]} source={IMAGES[icon]} resizeMode="contain" />
    </View>
  )
}
