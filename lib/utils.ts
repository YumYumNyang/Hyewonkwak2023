import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { deprecate } from "util";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function deepCopy(obj: Array<any> | Object | null): any {
	let copy;

	if (null == obj || typeof obj !== "object") return obj;

	if (obj instanceof Array) {
		copy = [];
		for (let i = 0; i < obj.length; i++) {
			copy[i] = deepCopy(obj[i]);
		}
		return copy;
	}
	if (obj instanceof Object) {
		copy = new Object();
		let attr: keyof Object;
		for (attr in obj) {
			if (obj.hasOwnProperty(attr)) copy[attr] = deepCopy(obj[attr]);
		}
		return copy;
	}

	throw new Error("copy error");
}
