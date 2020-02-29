import * as React from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { defaultStyles } from "../../shared/defaultStyles";
import { Text } from "../../shared/Text";

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		margin: defaultStyles.metrics.largeMargin,
		alignItems: "center"
	},
	icon: {
		color: defaultStyles.colors.pink,
		marginRight: defaultStyles.metrics.mediumMargin,
		fontSize: 25
	},
	title: {
		color: defaultStyles.fontColors.contrastText,
		fontSize: defaultStyles.fontSizes.medium
	}
});
export function Logo() {
	return (
		<View style={styles.container}>
			<Icon style={styles.icon} name={"clock"} solid />
			<Text style={styles.title} fontWeight="bold">
				Timer
			</Text>
		</View>
	);
}
