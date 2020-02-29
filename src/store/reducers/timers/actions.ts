export const CREATER_TIMER = "CREATE_TIMER";
export const DELETE_TIMER = "DELETE_TIMER";

interface CreateTimerAction {
	type: typeof CREATER_TIMER;
	hours: number;
	minutes: number;
	seconds: number;
	dateTime: Date;
}
interface DeleteTimerAction {
	type: typeof DELETE_TIMER;
	timerId: string;
}
export function createTimer(
	hours: number,
	minutes: number,
	seconds: number,
	dateTime: Date
): CreateTimerAction {
	return {
		type: CREATER_TIMER,
		hours,
		minutes,
		seconds,
		dateTime
	};
}
export function deleteTimer(timerId: string): DeleteTimerAction {
	return {
		type: DELETE_TIMER,
		timerId
	};
}
export type TimerAction = CreateTimerAction | DeleteTimerAction;
