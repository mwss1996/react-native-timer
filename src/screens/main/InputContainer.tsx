import * as React from "react";
import { Keyboard } from "react-native";
import { useDispatch } from "react-redux";
import { createTimer } from "../../store/reducers/timers/actions";
import { coerceToNumber } from "../../store/utils/helperFunctions";
import { Input } from "./presentational/Input";

export function InputContainer() {
	const dispatch = useDispatch();
	const [textInputValue, setTextInputValue] = React.useState("");
	function onTextInputValueChange(text: string) {
		const numericTextArray = text.match(/\d+/g);
		if (numericTextArray && numericTextArray.length > 0) {
			const numbers = numericTextArray.join("");
			const splitIndex = 2;
			setTextInputValue(
				numbers.length > splitIndex
					? numbers.substring(0, splitIndex) +
							":" +
							numbers.substring(splitIndex, splitIndex * 2)
					: numbers
			);
		} else {
			setTextInputValue("");
		}
	}
	function onPressSetTime() {
		if (textInputValue && textInputValue.length === 5) {
			const minutes = coerceToNumber(textInputValue.substring(0, 2));
			const seconds = coerceToNumber(textInputValue.substring(3, 5));
			if (
				(minutes > 0 && minutes < 60) ||
				(seconds > 0 && seconds < 60)
			) {
				Keyboard.dismiss();
				dispatch(createTimer(0, minutes, seconds, new Date()));
				setTextInputValue("");
			}
		}
	}
	return (
		<Input
			textInputValue={textInputValue}
			onTextInputValueChange={onTextInputValueChange}
			onPressSetTime={onPressSetTime}
			enableSetTime={textInputValue !== ""}
		/>
	);
}
