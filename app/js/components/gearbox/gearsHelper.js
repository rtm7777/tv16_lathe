import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import Chip from 'material-ui/Chip';

class GearsFilters extends React.Component {
	constructor(props) {
		super(props);
		this.dialogsState = {
			a: '',
			b: '',
			c: '',
			d: '',
			gears: false,
			calculator: false,
			feed: 0,
			pmm: 0,
			tpi: 0
		};
		this.state = this.dialogsState;
	}

	calculateThread = () => {
		const {a, b, c, d} = this.getValues();
		if (a && b && c && d) {
			const pmm = 3*(a/b)*(c/d);
			this.dialogsState.pmm = pmm;
			this.dialogsState.tpi = 25.4 / pmm;
			this.dialogsState.feed = pmm / 20;
		} else {
			this.resetCalculator();
		}
		this.updateState();
	};

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

	getValues() {
		let values = {};
		['a', 'b', 'c', 'd'].forEach((gear) => {
			let inputValue = this.refs[gear].getValue();
			let value = Number(inputValue);
			this.dialogsState[gear] = inputValue;
			if (value && value <= 100 && value > 15) {
				values[gear] = value;
			} else {
				values[gear] = 0;
			}
		});
		return values;
	}

	resetCalculator() {
		this.dialogsState.pmm = 0;
		this.dialogsState.tpi = 0;
		this.dialogsState.feed = 0;
	}

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
								<TextField
									value={this.state.a}
									onChange={this.calculateThread}
									ref='a' type='number'
									floatingLabelText='a'
									style={{width: '50px'}}
								/>
								<TextField
									value={this.state.b}
									onChange={this.calculateThread}
									ref='b'
									type='number'
									floatingLabelText='b'
									style={{width: '50px'}}
								/>
							</div>
							<span/>
							<div>
								<TextField
									value={this.state.c}
									onChange={this.calculateThread}
									ref='c'
									type='number'
									floatingLabelText='c'
									style={{width: '50px'}}
								/>
								<TextField
									value={this.state.d}
									onChange={this.calculateThread}
									ref='d'
									type='number'
									floatingLabelText='d'
									style={{width: '50px'}}
								/>
							</div>
						</div>
						<div className='calculator-results'>
							<Chip>{`feed = ${this.state.feed.toFixed(6)}`}</Chip>
							<Chip>{`pitch/mm = ${this.state.pmm.toFixed(6)}`}</Chip>
							<Chip>{`tpi = ${this.state.tpi.toFixed(6)}`}</Chip>
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
