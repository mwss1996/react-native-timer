import * as React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { defaultStyles } from "../../shared/defaultStyles";
import { Text } from "../../shared/Text";
import { Touchable } from "../../shared/Touchable";

const styles = StyleSheet.create({
	container: {
		padding: defaultStyles.metrics.mediumMargin,
		borderRadius: defaultStyles.metrics.roundRadius
	},
	activeContainer: {
		backgroundColor: defaultStyles.colors.lightWine
	},
	label: {
		width: 30,
		height: 30,
		textAlign: "center",
		textAlignVertical: "center",
		color: defaultStyles.fontColors.contrastText,
		fontSize: defaultStyles.fontSizes.small
	}
});
interface SpeedButtonProps {
	style?: StyleProp<ViewStyle>;
	label: string;
	isActive: boolean;
	isLastOfRow: boolean;
	onClick: () => void;
}
export function SpeedButton(props: SpeedButtonProps) {
	return (
		<Touchable onPress={props.onClick}>
			<View
				style={[
					styles.container,
					props.isActive ? styles.activeContainer : {},
					!props.isLastOfRow
						? { marginRight: defaultStyles.metrics.smallMargin }
						: {}
				]}
			>
				<Text fontWeight="bold" style={styles.label}>
					{props.label}
				</Text>
			</View>
		</Touchable>
	);
}
