import { Platform } from "react-native"

/**
 * You can find a list of available fonts on both iOS and Android here:
 * https://github.com/react-native-training/react-native-fonts
 *
 * If you're interested in adding a custom font to your project,
 * check out the readme file in ./assets/fonts/ then come back here
 * and enter your new font name. Remember the Android font name
 * is probably different than iOS.
 * More on that here:
 * https://github.com/lendup/react-native-cross-platform-text
 *
 * The various styles of fonts are defined in the <Text /> component.
 */

export const typography = {
  /**
   * The primary font.  Used in most places.
   */
  primary: Platform.select({ ios: "Inter-Regular", android: "Inter-Regular" }),
  /**
   * The primary medium font.  Used in most places.
   */
  primaryMedium: Platform.select({ ios: "Inter-Medium", android: "Inter-Medium" }),
  /**
   * The primary bold font.  Used in most places.
   */
  primaryBold: Platform.select({ ios: "Inter-Bold", android: "Inter-Bold" }),
  /**
   * The primary black font.  Used in most places.
   */
  primaryBlack: Platform.select({ ios: "Inter-Black", android: "Inter-Black" }),
  /**
   * The primary light font.  Used in most places.
   */
  primaryLight: Platform.select({ ios: "Inter-Light", android: "Inter-Light" }),
}
