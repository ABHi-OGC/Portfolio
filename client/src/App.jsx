import ScrollProgress from "./components/ScrollProgress";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Capabilities from "./components/Capabilities";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
	return (
		<>
			<a className="skip" href="#main">
				Skip to content
			</a>
			<ScrollProgress />
			<Header />
			<main id="main">
				<Hero />
				<Work />
				<Capabilities />
				<About />
				<Contact />
			</main>
			<Footer />
		</>
	);
}
