import React from 'react';
import { connect } from 'react-redux';

import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

@connect(
	state => ({})
)
class GearsConfig extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		return (
			<div className='thread-config'>
				<div className='thread-type'>
					<RadioButtonGroup name="threadType" defaultSelected="p">
						<RadioButton
							value="p"
							label="pitch/mm"
							style={{width: '50%'}}
						/>
						<RadioButton
							value="t"
							label="tpi"
							style={{width: '50%'}}
						/>
					</RadioButtonGroup>
				</div>
				<div className='config-summary'>
					<div>
						<TextField floatingLabelText="0.15 ... 6" style={{width: '150px'}}/>
					</div>
					<div>
						<RaisedButton label="Show config" primary />
					</div>
				</div>
			</div>
		);
	}
}

export default GearsConfig;
