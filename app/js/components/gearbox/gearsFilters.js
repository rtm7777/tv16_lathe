import React from 'react';
import { connect } from 'react-redux';
import { toggleUniqueGears } from '../../gearbox/gearboxActions';

import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
// import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';

@connect(
	(state) => ({
		uniqueGearsChecked: state.gearboxFiltersReducer.get('uniqueGearsChecked')
	}),
	(dispatch) => ({
		toggleUniqueGears: () => dispatch(toggleUniqueGears())
	})
)
class GearsFilters extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='gears-filters'>
				<p>Filters:</p>
				<Checkbox label='unique gears' checked={this.props.uniqueGearsChecked} onCheck={this.props.toggleUniqueGears} style={{width: '25%'}} />
			</div>
		);
	}
}

export default GearsFilters;
