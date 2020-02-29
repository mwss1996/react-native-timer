import * as React from "react";
import {
	Platform,
	TouchableNativeFeedback,
	TouchableOpacity
} from "react-native";

export function Touchable(props: any) {
	const TouchablePlatformSpecific: any =
		Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;
	return <TouchablePlatformSpecific {...props} />;
}
