import React from 'react';
import { hashHistory } from 'react-router';

import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';

class Layout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			title: 'GearBox'
		};
		this.items = {
			GearBox: '/',
			Documentation: '/documentation/'
		};
	}

	openDrawer = () => {
		this.setState({
			open: true,
			title: this.state.title
		});
	}

	pageSelected = (e, value) => {
		this.setState({
			open: false,
			title: value
		});
		hashHistory.push(this.items[value]);
	}

	render() {
		const drawerProps = {
			docked: false,
			width: 200,
			open: this.state.open,
			onRequestChange: (open) => this.setState({
				open,
				title: this.state.title
			})
		};

		const items = Object.keys(this.items).map((key, i) => {
			return (
				<MenuItem key={i} value={key}>{key}</MenuItem>
			);
		});

		return (
			<div>
				<AppBar title={this.state.title} onLeftIconButtonTouchTap={this.openDrawer}/>
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
