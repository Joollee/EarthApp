import { TextStyle } from "react-native"
import { color, typography } from "../../themes"

/**
 * All text will start off looking like this.
 */
const BASE: TextStyle = {
  fontFamily: typography.primary,
  color: color.text,
  fontSize: 14,
  lineHeight: 16.94
}

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const presets = {
  /**
   * The default text styles.
   */
  default: BASE,

  /**
   * A primary bold version of the default text.
   */
  primaryBold: {
    color: color.text,
    fontSize: 12,
    lineHeight: 14.25,
    fontFamily: typography.primaryBold,
  } as TextStyle,

  /**
   * A bold version of the default text.
   */
  secondary: {
    color: color.text,
    fontSize: 10,
    lineHeight: 12.1,
    fontFamily: typography.primary,
  } as TextStyle,

  /**
   * Large title.
   */
  title: {
    color: color.text,
    fontSize: 20,
    fontFamily: typography.primaryBlack,
    lineHeight: 24.2
  } as TextStyle,

  /**
   * Large header.
   */
  header: {
    color: color.text,
    fontSize: 16,
    fontFamily: typography.primaryBold,
    lineHeight: 19.36
  } as TextStyle,

  /**
   * H1.
   */
  h1: {
    color: color.text,
    fontSize: 20,
    fontFamily: typography.primaryBold,
    lineHeight: 24.2
  } as TextStyle,

  /**
   * H2.
   */
  h2: {
    color: color.text,
    fontSize: 18,
    fontFamily: typography.primaryBold,
    lineHeight: 21.78
  } as TextStyle,

  /**
   * H3.
   */
  h3: {
    color: color.text,
    fontSize: 16,
    fontFamily: typography.primaryMedium,
    lineHeight: 19.36
  } as TextStyle,

  /**
   * Field labels that appear on forms above the inputs.
   */
  tertiary: {
    color: color.textSecond,
    fontSize: 8,
    lineHeight: 9.68,
    fontFamily: typography.primaryLight,
  } as TextStyle,

  /**
   * A secondary bold
   */
  secondaryBold: {
    color: color.text,
    fontSize: 10,
    lineHeight: 12.1,
    fontFamily: typography.primaryBold,
  } as TextStyle,
  /**
   * default
   * 
   */
  link: {
   color: color.text,
   fontSize: 12,
   lineHeight: 15,
   fontFamily: typography.primary,
   textDecorationLine: "underline"
  } as TextStyle
}

/**
 * A list of preset names.
 */
export type TextPresets = keyof typeof presets
