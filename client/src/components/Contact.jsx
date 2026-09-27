import Reveal from "./Reveal.jsx";
import ContactForm from "./ContactForm.jsx";

export default function Contact() {
	return (
		<section className="section contact" id="contact">
			<div className="container">
				<Reveal as="p" className="eyebrow">
					Contact
				</Reveal>
				<Reveal as="h2" className="contact-title" delay={0.06}>
					Let's build something together.
				</Reveal>

				<div className="contact-grid">
					<Reveal className="contact-aside" delay={0.12}>
						<a className="contact-mail" href="mailto:abhipy10@gmail.com">
							abhipy10@gmail.com
						</a>
						<p className="contact-note" style={{ marginTop: "1rem" }}>
							+91 9567585998 <br />
							Kerala, India
						</p>
						<p className="contact-note">
							Currently seeking entry-level software development roles. I
							typically reply within 24 hours.
						</p>
					</Reveal>

					<Reveal className="contact-form-wrap" delay={0.18}>
						<ContactForm />
					</Reveal>
				</div>
			</div>
		</section>
	);
}
