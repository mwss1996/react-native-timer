function numberOfDigits(value: number) {
	return (Math.log10((value ^ (value >> 31)) - (value >> 31)) | 0) + 1;
}
export function appendLeadingZeros(value: number, digits: number) {
	const leadingZeros = "0".repeat(digits - numberOfDigits(value));
	return leadingZeros + value;
}
export function formatDate(date: Date) {
	const dateArray = [
		appendLeadingZeros(date.getDate(), 2),
		appendLeadingZeros(date.getMonth() + 1, 2),
		date.getFullYear()
	];
	return dateArray.join("/");
}
export function dateEquals(a: Date, b: Date): boolean {
	return (
		a instanceof Date &&
		b instanceof Date &&
		a.toISOString().split("T")[0] === b.toISOString().split("T")[0]
	);
}
export function shallowObjectEquals(a: any, b: any): boolean {
	for (const property in a) {
		if (
			Object.prototype.hasOwnProperty.call(a, property) &&
			a[property] !== b[property]
		) {
			return false;
		}
	}
	return true;
}
export function uppercaseFirstLetter(text: string) {
	if (text.length === 0) {
		return "";
	}
	if (text.length === 1) {
		return text.toUpperCase();
	}
	return text[0].toUpperCase() + text.slice(1);
}
export function normalizeString(text: string) {
	return text
		.toLowerCase()
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "");
}
export function normalizedStringEquals(a: string, b: string) {
	return (
		typeof a == "string" &&
		typeof b === "string" &&
		normalizeString(a) === normalizeString(b)
	);
}
export function anyToString(valueToConvert: unknown): string {
	if (valueToConvert === undefined || valueToConvert === null) {
		return valueToConvert === undefined ? "undefined" : "null";
	}
	if (typeof valueToConvert === "string") {
		return `'${valueToConvert}'`;
	}
	if (
		typeof valueToConvert === "number" ||
		typeof valueToConvert === "boolean" ||
		typeof valueToConvert === "function"
	) {
		return valueToConvert.toString();
	}
	if (valueToConvert instanceof Array) {
		const stringfiedArray = valueToConvert
			.map(property => anyToString(property))
			.join(",");
		return `[${stringfiedArray}]`;
	}
	if (valueToConvert instanceof Date) {
		return `'${valueToConvert.toISOString()}'`;
	}
	if (typeof valueToConvert === "object") {
		const stringfiedObject = Object.entries(valueToConvert as object)
			.map((entry: [string, unknown]) => {
				return `${entry[0]}: ${anyToString(entry[1])}`;
			})
			.join(",");
		return `{${stringfiedObject}}`;
	}
	return JSON.stringify(valueToConvert);
}
export function coerceToNumber(value: string | number) {
	const parsed = +value;
	return !isNaN(parsed) ? parsed : 0;
}
