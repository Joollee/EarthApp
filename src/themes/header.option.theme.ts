import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { presets } from "../components/text/text.presets";
import { color } from "./color";

export const headerOptionTheme: NativeStackNavigationOptions & BottomTabNavigationOptions = {
  headerStyle: {
    backgroundColor: color.palette.white,
  },
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontSize: presets.title.fontSize,
    fontFamily: presets.title.fontFamily,
  },
}