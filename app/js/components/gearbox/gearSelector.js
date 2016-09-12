import React from 'react';
import { connect } from 'react-redux';
import storage from '../../services/storage';
import { setGearsConfig, gearSelected } from '../../gearbox/gearboxActions';

import { List, ListItem } from 'material-ui/List';
import FontIcon from 'material-ui/FontIcon';
import Subheader from 'material-ui/Subheader';
import Checkbox from 'material-ui/Checkbox';

import { metricGears, imperialGears, allGears } from '../../gearbox/gearboxConfig';

const GearSelectorItem = ({value, defaultChecked, onCheck}) => {
	const itemProps = {
		primaryText: `z = ${value}`,
		leftCheckbox: <Checkbox {...{value, defaultChecked, onCheck}} />
	};
	return (
		<ListItem {...itemProps} />
	);
};

@connect(
	(state) => ({

	}),
	(dispatch) => ({
		gearSelected: (gear, value) => dispatch(gearSelected(gear, value))
	})
)
class GearSelector extends React.Component {
	constructor(props) {
		super(props);
		this.initiallySelected = storage.getNumbersArray('selectedGears') || allGears;
	}

	onCheck = (e, value) => {
		this.props.gearSelected(Number(e.target.value), value);
	}

	render() {
		const customGears = [34, 32];
		const metricGearsItems = metricGears.map((gear) => {
			const checked = this.initiallySelected.includes(gear);
			return <GearSelectorItem key={gear} defaultChecked={checked} value={gear} onCheck={this.onCheck} />;
		});
		const imperialGearsItems = imperialGears.map((gear, i) => {
			const checked = this.initiallySelected.includes(gear);
			return <GearSelectorItem key={gear} defaultChecked={checked} value={gear} onCheck={this.onCheck} />;
		});
		const customGearsItems = customGears.map((gear, i) => {
			const checked = this.initiallySelected.includes(gear);
			return <GearSelectorItem key={gear} defaultChecked={checked} value={gear} onCheck={this.onCheck} />;
		});

		return (
			<List>
				<Subheader>Gears</Subheader>
				<ListItem
					primaryText="Metric gears"
					leftIcon={<FontIcon className={`fa fa-cogs`} />}
					primaryTogglesNestedList
					nestedItems={metricGearsItems}
				/>
				<ListItem
					primaryText="Imperial gears"
					leftIcon={<FontIcon className={`fa fa-cogs`} />}
					primaryTogglesNestedList
					nestedItems={imperialGearsItems}
				/>
				<ListItem
					primaryText="Custom gears"
					leftIcon={<FontIcon className={`fa fa-cogs`} />}
					initiallyOpen
					primaryTogglesNestedList
					nestedItems={customGearsItems}
				/>
			</List>
		);
	}
}

export default GearSelector;
