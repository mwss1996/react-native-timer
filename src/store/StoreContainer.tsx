import AsyncStorage from "@react-native-community/async-storage";
import * as React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reduceReducers } from "./reducers/reduceReducers";
import { EMPTY_STATE, StoreStateType } from "./states";
import { parseJson } from "./utils/jsonFunctions";
import { timersReducer } from "./reducers/timers/reducer";

const STORE_KEY = "STORE";
interface StoreContainerProps {
	children: React.ReactNode;
	loadingScreen: JSX.Element;
}
export function StoreContainer(props: StoreContainerProps) {
	const [initialState, setInitialState] = React.useState<StoreStateType>();
	if (!initialState) {
		AsyncStorage.getItem(STORE_KEY).then(stateJSON => {
			setInitialState(stateJSON ? parseJson(stateJSON) : EMPTY_STATE);
		});
		return props.loadingScreen;
	}
	const store = createStore(reduceReducers(initialState, timersReducer));
	store.subscribe(() =>
		AsyncStorage.setItem(STORE_KEY, JSON.stringify(store.getState()))
	);
	return <Provider store={store}>{props.children}</Provider>;
}
