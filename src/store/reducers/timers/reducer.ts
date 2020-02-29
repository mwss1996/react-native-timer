import { StoreStateType } from "../../states";
import { CREATER_TIMER, DELETE_TIMER, TimerAction } from "./actions";
import uuidv4 from "uuid/v4";

export function timersReducer(
	state: StoreStateType,
	action: TimerAction
): StoreStateType {
	switch (action.type) {
		case CREATER_TIMER:
			const newTimerId = uuidv4();
			return {
				...state,
				timers: {
					...state.timers,
					[newTimerId]: {
						id: newTimerId,
						hours: action.hours,
						minutes: action.minutes,
						seconds: action.seconds,
						dateTime: action.dateTime
					}
				}
			};
		case DELETE_TIMER:
			const timers = Object.values(state.timers).reduce(
				(accumulator, timer) => {
					if (timer.id === action.timerId) {
						return accumulator;
					}
					return {
						...accumulator,
						[timer.id]: timer
					};
				},
				{}
			);
			return {
				timers
			};
		default:
			return state;
	}
}
