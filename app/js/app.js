import gui from 'nw.gui';
import React from 'react';
import {render} from 'react-dom';

import {Router, hashHistory} from 'react-router';
import routes from './routes';

import MenuBar from './menuBar/menu';

const rootEl = document.getElementById('app');

let menuBar = new MenuBar(gui);
menuBar.appendMenu();

render((
	<Router history={hashHistory}>
		{routes}
	</Router>
), rootEl);
