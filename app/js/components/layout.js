import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { changeLocation } from '../location/locationActions';

import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';

@connect(
	(state) => ({
		location: state.locationReducer.location
	}),
	(dispatch) => ({
		changeTitle: (location) => {
			dispatch(changeLocation(location));
		}
	})
)
class Layout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
		this.pages = {
			GearBox: '/',
			Documentation: '/documentation/'
		};
	}

	openDrawer = () => {
		this.setState({
			open: true
		});
	}

	pageSelected = (e, value) => {
		this.props.changeTitle(value);
		this.setState({open: false});
		hashHistory.push(this.pages[value]);
	}

	render() {
		const drawerProps = {
			docked: false,
			width: 200,
			open: this.state.open,
			onRequestChange: (open) => this.setState({open})
		};

		const items = Object.keys(this.pages).map((key, i) => {
			return (
				<MenuItem key={i} value={key}>{key}</MenuItem>
			);
		});

		return (
			<div>
				<AppBar title={this.props.location} onLeftIconButtonTouchTap={this.openDrawer}/>
				<Drawer {...drawerProps}>
					<Menu onChange={this.pageSelected}>
						{items}
					</Menu>
				</Drawer>
				{this.props.children}
			</div>
		);
	}
}

export default Layout;
