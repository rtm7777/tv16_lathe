import Dexie from 'dexie';
import model from './model';
import storage from '../services/storage';
import { metricGears, imperialGears, defaultDgears, dGears } from '../gearbox/gearboxConfig';

class DataBase {
	constructor() {
		this.db = new Dexie('tv-16');
		this.db.version(1).stores(model);
		this.db.open();
		if (storage.get('configGenerated') !== 'true') {
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
			storage.set('configGenerated', 'true');
		});
	}

	addGear(z, asD = false) {
		const newGear = Number(z);
		const allGears = [].concat(metricGears, imperialGears, (storage.getNumbersArray('customGears') || []));
		let dGearsArray = dGears;
		let gearConfigs = [];
		let pmm = 0;
		if (newGear && newGear > 15 && newGear < 100 && !allGears.includes(newGear)) {
			const gears = allGears.concat(newGear);
			if (asD) {
				dGearsArray.push(newGear);
			}
			dGearsArray.forEach((d) => {
				gears.forEach((c) => {
					if (c !== d &&  c < 100) {
						gears.forEach((b) => {
							if (b !== d &&  b < 100) {
								gears.forEach((a) => {
									if (a <= 60 && a !== d && (a === newGear || b === newGear || c === newGear || d === newGear)) {
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
		}
		if (gearConfigs.length) {
			return this.db.gearConfigs.bulkAdd(gearConfigs);
		}
		return Promise.resolve();
	}

	removeGear(z) {
		const gearToRemove = Number(z);
		if (gearToRemove && ![].concat(metricGears, imperialGears).includes(gearToRemove)) {
			return this.db.gearConfigs.where('a').equals(gearToRemove)
			.or('b').equals(gearToRemove)
			.or('c').equals(gearToRemove)
			.or('d').equals(gearToRemove)
			.delete();
		}
		return Promise.resolve();
	}

	findConfigsByPmm(value, gears, approx = false) {
		if (approx) {
			return this.db.gearConfigs.where('pmm').between(value-0.02, value+0.02, true, true).and(item => this._includes(gears, item)).toArray();
		} else {
			return this.db.gearConfigs.where('pmm').equals(value).and(item => this._includes(gears, item)).toArray();
		}
	}

	findConfigsByTpi(value, gears, approx = false) {
		if (approx) {
			return this.db.gearConfigs.where('tpi').between(value-0.25, value+0.25, true, true).and(item => this._includes(gears, item)).toArray();
		} else {
			return this.db.gearConfigs.where('tpi').between(value-0.05, value+0.05, true, true).and(item => this._includes(gears, item)).toArray();
		}
	}

	_includes(gears, {a, b, c, d}) {
		return gears.includes(a) && gears.includes(b) && gears.includes(c) && gears.includes(d);
	}
}

const db = new DataBase();

export default db;
