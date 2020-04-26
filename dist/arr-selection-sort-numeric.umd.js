(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@bemoje/arr-swap'), require('@bemoje/assert-args'), require('@bemoje/assert-type')) :
	typeof define === 'function' && define.amd ? define(['@bemoje/arr-swap', '@bemoje/assert-args', '@bemoje/assert-type'], factory) :
	(global = global || self, global['arr-selection-sort-numeric'] = factory(global.arrSwap, global.assertArgs, global.assertType));
}(this, (function (arrSwap, assertArgs, assertType) { 'use strict';

	arrSwap = arrSwap && Object.prototype.hasOwnProperty.call(arrSwap, 'default') ? arrSwap['default'] : arrSwap;
	assertArgs = assertArgs && Object.prototype.hasOwnProperty.call(assertArgs, 'default') ? assertArgs['default'] : assertArgs;
	assertType = assertType && Object.prototype.hasOwnProperty.call(assertType, 'default') ? assertType['default'] : assertType;

	/**
	 * Selection sort array
	 * @param {Array} arr - The array to sort
	 * @returns {Array} The sorted array
	 */
	function arrSelectionSortNumeric(arr) {
		assertArgs(arr);
		assertType(Array, arr);

		for (let left = 0; left < arr.length; left++) {
			let selection = left;

			for (let right = left + 1; right < arr.length; right++) {
				if (arr[selection] > arr[right]) {
					selection = right;
				}
			}

			if (selection !== left) {
				arrSwap(arr, selection, left);
			}
		}

		return arr
	}

	return arrSelectionSortNumeric;

})));
