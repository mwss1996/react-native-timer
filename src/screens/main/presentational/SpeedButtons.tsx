import * as React from "react";
import { StyleSheet, View } from "react-native";
import { defaultStyles } from "../../shared/defaultStyles";

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "center",
		margin: defaultStyles.metrics.mediumMargin,
		marginBottom: 0
	},
	marginRight: {
		marginRight: defaultStyles.metrics.mediumMargin
	}
});
interface SpeedButtonsProps {
	speedButtons: JSX.Element[];
}
export function SpeedButtons(props: SpeedButtonsProps) {
	return <View style={styles.container}>{props.speedButtons}</View>;
}
