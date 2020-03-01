import React from "react";
import { Input } from "../../screens/main/presentational/Input";
import { Message } from "../../screens/main/presentational/Message";
import { Timer } from "../../screens/main/presentational/Timer";
import { SpeedButton } from "../../screens/main/presentational/SpeedButton";
import { HistoryRow } from "../../screens/main/presentational/HistoryRow";
import { render, fireEvent } from "react-native-testing-library";

const alphabet = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";

describe("Input", () => {
	test("Check if the input displays the value.", () => {
		const { getByTestId } = render(<Input textInputValue={alphabet} />);
		const textInput = getByTestId("textInput");
		expect(textInput.props.value).toBe(alphabet);
	});
	test("Check if the text input handler is fired on text change.", () => {
		const handleChange = jest.fn();
		const { getByTestId } = render(
			<Input onTextInputValueChange={handleChange} />
		);
		const textInput = getByTestId("textInput");
		fireEvent.changeText(textInput, "0");
		expect(handleChange).toHaveBeenCalledTimes(1);
	});
	test("Check if the button handler is fired on button press when enabled.", () => {
		const handler = jest.fn();
		const { getByTestId } = render(
			<Input onPressSetTime={handler} enableSetTime={true} />
		);
		const button = getByTestId("button");
		fireEvent.press(button);
		expect(handler).toHaveBeenCalledTimes(1);
	});
	test("Check if the button handler is not fired on button press when disabled.", () => {
		const handler = jest.fn();
		const { getByTestId } = render(
			<Input onPressSetTime={handler} enableSetTime={false} />
		);
		const button = getByTestId("button");
		fireEvent.press(button);
		expect(handler).toHaveBeenCalledTimes(0);
	});
});
describe("Message", () => {
	test("Check if it displays the message prop.", () => {
		const { getByTestId } = render(<Message message={alphabet} />);
		const component = getByTestId("message");
		expect(component.props.children).toBe(alphabet);
	});
});
describe("Timer", () => {
	test("Check if it displays the time.", () => {
		const { getByTestId } = render(<Timer time={alphabet} />);
		const text = getByTestId("time");
		expect(text.props.children).toBe(alphabet);
	});
	test("Check if the play button handler is fired on button press when enabled.", () => {
		const handler = jest.fn();
		const { getByTestId } = render(
			<Timer onPressPlayButton={handler} enablePlayButton={true} />
		);
		const button = getByTestId("playButton");
		fireEvent.press(button);
		expect(handler).toHaveBeenCalledTimes(1);
	});
	test("Check if the play button is not show when disabled.", () => {
		const { queryByTestId } = render(<Timer enablePlayButton={false} />);
		expect(queryByTestId("playButton")).toBeNull();
	});
	test("Check if the reset button handler is fired on button press.", () => {
		const handler = jest.fn();
		const { getByTestId } = render(
			<Timer onPressResetButoon={handler} enablePlayButton={true} />
		);
		const button = getByTestId("resetButton");
		fireEvent.press(button);
		expect(handler).toHaveBeenCalledTimes(1);
	});
});
describe("SpeedButton", () => {
	test("Check if it displays the label.", () => {
		const { getByTestId } = render(<SpeedButton label={alphabet} />);
		const text = getByTestId("label");
		expect(text.props.children).toBe(alphabet);
	});
	test("Check if the button handler is fired on button press.", () => {
		const handler = jest.fn();
		const { getByTestId } = render(<SpeedButton onClick={handler} />);
		const button = getByTestId("button");
		fireEvent.press(button);
		expect(handler).toHaveBeenCalledTimes(1);
	});
});
describe("HistoryRow", () => {
	test("Check if it displays the time.", () => {
		const { getByTestId } = render(
			<HistoryRow date={new Date()} time={alphabet} />
		);
		const text = getByTestId("time");
		expect(text.props.children).toBe(alphabet);
	});
	test("Check if the remove button handler is fired on button press.", () => {
		const handler = jest.fn();
		const { getByTestId } = render(
			<HistoryRow date={new Date()} onPressRemoveButton={handler} />
		);
		const button = getByTestId("removeButton");
		fireEvent.press(button);
		expect(handler).toHaveBeenCalledTimes(1);
	});
	test("Check if the timer button handler is fired on button press.", () => {
		const handler = jest.fn();
		const { getByTestId } = render(
			<HistoryRow date={new Date()} onPressTimer={handler} />
		);
		const button = getByTestId("timerButton");
		fireEvent.press(button);
		expect(handler).toHaveBeenCalledTimes(1);
	});
});
