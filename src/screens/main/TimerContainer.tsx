import * as React from "react";
import { View } from "react-native";
import { TimerType } from "../../store/states";
import { Message } from "./presentational/Message";
import { SpeedButton } from "./presentational/SpeedButton";
import { SpeedButtons } from "./presentational/SpeedButtons";
import { Timer } from "./presentational/Timer";
import TrackPlayer from "react-native-track-player";
import { appendLeadingZeros } from "../../store/utils/helperFunctions";

TrackPlayer.setupPlayer().then(async () => {
	await TrackPlayer.add({
		id: "alarm",
		url: require("./assets/alarm.mp3"),
		title: "Alarm",
		artist: "Timer"
	});
});
interface TimerContainerProps {
	currentTimer: TimerType | null;
}
interface TimerContainerState {
	hours: number;
	minutes: number;
	seconds: number;
	speed: number;
	isRunning: boolean;
	timesup: boolean;
}
export class TimerContainer extends React.Component<
	TimerContainerProps,
	TimerContainerState
> {
	timeout: NodeJS.Timeout | null = null;
	initialTime: {
		hours: number;
		minutes: number;
		seconds: number;
	};
	constructor(props: TimerContainerProps) {
		super(props);
		this.initialTime = props.currentTimer
			? {
					hours: props.currentTimer.hours,
					minutes: props.currentTimer.minutes,
					seconds: props.currentTimer.seconds
			  }
			: {
					hours: 0,
					minutes: 0,
					seconds: 0
			  };
		this.state = {
			hours: this.initialTime.hours,
			minutes: this.initialTime.minutes,
			seconds: this.initialTime.seconds,
			speed: 1,
			isRunning: false,
			timesup: false
		};
	}
	componentDidUpdate(prevProps: TimerContainerProps) {
		const currentTimerId = this.props.currentTimer
			? this.props.currentTimer.id
			: null;
		const previousTimerId = prevProps.currentTimer
			? prevProps.currentTimer.id
			: null;
		if (currentTimerId !== previousTimerId) {
			TrackPlayer.stop();
			if (this.timeout) {
				clearTimeout(this.timeout);
				this.timeout = null;
			}
			this.initialTime = this.props.currentTimer
				? {
						hours: this.props.currentTimer.hours,
						minutes: this.props.currentTimer.minutes,
						seconds: this.props.currentTimer.seconds
				  }
				: {
						hours: 0,
						minutes: 0,
						seconds: 0
				  };
			this.setState({
				hours: this.initialTime.hours,
				minutes: this.initialTime.minutes,
				seconds: this.initialTime.seconds,
				speed: this.state.speed,
				isRunning: false,
				timesup: false
			});
		}
	}
	tick() {
		if (this.state.isRunning && !this.timeout) {
			this.timeout = setTimeout(() => {
				this.timeout = null;
				if (this.state.seconds > 0) {
					this.setState({
						seconds: this.state.seconds - 1
					});
				} else {
					if (this.state.minutes > 0) {
						this.setState({
							minutes: this.state.minutes - 1,
							seconds: 59
						});
					} else {
						if (this.state.hours > 0) {
							this.setState({
								hours: this.state.hours - 1,
								minutes: 59
							});
						}
					}
				}
			}, 1000 / this.state.speed);
		}
		if (!this.state.isRunning && this.timeout) {
			clearTimeout(this.timeout);
			this.timeout = null;
		}
	}
	prepareMessage(remainingSeconds: number) {
		let message = "Running";
		if (!this.props.currentTimer) {
			message = "Set a timer";
		} else {
			if (remainingSeconds === 0) {
				message = "Time's Up!";
			} else {
				if (this.state.isRunning) {
					const halfTotalSeconds =
						(this.initialTime.hours * 60 * 60 +
							this.initialTime.minutes * 60 +
							this.initialTime.seconds) /
						2;
					if (remainingSeconds < halfTotalSeconds) {
						message = "More than halfway there!";
					}
				} else {
					message = "Paused";
				}
			}
		}
		return message;
	}
	render() {
		this.tick();
		const remainingSeconds =
			this.state.hours * 60 * 60 +
			this.state.minutes * 60 +
			this.state.seconds;
		if (
			this.props.currentTimer &&
			this.state.isRunning &&
			remainingSeconds === 0 &&
			this.state.timesup === false
		) {
			TrackPlayer.play();
			this.setState({
				timesup: true
			});
		}
		return (
			<View>
				<Message message={this.prepareMessage(remainingSeconds)} />
				<Timer
					alertOne={
						this.props.currentTimer !== null &&
						remainingSeconds <= 20
					}
					alertTwo={remainingSeconds <= 10 && remainingSeconds > 0}
					time={
						appendLeadingZeros(this.state.minutes, 2) +
						":" +
						appendLeadingZeros(this.state.seconds, 2)
					}
					isRunning={this.state.isRunning}
					enablePlayButton={remainingSeconds !== 0}
					onPressPlayButton={() =>
						this.setState({
							isRunning: !this.state.isRunning
						})
					}
					onPressResetButoon={() => {
						TrackPlayer.stop();
						this.setState({
							hours: this.initialTime.hours,
							minutes: this.initialTime.minutes,
							seconds: this.initialTime.seconds,
							isRunning: false,
							timesup: false
						});
					}}
				/>
				<SpeedButtons
					speedButtons={[
						<SpeedButton
							key={0}
							isActive={this.state.speed === 1}
							label="1x"
							isLastOfRow={false}
							onClick={() =>
								this.setState({
									speed: 1
								})
							}
						/>,
						<SpeedButton
							key={1}
							isActive={this.state.speed === 1.5}
							label="1.5x"
							isLastOfRow={false}
							onClick={() =>
								this.setState({
									speed: 1.5
								})
							}
						/>,
						<SpeedButton
							key={2}
							isActive={this.state.speed === 2}
							label="2x"
							isLastOfRow={true}
							onClick={() =>
								this.setState({
									speed: 2
								})
							}
						/>
					]}
				/>
			</View>
		);
	}
}
