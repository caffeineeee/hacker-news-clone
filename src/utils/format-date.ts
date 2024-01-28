import ms from "ms";

const map = {
	s: "seconds",
	ms: "milliseconds",
	m: "minutes",
	h: "hours",
	d: "days",
};

export function formatDate(date): string {
	return date
		? ms(new Date().getTime() - date).replace(/[a-z]+/, (str) => ` ${map[str]}`)
		: "";
}
