import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "../../shared/Text";
import { defaultStyles } from "../../shared/defaultStyles";

const styles = StyleSheet.create({
	container: {
		margin: defaultStyles.metrics.largeMargin
	},
	label: {
		color: defaultStyles.fontColors.contrastText,
		marginBottom: defaultStyles.metrics.mediumMargin,
		marginLeft: defaultStyles.metrics.mediumMargin,
		fontSize: defaultStyles.fontSizes.medium
	},
	innerContainer: {
		paddingBottom: defaultStyles.metrics.mediumMargin,
		backgroundColor: defaultStyles.colors.darkWine,
		borderRadius: defaultStyles.metrics.mediumRadius,
		minHeight: defaultStyles.metrics.largeMargin
	}
});
interface HistoryProps {
	rows: JSX.Element[];
}
export function History(props: HistoryProps) {
	return (
		<View style={styles.container}>
			<Text style={styles.label} fontWeight="medium">
				History
			</Text>
			<View style={styles.innerContainer}>{props.rows}</View>
		</View>
	);
}
