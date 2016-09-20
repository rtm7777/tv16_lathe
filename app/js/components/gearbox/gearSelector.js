import React from 'react';
import { connect } from 'react-redux';
import storage from '../../services/storage';
import { setGearsConfig, gearSelected, deleteGearConfigs } from '../../gearbox/gearboxActions';

import { List, ListItem } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import Subheader from 'material-ui/Subheader';
import Checkbox from 'material-ui/Checkbox';

import { metricGears, imperialGears, allGears } from '../../gearbox/gearboxConfig';

const GearSelectorItem = ({value, defaultChecked, onCheck, rightIconButton}) => {
	const itemProps = {
		primaryText: `z = ${value}`,
		leftCheckbox: <Checkbox {...{value, defaultChecked, onCheck}} />
	};
	if (rightIconButton) {
		itemProps.rightIconButton = rightIconButton;
	}
	return (
		<ListItem {...itemProps} />
	);
};

@connect(
	(state) => ({
		customGears: state.gearboxReducer.get('customGears')
	}),
	(dispatch) => ({
		gearSelected: (gear, value) => dispatch(gearSelected(gear, value)),
		removeGear: (gear) => dispatch(deleteGearConfigs(gear))
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

	onRemove = (e) => {
		this.props.removeGear(Number(e.currentTarget.value));
	}

	render() {
		const metricGearsItems = metricGears.map((gear) => {
			const checked = this.initiallySelected.includes(gear);
			return <GearSelectorItem key={gear} defaultChecked={checked} value={gear} onCheck={this.onCheck} />;
		});
		const imperialGearsItems = imperialGears.map((gear) => {
			const checked = this.initiallySelected.includes(gear);
			return <GearSelectorItem key={gear} defaultChecked={checked} value={gear} onCheck={this.onCheck} />;
		});
		const customGearsItems = this.props.customGears.map((gear) => {
			const checked = this.initiallySelected.includes(gear);
			return (<GearSelectorItem
				key={gear}
				defaultChecked={checked}
				value={gear}
				onCheck={this.onCheck}
				rightIconButton={
					<IconButton value={gear} onTouchTap={this.onRemove}>
						<FontIcon className={`fa fa-times`} />
					</IconButton>
				}
			/>);
		}).toArray();

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
