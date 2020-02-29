import * as React from "react";
import { View, StyleSheet, ScrollView, TextInput } from "react-native";
import { Input } from "./Input";
import { defaultStyles } from "../../shared/defaultStyles";
import { Logo } from "./Logo";
import { Timer } from "./Timer";
import { Text } from "../../shared/Text";
import { SpeedButtons } from "./SpeedButtons";
import { Message } from "./Message";
import { History } from "./History";
import { HistoryRow } from "./HistoryRow";
import { TimerType } from "../../../store/states";

const styles = StyleSheet.create({
	container: {
		backgroundColor: defaultStyles.colors.wine,
		flexGrow: 1
	}
});
interface MainProps {
	input: JSX.Element;
	timer: JSX.Element;
	history: JSX.Element;
}
export function Main(props: MainProps) {
	return (
		<ScrollView
			style={styles.container}
			keyboardShouldPersistTaps={"handled"}
		>
			<Logo />
			{props.input}
			{props.timer}
			{props.history}
		</ScrollView>
	);
}
