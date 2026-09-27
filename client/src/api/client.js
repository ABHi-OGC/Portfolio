// client/src/api/client.js
const BASE =
	import.meta.env.VITE_API_URL ||
	"https://portfolio-api-xxxx.development.catalystserverless.com/api";

async function request(path, options = {}) {
	const res = await fetch(`${BASE}${path}`, {
		headers: { "Content-Type": "application/json", ...(options.headers || {}) },
		...options,
	});

	const isJson = res.headers.get("content-type")?.includes("application/json");
	const payload = isJson ? await res.json() : null;

	if (!res.ok) {
		const error = new Error(payload?.error || `Request failed (${res.status})`);
		error.status = res.status;
		error.issues = payload?.issues;
		throw error;
	}
	return payload;
}

export const api = {
	getProjects: (params = {}) => {
		const qs = new URLSearchParams(params).toString();
		return request(`/projects${qs ? `?${qs}` : ""}`);
	},
	sendMessage: (body) =>
		request("/contact", { method: "POST", body: JSON.stringify(body) }),
};
