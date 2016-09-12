import storage from '../services/storage';

export const metricGears = [20, 25, 30, 35, 40, 45, 50, 60, 75, 100];
export const imperialGears = [55, 56, 64, 65, 70, 72];
export const defaultDgears = [65, 75, 100];

export const customGears = storage.getNumbersArray('customGears') || [];

export const allGears = [].concat(metricGears, imperialGears, customGears);
