import { useEffect, useState } from "react";
import { api } from "../api/client";

export function useProjects(params = {}) {
	const [projects, setProjects] = useState([]);
	const [status, setStatus] = useState("loading"); // loading | success | error
	const [error, setError] = useState(null);

	const key = JSON.stringify(params);

	useEffect(() => {
		let cancelled = false;
		setStatus("loading");

		api
			.getProjects(params)
			.then((res) => {
				if (cancelled) return;
				setProjects(res.data);
				setStatus("success");
			})
			.catch((err) => {
				if (cancelled) return;
				setError(err);
				setStatus("error");
			});

		return () => {
			cancelled = true;
		};
	}, [key]);

	return { projects, status, error };
}
