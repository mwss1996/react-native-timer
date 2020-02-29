import { StoreStateType } from "../states";

export function sortTimers(timers: StoreStateType["timers"]) {
	return Object.values(timers).sort(
		(a, b) => b.dateTime.getTime() - a.dateTime.getTime()
	);
}
export function findLatestTimer(timers: StoreStateType["timers"]) {
	const sortedTimers = sortTimers(timers);
	return sortedTimers[0] ? sortedTimers[0] : null;
}
