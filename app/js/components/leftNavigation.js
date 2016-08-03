import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class LeftNavigation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {open: true};
	}

	handleClose = () => this.setState({open: false});

	render() {
		return (
			<Drawer
			  docked={false}
			  width={200}
			  open={this.state.open}
			  onRequestChange={(open) => this.setState({open})}
			>
				<MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
				<MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
			</Drawer>
		);
	}
}

export default LeftNavigation;
