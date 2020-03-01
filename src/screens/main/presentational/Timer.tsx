import * as React from "react";
import { StyleSheet, View, Animated } from "react-native";
import { Text, AnimatedText } from "../../shared/Text";
import { Touchable } from "../../shared/Touchable";
import Icon from "react-native-vector-icons/FontAwesome5";
import { defaultStyles } from "../../shared/defaultStyles";
import { appendLeadingZeros } from "../../../store/utils/helperFunctions";

const styles = StyleSheet.create({
	container: {},
	timerRow: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center"
	},
	timer: {
		color: defaultStyles.fontColors.contrastText,
		fontSize: 65,
		textAlignVertical: "center",
		marginRight: defaultStyles.metrics.mediumMargin,
		position: "relative",
		padding: 0
	},
	buttons: {
		alignItems: "center"
	},
	playButtonContainer: {
		backgroundColor: defaultStyles.colors.pink,
		padding: defaultStyles.metrics.mediumMargin,
		borderRadius: defaultStyles.metrics.roundRadius,
		marginBottom: defaultStyles.metrics.mediumMargin
	},
	playButtonIcon: {
		width: 25,
		height: 25,
		textAlign: "center",
		textAlignVertical: "center",
		color: "white",
		fontSize: 18
	},
	resetButtonContainer: {
		backgroundColor: defaultStyles.colors.lightWine,
		padding: defaultStyles.metrics.mediumMargin,
		borderRadius: defaultStyles.metrics.roundRadius
	},
	resetButtonIcon: {
		width: 20,
		height: 20,
		textAlign: "center",
		textAlignVertical: "center",
		color: "white",
		fontSize: 18
	}
});
interface TimerProps {
	alertOne: boolean;
	alertTwo: boolean;
	time: string;
	isRunning: boolean;
	enablePlayButton: boolean;
	onPressPlayButton: () => void;
	onPressResetButoon: () => void;
}
export function Timer(props: TimerProps) {
	const [offset] = React.useState(new Animated.Value(0));
	const blinkingColor = offset.interpolate({
		inputRange: [0, 100],
		outputRange: ["rgba(240, 204, 15, 1)", "rgba(255, 255, 255, 1)"]
	});
	if (props.alertTwo) {
		Animated.loop(
			Animated.sequence([
				Animated.timing(offset, {
					toValue: 100,
					duration: 250
				}),
				Animated.timing(offset, {
					toValue: 0,
					duration: 250
				})
			])
		).start();
	}
	return (
		<View style={styles.container}>
			<View style={styles.timerRow}>
				<AnimatedText
					testID="time"
					style={[
						styles.timer,
						props.alertTwo
							? {
									color: blinkingColor
							  }
							: props.alertOne
							? { color: defaultStyles.colors.yellow }
							: {}
					]}
					fontWeight="bold"
				>
					{props.time}
				</AnimatedText>
				<View style={styles.buttons}>
					{props.enablePlayButton && (
						<Touchable
							testID="playButton"
							onPress={props.onPressPlayButton}
						>
							<View style={styles.playButtonContainer}>
								<Icon
									style={styles.playButtonIcon}
									name={props.isRunning ? "pause" : "play"}
								/>
							</View>
						</Touchable>
					)}
					<Touchable
						testID="resetButton"
						onPress={props.onPressResetButoon}
					>
						<View style={styles.resetButtonContainer}>
							<Icon
								style={styles.resetButtonIcon}
								name={"redo-alt"}
							/>
						</View>
					</Touchable>
				</View>
			</View>
		</View>
	);
}
