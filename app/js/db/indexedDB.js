import Dexie from 'dexie';
import model from './model';
import { metricGears, imperialGears, defaultDgears } from '../gearbox/gearboxConfig';

class DataBase {
	constructor() {
		this.db = new Dexie('tv-16');
		this.db.version(1).stores(model);
		this.db.open();
		if (localStorage.getItem('configGenerated') !== 'true') {
			this.initializeDB();
		}
	}

	getInstance() {
		return this.db;
	}

	initializeDB() {
		const gears = new Array().concat(metricGears, imperialGears);
		let gearConfigs = [];
		let pmm = 0;
		defaultDgears.forEach((d) => {
			gears.forEach((c) => {
				if (c !== d && c < 100) {
					gears.forEach((b) => {
						if (b !== d && b < 100) {
							gears.forEach((a) => {
								if (a <= 60) {
									pmm = 3*(a/b)*(c/d);
									gearConfigs.push({
										a,b,c,d,pmm,
										tpi: 25.4/pmm,
										feed: pmm/20
									});
								}
							});
						}
					});
				}
			});
		});
		this.db.gearConfigs.bulkAdd(gearConfigs).then(() => {
			localStorage.setItem('configGenerated', 'true');
			console.log('config added');
		});
	}

	findConfigsByPmm(value, approx = false) {
		if (approx) {
			return this.db.gearConfigs.where('pmm').between(value-0.02, value+0.02, true, true).toArray();
		} else {
			return this.db.gearConfigs.where('pmm').equals(value).toArray();
		}
	}

	findConfigsByTpi(value, approx = false) {
		if (approx) {
			return this.db.gearConfigs.where('tpi').between(value-0.25, value+0.25, true, true).toArray();
		} else {
			return this.db.gearConfigs.where('tpi').between(value-0.15, value+0.15, true, true).toArray();
		}
	}
}

const db = new DataBase();

export default db;
