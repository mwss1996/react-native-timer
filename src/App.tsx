import * as React from "react";
import { LoadingContainer } from "./screens/loading/LoadingContainer";
import { StoreContainer } from "./store/StoreContainer";
import { ConnectedMainContainer } from "./screens/main/MainContainer";

export function App() {
	return (
		<StoreContainer loadingScreen={<LoadingContainer />}>
			<ConnectedMainContainer />
		</StoreContainer>
	);
}
