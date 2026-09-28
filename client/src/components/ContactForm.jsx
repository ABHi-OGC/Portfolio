// client/src/components/ContactForm.jsx
import { useState } from "react";

const EMPTY = { name: "", email: "", subject: "", body: "" };

export default function ContactForm() {
	const [values, setValues] = useState(EMPTY);
	const [status, setStatus] = useState("idle"); // idle | sending | success | error
	const [feedback, setFeedback] = useState("");

	const update = (field) => (e) =>
		setValues((v) => ({ ...v, [field]: e.target.value }));

	async function onSubmit(e) {
		e.preventDefault();
		setStatus("sending");
		setFeedback("");

		try {
			// Replace 'xyzabc' with your actual Formspree ID
			const response = await fetch("https://formspree.io/f/mwlpwjde", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(values),
			});

			if (!response.ok) throw new Error("Failed to send message");

			setStatus("success");
			setFeedback("Thanks — your message is in the queue.");
			setValues(EMPTY);
		} catch (err) {
			setStatus("error");
			setFeedback(
				"Something went wrong. Please try again or email me directly.",
			);
		}
	}

	return (
		<form className="form-grid" onSubmit={onSubmit} noValidate>
			<div className="field">
				<label htmlFor="cf-name">Name</label>
				<input
					id="cf-name"
					name="name"
					value={values.name}
					onChange={update("name")}
					required
				/>
			</div>

			<div className="field">
				<label htmlFor="cf-email">Email</label>
				<input
					id="cf-email"
					name="email"
					type="email"
					value={values.email}
					onChange={update("email")}
					required
				/>
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
					rows={6}
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
