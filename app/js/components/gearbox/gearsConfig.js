import React from 'react';
import { connect } from 'react-redux';
import { getGearboxConfig, changeThreadType, toggleApprox } from '../../gearbox/gearboxActions';

import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';

@connect(
	(state) => ({
		threadType: state.gearboxConfigReducer.get('threadType'),
		approxChecked: state.gearboxConfigReducer.get('approxChecked')
	}),
	(dispatch) => ({
		showConfig: (type, value, approx) => dispatch(getGearboxConfig(type, value, approx)),
		toggleApprox: () => dispatch(toggleApprox()),
		changeThreadType: (type) => dispatch(changeThreadType(type))
	})
)
class GearsConfig extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: ''
		};
		this.pmmInputParams = {
			min: 0.15,
			max: 6,
			step: 0.05,
			floatingLabelText: '0.15 ... 6'
		};
		this.tpiInputParams = {
			min: 4,
			max: 160,
			step: 1,
			floatingLabelText: '4 ... 160'
		};
	}

	showConfig = () => {
		const value = this.refs.input.getValue();
		if (value) {
			this.props.showConfig(this.props.threadType, Number(value), this.props.approxChecked);
		}
	}

	threadTypeChanded = (e, value) => {
		this.props.changeThreadType(value);
		this.setState({
			inputValue: ''
		});
	}

	inputChanged = (e) => {
		this.setState({
			inputValue: e.target.value
		});
	}

	inputKeyPressed = (e) => {
		if (e.key === 'Enter') {
			this.showConfig();
		}
	}

	render() {
		const inputParams = this.props.threadType === 'pmm' ? this.pmmInputParams : this.tpiInputParams;
		return (
			<div className='thread-config'>
				<div className='thread-type'>
					<RadioButtonGroup name='threadType' defaultSelected={this.props.threadType} onChange={this.threadTypeChanded}>
						<RadioButton
							value='pmm'
							label='pitch/mm'
							style={{margin: '0.7em 0'}}
						/>
						<RadioButton
							value='tpi'
							label='tpi'
						/>
					</RadioButtonGroup>
				</div>
				<div className='config-summary'>
					<div>
						<Checkbox label='approx' checked={this.props.approxChecked} onCheck={this.props.toggleApprox} />
					</div>
					<div>
						<TextField {...inputParams}
							value={this.state.inputValue}
							onChange={this.inputChanged}
							onKeyPress={this.inputKeyPressed}
							ref='input'
							type='number'
							style={{width: '150px'}}
						/>
					</div>
					<div>
						<RaisedButton onTouchTap={this.showConfig} label='Show config' primary />
					</div>
				</div>
			</div>
		);
	}
}

export default GearsConfig;
