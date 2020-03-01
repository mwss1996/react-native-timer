import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "../../shared/Text";
import { defaultStyles } from "../../shared/defaultStyles";
import { Touchable } from "../../shared/Touchable";
import Icon from "react-native-vector-icons/FontAwesome5";
import { appendLeadingZeros } from "../../../store/utils/helperFunctions";

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "stretch",
		marginTop: defaultStyles.metrics.mediumMargin
	},
	leftColumn: {
		flexGrow: 1,
		flexBasis: 0,
		paddingLeft: defaultStyles.metrics.mediumMargin
	},
	time: {
		color: defaultStyles.fontColors.contrastText,
		fontSize: defaultStyles.fontSizes.medium,
		flexGrow: 1
	},
	date: {
		color: defaultStyles.fontColors.faintText,
		fontSize: defaultStyles.fontSizes.medium,
		flexGrow: 1
	},
	removeButton: {
		padding: defaultStyles.metrics.largeMargin,
		justifyContent: "center"
	},
	removeButtonIcon: {
		color: defaultStyles.fontColors.faintText,
		fontSize: defaultStyles.fontSizes.medium
	}
});
interface HistoryRowProps {
	time: string;
	date: Date;
	onPressRemoveButton: () => void;
	onPressTimer: () => void;
}
export function HistoryRow(props: HistoryRowProps) {
	return (
		<View style={styles.container}>
			<Touchable testID="timerButton" onPress={props.onPressTimer}>
				<View style={styles.leftColumn}>
					<Text testID="time" style={styles.time} fontWeight="medium">
						{props.time}
					</Text>
					<Text style={styles.date} fontWeight="medium">
						Created on {props.date.toDateString()}
					</Text>
				</View>
			</Touchable>
			<Touchable
				testID="removeButton"
				onPress={props.onPressRemoveButton}
			>
				<View style={styles.removeButton}>
					<Icon style={styles.removeButtonIcon} name={"trash"} />
				</View>
			</Touchable>
		</View>
	);
}
