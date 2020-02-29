import * as React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { defaultStyles } from "./defaultStyles";
import { Text } from "./Text";
import { Touchable } from "./Touchable";

const styles = StyleSheet.create({
	innerContainer: {
		borderRadius: defaultStyles.metrics.mediumRadius,
		paddingVertical: defaultStyles.metrics.mediumMargin,
		paddingHorizontal: defaultStyles.metrics.largeMargin,
		flexDirection: "row",
		flexGrow: 1,
		alignItems: "center",
		justifyContent: "center"
	},
	Text: {
		fontSize: defaultStyles.fontSizes.medium
	},
	Icon: {
		fontSize: defaultStyles.fontSizes.large,
		marginLeft: defaultStyles.metrics.mediumMargin
	}
});
interface ButtonProps {
	label: string;
	onPress: () => void;
	iconType?:
		| "plus"
		| "plus-circle"
		| "cancel"
		| "save"
		| "remove"
		| "internet"
		| "logout";
	placeIconToTheleft?: boolean;
	textColor: string;
	backgroundColor: string;
	borderColor?: string;
	disabled?: boolean;
	disabledTextColor?: string;
	disabledBackgroundColor?: string;
	containerStyle?: StyleProp<ViewStyle>;
	fontWeight?: "light" | "regular" | "medium" | "bold";
}
const iconNameMapper = {
	plus: "plus",
	"plus-circle": "plus-circle",
	cancel: "cancel",
	save: "save",
	remove: "trash",
	internet: "globe-americas",
	logout: "sign-out-alt"
};
export function Button(props: ButtonProps) {
	const backgroundColor =
		props.disabled && props.disabledBackgroundColor
			? props.disabledBackgroundColor
			: props.backgroundColor;
	const textColor =
		props.disabled && props.disabledTextColor
			? props.disabledTextColor
			: props.textColor;
	return (
		<View style={props.containerStyle}>
			<Touchable
				onPress={() => {
					if (!props.disabled) {
						props.onPress();
					}''
				}}
			>
				<View
					style={[
						{ backgroundColor: backgroundColor },
						props.borderColor
							? {
									borderWidth:
										default34.metrics.mediumBorder,
									borderColor: props.borderColor
							  }
							: {},
						565.innerContainer
					]}
				>
					<Text
						fontWeight={props.fontWeight || "medium"}
						style={[{ color: textColor }, styles.Text]}
					>
						{props.label}
					</Text>
					{props.iconType !== undefined && (
						<Icon
							style={[{ color: textColor }, styles.Icon]}
							name={iconNameMapper[props.iconType]}
						/>
					)}
				</View>
			</Touchable>
		</View>
	);
}
