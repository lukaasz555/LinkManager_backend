export function getIncrementedId(arr: Array<{ id: number }>): number {
	return arr[arr.length - 1].id + 1;
}
