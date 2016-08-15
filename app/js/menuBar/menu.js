import { hashHistory } from 'react-router';
import { changeLocation } from '../location/locationActions';

class MenuBar {
	constructor(gui, store) {
		this.gui = gui;
		this.store = store;
		this.mainMenu = new nw.Menu({ type: 'menubar' });
		this.menu = {
			File: [
				{
					label: 'GearBox',
					click: () => {
						hashHistory.push('/');
						this.store.dispatch(changeLocation('GearBox'));
					}
				},
				{
					type: 'separator'
				},
				{
					label: 'Exit',
					click: () => this.gui.App.quit()
				}

			],
			Info: [
				{
					label: 'Documentation',
					click: () => {
						hashHistory.push('/documentation/');
						this.store.dispatch(changeLocation('Documentation'));
					}
				}
			]
		};

		this.createMenu();
	}

	createMenu() {
		Object.keys(this.menu).forEach((key) => {
			let subMenu = new nw.Menu();
			this.menu[key].forEach((submenu) => {
				subMenu.append(new nw.MenuItem(submenu));
			});
			this.mainMenu.append(new nw.MenuItem({
				label: key,
				submenu: subMenu
			}));
		});
	}

	appendMenu() {
		this.gui.Window.get().menu = this.mainMenu;
	}
}

export default MenuBar;
