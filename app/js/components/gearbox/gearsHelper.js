import React from 'react';
import { connect } from 'react-redux';
import {  } from '../../gearbox/gearboxActions';

import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';

@connect(
	(state) => ({

	}),
	(dispatch) => ({

	})
)
class GearsFilters extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			open: false
		};
	}

	handleOpen = () => {
		this.setState({open: true});
	};

	handleClose = () => {
		this.setState({open: false});
	};

	render() {
		return (
			<div className='gears-helper'>
				<Dialog open={this.state.open} onRequestClose={this.handleClose} contentStyle={{width: '42%', minHeigth: '500px', minWidth: '430px', maxWidth: 'none'}} >
					<img src='/public/gears.png' style={{maxWidth: '100%', maxHeight: '100%'}} />
				</Dialog>
				<div>
					<RaisedButton label='Thread Calculator' primary />
				</div>
				<div>
					<RaisedButton label='Gears Visualization' primary onTouchTap={this.handleOpen} />
				</div>
			</div>
		);
	}
}

export default GearsFilters;
