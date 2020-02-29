const ISO_DATE_REGEX = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/;
function reviver(key: string, value: unknown) {
	return typeof value === "string" &&
		key.toLowerCase().includes("date") &&
		ISO_DATE_REGEX.test(value)
		? new Date(value)
		: value;
}
export function parseJson(jsonString: string) {
	return JSON.parse(jsonString, reviver);
}
