import arrSwap from '@bemoje/arr-swap';
import assertArgs from '@bemoje/assert-args';
import assertType from '@bemoje/assert-type';

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

export default arrSelectionSortNumeric;
