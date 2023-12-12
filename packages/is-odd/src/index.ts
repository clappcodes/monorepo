import { isEven } from "@acme/is-even";

export function isOdd(i: number): boolean {
	return isEven(i) === false;
}
