import React from "react";
import { StyleSheet, Image, TouchableWithoutFeedback, View, ImageResizeMode } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Sizes } from '../../theme'

export interface IImgProps {
  source: any,
  height?: any,
  width?: any,
  style?: any,
  onPress?: any,
  size?: SizeType,
  shadow?: boolean,
  resizeMode?: ImageResizeMode,
  round?: boolean
}

export type SizeType = "avatar" | "logo" | "small" | "full" | "default";

const Img: React.FC<IImgProps> = ({
  source,
  height,
  width,
  style,
  onPress,
  size,
  shadow,
  resizeMode,
  round
}) => {

  const ViewStyles = [
    size === 'avatar' && styles.avatarStyle,
    size === 'logo' && styles.logoStyle,
    size === 'small' && styles.smallStyle,
    size === 'full' && styles.FullStyle,
    shadow && styles.shadow,
    style && style
  ];

  const ImageStyles = [
    size === 'avatar' && styles.avatarStyle,
    size === 'logo' && styles.logoStyle,
    size === 'small' && styles.smallStyle,
    size === 'full' && styles.FullStyle,
    round && styles.round,
    height && { height },
    width && { width }
  ];

  return (
    <View style={[ViewStyles, shadow && styles.shadow]}>
      <TouchableWithoutFeedback onPress={onPress}>
        <Image
          source={source}
          resizeMode={resizeMode}
          style={ImageStyles}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Img;

const styles = StyleSheet.create({
  image: {
    marginBottom: 10,
    marginLeft: Sizes.BASE,
  },
  round: {
    width: 104,
    height: 104,
    borderRadius: 50,
  },
  raised: {
    width: Sizes.WIDTH - Sizes.BASE * 12,
    height: Sizes.WIDTH - Sizes.BASE * 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  smallStyle: {
    width: Sizes.THUMBMEASURE * 1.3,
    height: Sizes.THUMBMEASURE * 1.3,
    borderRadius: 50,
  },
  logoStyle: {
    height: '100%',
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatarStyle: {
    width: Sizes.THUMBMEASURE,
    height: Sizes.THUMBMEASURE
  },
  FullStyle: {
    width: Sizes.WIDTH,
    height: Sizes.HEIGHT * .4
  },
  shadow: {
    borderRadius: 50,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
    shadowOpacity: 0.5,
    elevation: Sizes.ANDROID_ELEVATION,
  }
});