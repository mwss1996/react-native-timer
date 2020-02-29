import * as React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { Text } from "../../shared/Text";
import { Touchable } from "../../shared/Touchable";
import { defaultStyles } from "../../shared/defaultStyles";

const styles = StyleSheet.create({
	container: {
		marginHorizontal: defaultStyles.metrics.largeMargin
	},
	label: {
		marginLeft: defaultStyles.metrics.mediumMargin,
		marginBottom: defaultStyles.metrics.mediumMargin,
		color: defaultStyles.fontColors.contrastText,
		fontSize: defaultStyles.fontSizes.medium
	},
	inputContainer: {
		flexDirection: "row"
	},
	input: {
		flexGrow: 1,
		padding: defaultStyles.metrics.mediumMargin,
		backgroundColor: defaultStyles.colors.lightWine,
		marginRight: defaultStyles.metrics.mediumMargin,
		borderRadius: defaultStyles.metrics.mediumRadius,
		fontSize: defaultStyles.fontSizes.medium,
		color: defaultStyles.fontColors.contrastText
	},
	buttonContainer: {
		padding: defaultStyles.metrics.mediumMargin,
		backgroundColor: defaultStyles.colors.pink,
		borderRadius: defaultStyles.metrics.mediumRadius,
		justifyContent: "center"
	},
	buttonText: {
		color: defaultStyles.fontColors.contrastText,
		fontSize: defaultStyles.fontSizes.medium
	}
});
interface InputProps {
	textInputValue: string;
	onTextInputValueChange: (value: string) => void;
	onPressSetTime: () => void;
	enableSetTime: boolean;
}
export function Input(props: InputProps) {
	return (
		<View style={styles.container}>
			<Text style={styles.label} fontWeight="medium">
				Countdown time
			</Text>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					keyboardType={"numeric"}
					onSubmitEditing={props.onPressSetTime}
					placeholder="mm:ss"
					placeholderTextColor={defaultStyles.fontColors.faintText}
					value={props.textInputValue}
					onChangeText={props.onTextInputValueChange}
				/>
				<Touchable
					onPress={
						props.enableSetTime ? props.onPressSetTime : () => {}
					}
				>
					<View style={styles.buttonContainer}>
						<Text fontWeight="bold" style={styles.buttonText}>
							Set time
						</Text>
					</View>
				</Touchable>
			</View>
		</View>
	);
}
