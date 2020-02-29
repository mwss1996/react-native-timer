import * as React from "react";
import {
	Animated,
	Text as ReactNativeText,
	TextProps as ReactNativeTextProps,
	TextStyle
} from "react-native";
import { defaultStyles } from "./defaultStyles";

interface TextProps extends ReactNativeTextProps {
	children?: React.ReactNode;
	fontWeight?: "light" | "regular" | "medium" | "bold";
}
export class Text extends React.Component<TextProps> {
	render() {
		const { style, fontWeight, ...rest } = this.props;
		const fontFamilyStyle: TextStyle = {
			fontFamily: fontWeight
				? defaultStyles.fontFamilyByFontWeight[fontWeight]
				: defaultStyles.fontFamilyByFontWeight["regular"]
		};
		return (
			<ReactNativeText style={[style, fontFamilyStyle]} {...rest}>
				{this.props.children}
			</ReactNativeText>
		);
	}
}
export const AnimatedText = Animated.createAnimatedComponent(Text);
