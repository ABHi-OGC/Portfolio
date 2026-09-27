import { useState } from "react";
import { api } from "../api/client";

const EMPTY = { name: "", email: "", subject: "", body: "", company: "" };

export default function ContactForm() {
	const [values, setValues] = useState(EMPTY);
	const [issues, setIssues] = useState({});
	const [status, setStatus] = useState("idle"); // idle | sending | success | error
	const [feedback, setFeedback] = useState("");

	const update = (field) => (e) =>
		setValues((v) => ({ ...v, [field]: e.target.value }));

	async function onSubmit(e) {
		e.preventDefault();
		setStatus("sending");
		setIssues({});
		setFeedback("");

		try {
			const res = await api.sendMessage(values);
			setStatus("success");
			setFeedback(res.message || "Message sent.");
			setValues(EMPTY);
		} catch (err) {
			setStatus("error");
			setFeedback(err.message);
			if (err.issues) setIssues(err.issues);
		}
	}

	const fieldError = (name) =>
		issues[name]?.[0] ? (
			<span className="field-error">{issues[name][0]}</span>
		) : null;

	return (
		<form className="form-grid" onSubmit={onSubmit} noValidate>
			<div className="field">
				<label htmlFor="cf-name">Name</label>
				<input
					id="cf-name"
					name="name"
					value={values.name}
					onChange={update("name")}
					autoComplete="name"
					required
					aria-invalid={!!issues.name}
				/>
				{fieldError("name")}
			</div>

			<div className="field">
				<label htmlFor="cf-email">Email</label>
				<input
					id="cf-email"
					name="email"
					type="email"
					value={values.email}
					onChange={update("email")}
					autoComplete="email"
					required
					aria-invalid={!!issues.email}
				/>
				{fieldError("email")}
			</div>

			<div className="field span-2">
				<label htmlFor="cf-subject">
					Subject <span className="optional">(optional)</span>
				</label>
				<input
					id="cf-subject"
					name="subject"
					value={values.subject}
					onChange={update("subject")}
				/>
			</div>

			<div className="field span-2">
				<label htmlFor="cf-body">Message</label>
				<textarea
					id="cf-body"
					name="body"
					value={values.body}
					onChange={update("body")}
					required
					aria-invalid={!!issues.body}
					rows={6}
				/>
				{fieldError("body")}
			</div>

			{/* honeypot — hidden from humans, irresistible to bots */}
			<div className="honeypot" aria-hidden="true">
				<label htmlFor="cf-company">Company</label>
				<input
					id="cf-company"
					name="company"
					tabIndex={-1}
					autoComplete="off"
					value={values.company}
					onChange={update("company")}
				/>
			</div>

			<div className="span-2 form-actions">
				<button
					className="btn btn-primary"
					type="submit"
					disabled={status === "sending"}>
					{status === "sending" ? "Sending…" : "Send message"}
				</button>
				{feedback && (
					<p
						className={`form-status ${status === "success" ? "success" : "error"}`}
						role="status">
						{feedback}
					</p>
				)}
			</div>
		</form>
	);
}
