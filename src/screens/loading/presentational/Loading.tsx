import * as React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { Text } from "../../shared/Text";
import { defaultStyles } from "../../shared/defaultStyles";

const styles = StyleSheet.create({
	container: {
		backgroundColor: defaultStyles.colors.wine,
		flexGrow: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	label: {
		color: defaultStyles.fontColors.contrastText,
		fontSize: defaultStyles.fontSizes.extraLarge,
		marginBottom: defaultStyles.metrics.largeMargin
	}
});
export function Loading() {
	return (
		<View style={styles.container}>
			<Text fontWeight="bold" style={styles.label}>
				Timer
			</Text>
			<ActivityIndicator size="large" color={defaultStyles.colors.pink} />
		</View>
	);
}
