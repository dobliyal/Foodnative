import { Dimensions, Platform, PixelRatio } from 'react-native';
const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');
const screenWidth = width;
const screenHeight = height;
const widthBaseScale = width / 428;
const heightBaseScale = height / 926;
function normalize(size: number, based = 'width') {
  const newSize = based === 'height' ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}
const widthPixel = (size: number) => normalize(size, 'width');
const heightPixel = (size: number) => normalize(size, 'height');
const fontPixel = (size: number) => Platform.OS === 'ios' ? heightPixel(size) : heightPixel(size + 2);
const pixelSizeVertical = (size: number) => heightPixel(size);
const pixelSizeHorizontal = (size: number) => widthPixel(size);
const scale = height / 600;
const normalizeSize = (size: number) => {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
};
const paddingVertical = (size: number) => heightPixel(size);
export { widthPixel, heightPixel, fontPixel, pixelSizeVertical, pixelSizeHorizontal, screenWidth, screenHeight, normalizeSize, paddingVertical };











