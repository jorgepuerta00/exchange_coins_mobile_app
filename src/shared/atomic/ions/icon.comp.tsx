import React from "react";
import { ViewStyle } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import Octicons from "react-native-vector-icons/Octicons";

export interface IIconProps {
  name: any,
  family: FamilyType,
  size: number,
  color?: string,
  style?: ViewStyle 
}

export type FamilyType = "AntDesign" | "FontAwesome" | "Ionicons" | 'MaterialCommunityIcons' | 'Octicons';

const Icon: React.FC<IIconProps> = ({
  name,
  family,
  size,
  color = 'black',
  style,
}) => {
  switch (family) {
    case 'FontAwesome': return <FontAwesome name={name} size={size} color={color} style={style} />
    case 'AntDesign': return <AntDesign name={name} size={size} color={color} style={style} />
    case 'Ionicons': return <Ionicons name={name} size={size} color={color} style={style} />
    case 'MaterialCommunityIcons': return <MaterialCommunityIcons name={name} size={size} color={color} style={style} />
    case 'Octicons': return <Octicons name={name} size={size} color={color} style={style} />
    default: return <FontAwesome name={name} size={size} color={color} style={style} />
  }
}

export default Icon;