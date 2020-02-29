import * as React from "react";
import { StyleSheet } from "react-native";
import { defaultStyles } from "../../shared/defaultStyles";
import { Text } from "../../shared/Text";

const styles = StyleSheet.create({
	container: {
		textAlign: "center",
		color: defaultStyles.fontColors.contrastText,
		margin: defaultStyles.metrics.largeMargin,
		fontSize: defaultStyles.fontSizes.medium
	}
});
interface MessageProps {
	message: string | null;
}
export function Message(props: MessageProps) {
	return (
		<Text style={styles.container} fontWeight="bold">
			{props.message}
		</Text>
	);
}
