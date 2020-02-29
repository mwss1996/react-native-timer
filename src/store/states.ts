interface Entity {
	id: string;
}
export interface TimerType extends Entity {
	hours: number;
	minutes: number;
	seconds: number;
	dateTime: Date;
}
export interface StateSlice<T> {
	[id: string]: T;
}
export interface StoreStateType {
	timers: StateSlice<TimerType>;
}
export const EMPTY_STATE: StoreStateType = {
	timers: {}
};
