import React from "react";
import { StyleSheet, ViewProps, TextInput } from "react-native";
import { Colors } from "../../theme";

export interface ITextInputProps extends ViewProps {
  value: string,
  onChangeText: any,
  onBlur: any,
  onFocus: any,
}

const ArTextInput: React.FC<ITextInputProps> = ({
  value,
  onChangeText,
  onBlur,
  onFocus
}) => {
  return (
    <TextInput
      onBlur={onBlur}
      onFocus={onFocus}
      maxLength={4} 
      autoFocus={true}
      keyboardType='number-pad' 
      value={value} 
      onChangeText={onChangeText}
      style={styles.input}
    />
  );
};

export default ArTextInput;

const styles = StyleSheet.create({
  input: { 
    color: Colors.white, 
    fontSize: 72, 
    marginRight: 16 
  }
});