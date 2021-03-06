import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Sizes } from "../../theme";
import { Text } from '../../theme/Themed';

export interface ITextProp {
  style?: any,
  h1?: any,
  h2?: any,
  h3?: any,
  h4?: any,
  h5?: any,
  h6?: any,
  p?: any,
  body?: any,
  small?: any,
  muted?: any,
  neutral?: any,
  fontSize?: any,
  color?: any,
  bold?: boolean,
  italic?: boolean,
  margin?: boolean,
  marginTop?: boolean,
  marginLeft?: boolean,
  marginRight?: boolean,
  marginBottom?: boolean,
  center?: any,
  underline?: boolean,
  children?: any,
  styles?: any,
  theme?: any,
  fontFamily?: string,
  letterSpacing?: number,
  extraSmall?: boolean,
  extraLarge?: boolean,
  numberOfLines?: any,
  fontWeight?: any,
  uppercase?: boolean,
  capitalize?: boolean,
  lowercase?: boolean,
  onPress?: any
}

const Typography: React.FC<ITextProp> = (
  {
    style,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    body,
    small,
    muted,
    neutral,
    fontSize: size,
    color,
    bold,
    italic,
    margin,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    center,
    underline,
    children,
    fontFamily,
    letterSpacing,
    extraSmall,
    extraLarge,
    numberOfLines,
    fontWeight = 'normal',
    uppercase,
    capitalize,
    lowercase,
    onPress
  },
  props
) => {
  return (
    <Text
      adjustsFontSizeToFit
      numberOfLines={numberOfLines}
      style={[
        {
          fontSize: 16,
          fontWeight: fontWeight
        },
        h1 && { fontSize: 28 },
        h2 && { fontSize: 24 },
        h3 && { fontSize: 20 },
        h4 && { fontSize: 17 },
        h5 && { fontSize: 16 },
        h6 && { fontSize: 14 },
        p && { fontSize: 16 },        
        body && { fontSize: 14 },
        small && { fontSize: 14 },
        extraSmall && { fontSize: 12 },
        extraLarge && { fontSize: 72 },
        muted && { color: Colors.MUTED },
        neutral && { color: Colors.MUTED },
        size && { fontSize: size },
        color && { color },
        italic && { fontStyle: 'italic' },
        bold && { fontWeight: 'bold' },
        fontFamily && { fontFamily },
        letterSpacing && { letterSpacing },
        center && { textAlign: "center" },
        underline && { textDecorationLine: "underline" },
        uppercase && { textTransform: "uppercase" },
        capitalize && { textTransform: "capitalize" },
        lowercase && { textTransform: "lowercase" },
        margin && { marginLeft: Sizes.BASE },
        marginTop && { marginTop: Sizes.BASE },
        marginBottom && { marginBottom: Sizes.BASE },
        marginLeft && { marginLeft: Sizes.BASE },
        marginRight && { marginRight: Sizes.BASE },
        style && style,
      ]}
      onPress={onPress}
      {...props}
    >
      {children}
    </Text>
  );
};

export default Typography;