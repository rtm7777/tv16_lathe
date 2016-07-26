class MenuBar {
	constructor() {
		this.mainMenu;
		this.createMainMenu();
		this.createSubmenu();
	}

	createMainMenu() {
		this.mainMenu = new nw.Menu({ type: 'menubar' });
	}

	createSubmenu() {
		this.subMenu = new nw.Menu();
		this.subMenu.append(new nw.MenuItem({
			label: 'Item A',
			click: function() {
				console.log("I'm clicked");
			},
		}));
		this.subMenu.append(new nw.MenuItem({
			label: 'Item B'
		}));
	}

	appendMenu(win) {
		this.mainMenu.append(new nw.MenuItem({
			label: 'File',
			submenu: this.subMenu
		}));
		win.menu = this.mainMenu;
	}
}

export default MenuBar;
