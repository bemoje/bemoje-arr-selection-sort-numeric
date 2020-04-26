import arrSelectionSortNumeric from '../src/arr-selection-sort-numeric'

describe('arrSelectionSortNumeric', () => {
	test('works', () => {
		const arr = [5, 2, 1, 4, 3]
		expect(arrSelectionSortNumeric(arr)).toStrictEqual([1, 2, 3, 4, 5])
	})
})
