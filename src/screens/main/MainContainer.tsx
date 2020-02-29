import * as React from "react";
import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { deleteTimer } from "../../store/reducers/timers/actions";
import { StoreStateType, TimerType } from "../../store/states";
import { InputContainer } from "./InputContainer";
import { History } from "./presentational/History";
import { HistoryRow } from "./presentational/HistoryRow";
import { Main } from "./presentational/Main";
import { TimerContainer } from "./TimerContainer";
import { findLatestTimer, sortTimers } from "../../store/utils/timersFunctions";

interface MainContainerProps {
	timers: StoreStateType["timers"];
	dispatch: Dispatch<AnyAction>;
}
interface MainContainerState {
	currentTimer: TimerType | null;
	setLatestTimer: boolean;
}
class MainContainer extends React.Component<
	MainContainerProps,
	MainContainerState
> {
	constructor(props: MainContainerProps) {
		super(props);
		this.state = {
			currentTimer: findLatestTimer(props.timers),
			setLatestTimer: false
		};
	}
	static getDerivedStateFromProps(
		nextProps: MainContainerProps,
		prevState: MainContainerState
	): MainContainerState | null {
		if (prevState.setLatestTimer) {
			return {
				currentTimer: findLatestTimer(nextProps.timers),
				setLatestTimer: false
			};
		}
		return null;
	}
	componentDidUpdate(prevProps: MainContainerProps) {
		const currentTimersLenght = Object.values(this.props.timers).length;
		const previousTimersLenght = Object.values(prevProps.timers).length;
		if (
			currentTimersLenght > previousTimersLenght ||
			(this.state.currentTimer &&
				!Object.prototype.hasOwnProperty.call(
					this.props.timers,
					this.state.currentTimer.id
				))
		) {
			this.setState({ setLatestTimer: true });
		}
	}
	render() {
		const historyRows = sortTimers(this.props.timers).map(timer => (
			<HistoryRow
				key={timer.id}
				date={timer.dateTime}
				hours={timer.hours}
				minutes={timer.minutes}
				seconds={timer.seconds}
				onPressRemoveButton={() =>
					this.props.dispatch(deleteTimer(timer.id))
				}
				onPressTimer={() => this.setState({ currentTimer: timer })}
			/>
		));
		return (
			<Main
				input={<InputContainer />}
				timer={
					<TimerContainer currentTimer={this.state.currentTimer} />
				}
				history={<History rows={historyRows} />}
			/>
		);
	}
}
export const ConnectedMainContainer = connect(
	(state: StoreStateType) => ({
		timers: state.timers
	}),
	dispatch => ({
		dispatch
	})
)(MainContainer);
