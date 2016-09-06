import gui from 'nw.gui';

import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { Provider } from 'react-redux';
import store from './store';

import { Router, hashHistory } from 'react-router';
import routes from './routes';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import MenuBar from './menuBar/menu';
import Layout from './components/layout';

const rootEl = document.getElementById('app');

injectTapEventPlugin();

const menuBar = new MenuBar(gui, store);
menuBar.appendMenu();

render((
	<MuiThemeProvider>
		<Provider store={store}>
			<Layout>
				<Router history={hashHistory}>
					{routes}
				</Router>
			</Layout>
		</Provider>
	</MuiThemeProvider>
), rootEl);
