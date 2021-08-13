import { Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const kAppStatusBarHeight = getStatusBarHeight();
export const kAppWidth = Dimensions.get("window").width;
export const kAppHeight = Dimensions.get("window").height; 