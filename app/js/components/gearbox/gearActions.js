import React from 'react';
import { connect } from 'react-redux';

import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';
import Checkbox from 'material-ui/Checkbox';

import { metricGears, imperialGears } from '../../gearbox/gearboxConfig';

@connect(
	state => ({})
)
class GearSelector extends React.Component {
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
		const actions = [
			<RaisedButton
				label="Cancel"
				primary
				onTouchTap={this.handleClose}
				style={{marginRight: '10px'}}
			/>,
			<RaisedButton
				label="Add"
				primary
				onTouchTap={this.handleClose}
			/>,
		];
		const inputParams = {
			min: 15,
			max: 100,
			step: 1,
			floatingLabelText: '15 ... 100',
			type: 'number'
		};
		return (
			<div>
				<RaisedButton label="Add gear" primary onTouchTap={this.handleOpen} />
				<Dialog title="Add gear" actions={actions} modal open={this.state.open} contentStyle={{width: '30em'}} >
					<div className='add-gear'>
						<p>z =</p>
						<TextField {...inputParams} ref='input' style={{width: '150px'}} />
						<Checkbox label='can be used as "d"' style={{width: '12.2em', margin: '10px 0'}} />
					</div>
				</Dialog>
			</div>
		);
	}
}

export default GearSelector;
