import { Reducer } from "react";

export function reduceReducers<T>(
	initialState: T,
	...reducers: Reducer<T, any>[]
) {
	return (state: T | undefined, action: any) =>
		reducers.reduce(
			(state, reducer) => reducer(state, action),
			state || initialState
		);
}
