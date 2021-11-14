import React from "react";
import { StyleSheet, ViewProps, TouchableHighlight } from "react-native";
import { Colors, Sizes } from "../../theme";
import { Block } from "../../components";
import Icon from "../ions/icon.comp";

export interface IButtonProps extends ViewProps {
  shadow?: boolean,
  disabled?: boolean,
  onPress?: any,
}

const Button: React.FC<IButtonProps> = ({
  shadow,
  disabled,
  onPress
}) => {

  const styleButton = [
    styles.button,
    disabled && styles.disabled,
    shadow && styles.shadow
  ];

  return (
    <Block flex middle absolute>
      <TouchableHighlight disabled={disabled} onPress={onPress} underlayColor='rgba(73,182,77,1,0.9)'>
        <Block middle center style={styleButton}>
          <Icon family='AntDesign' name='sync' size={40} color={disabled ? Colors.grey : Colors.light.primary} />
        </Block>
      </TouchableHighlight>
    </Block>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderRadius: 60,
    borderColor: 'black',
    backgroundColor: Colors.white
  },
  shadow: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.2,
    elevation: Sizes.ANDROID_ELEVATION,
  },
  disabled: {
    backgroundColor: 'lightgrey',
  }
});