// TypeScript issue lol
export function setSoftkeys(
	_left?: string | null,
	_center?: string | null,
	_right?: string | null,
	_loading?: boolean | null,
	_black?: boolean | null
) {
	setSoftkeys.v.apply(null, arguments as any);
}

setSoftkeys.v = (
	_left?: string | null,
	_center?: string | null,
	_right?: string | null,
	_loading?: boolean | null,
	_black?: boolean | null
) => {};

setSoftkeys.hide = (_hide: boolean) => {};

export function hideSoftkeys(hide: boolean) {
	setSoftkeys.hide(hide);
}

export const NOOP = () => {};

const neverResolvingPromise = new Promise<void>(NOOP);

/**
 *
 * @param ms if not passed with a number, use this as a cheap queueMicrotask, if passed with infinity returns a promise that never resolves
 * @returns
 */
export function sleep(ms: void | number) {
	if (ms === undefined) {
		return Promise.resolve();
	}

	if (!Number.isFinite(ms)) {
		return neverResolvingPromise;
	}

	return new Promise<void>((resolve) => setTimeout(resolve, ms));
}
