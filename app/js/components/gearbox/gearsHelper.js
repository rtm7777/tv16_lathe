import React from 'react';
import { connect } from 'react-redux';
import {  } from '../../gearbox/gearboxActions';

import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import Chip from 'material-ui/Chip';

@connect(
	(state) => ({

	}),
	(dispatch) => ({

	})
)
class GearsFilters extends React.Component {
	constructor(props) {
		super(props);
		this.dialogsState = {
			gears: false,
			calculator: false
		};
		this.state = this.dialogsState;
	}

	openCalculator = () => {
		this.dialogsState.calculator = true;
		this.updateState();
	};

	openGears = () => {
		this.dialogsState.gears = true;
		this.updateState();
	};

	handleClose = () => {
		this.dialogsState.calculator = false;
		this.dialogsState.gears = false;
		this.updateState();
	};

	updateState() {
		this.setState(this.dialogsState);
	}

	render() {
		return (
			<div className='gears-helper'>
				<Dialog open={this.state.gears} onRequestClose={this.handleClose} contentStyle={{width: '42%', minHeigth: '500px', minWidth: '430px', maxWidth: 'none'}} >
					<img src='/public/gears.png' style={{maxWidth: '100%', maxHeight: '100%'}} />
				</Dialog>
				<Dialog title='Thread Calculator' open={this.state.calculator} onRequestClose={this.handleClose} contentStyle={{width: '42%'}} >
					<div className='thread-calculator'>
						<div className='input-fields'>
							<div>
								<TextField ref='a' type='number' floatingLabelText='a' style={{width: '50px'}} />
								<TextField ref='b' type='number' floatingLabelText='b' style={{width: '50px'}} />
							</div>
							<span/>
							<div>
								<TextField ref='c' type='number' floatingLabelText='c' style={{width: '50px'}} />
								<TextField ref='d' type='number' floatingLabelText='d' style={{width: '50px'}} />
							</div>
						</div>
						<div className='calculator-results'>
							<Chip>Text Chip</Chip>
							<Chip>Text Chip</Chip>
							<Chip>Text Chip</Chip>
						</div>
					</div>
				</Dialog>
				<div>
					<RaisedButton label='Thread Calculator' primary onTouchTap={this.openCalculator} />
				</div>
				<div>
					<RaisedButton label='Gears Visualization' primary onTouchTap={this.openGears} />
				</div>
			</div>
		);
	}
}

export default GearsFilters;
