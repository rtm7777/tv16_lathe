class Storage {
	get(key) {
		return localStorage.getItem(key);
	}

	getNumbersArray(key) {
		const value = this.get(key);
		if (value) {
			return value.split(',').map(Number);
		}
	}

	set(key, value) {
		localStorage.setItem(key, value);
	}
}

const storage = new Storage();

export default storage;
