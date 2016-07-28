import React from "react";
import { Route, Redirect, IndexRoute } from "react-router";

import GearBox from "./pages/gearbox";

export default (
	<Route path='/'>
		<IndexRoute component={GearBox} />
	</Route>
);
