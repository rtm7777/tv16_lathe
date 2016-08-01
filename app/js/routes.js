import React from "react";
import { Route, Redirect, IndexRoute } from "react-router";

import GearBox from "./pages/gearbox";
import Documentation from "./pages/documentation";

export default (
	<Route path='/'>
		<Route path="documentation/" component={Documentation}/>
		<IndexRoute component={GearBox} />
	</Route>
);
