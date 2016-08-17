import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { changeLocation } from '../location/locationActions';

import Drawer from 'material-ui/Drawer';
import FontIcon from 'material-ui/FontIcon';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';

@connect(
	(state) => ({
		location: state.locationReducer.get('location')
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
			gearBox: {
				label: 'GearBox',
				location: '/',
				icon: 'fa-cogs'
			},
			documentation: {
				label: 'Documentation',
				location: '/documentation/',
				icon: 'fa-file-text'
			}
		};
	}

	openDrawer = () => {
		this.setState({
			open: true
		});
	}

	pageSelected = (e, value) => {
		this.setState({open: false});
		this.props.changeTitle(this.pages[value].label);
		hashHistory.push(this.pages[value].location);
	}

	render() {
		const drawerProps = {
			docked: false,
			width: 280,
			open: this.state.open,
			onRequestChange: (open) => this.setState({open})
		};

		const items = Object.keys(this.pages).map((key, i) => {
			const itemProps = {
				key: i,
				value: key,
				leftIcon: <FontIcon className={`fa ${this.pages[key].icon}`}/>
			};
			return (
				<MenuItem {...itemProps}>{this.pages[key].label}</MenuItem>
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
