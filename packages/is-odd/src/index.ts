import { isEven, foo } from "@acme/is-even";

export function isOdd(i: number): boolean {
	return isEven(i) === false;
}

export { foo };
export function h() {}
