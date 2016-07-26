import gui from "nw.gui";
import MenuBar from './menuBar/menu';

const win = gui.Window.get();

let menuBar = new MenuBar();
menuBar.appendMenu(win);

win.showDevTools();
