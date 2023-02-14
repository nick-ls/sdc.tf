import * as ReactDom from "react-dom";
import * as React from "react";
import {Component} from "react";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Button from "./components/Button";
import {DISCORD_INVITE, CHALLENGES_URL, SIGNUP_URL, CONTACT_LINK, SPONSOR_PACKET} from "./components/Config";
import Footer from "./components/Footer";

interface MainProps {}
interface MainState {}

export default class Main extends Component<MainProps, MainState> {
	constructor(props: MainProps) {
		super(props);
		this.state = {};
	}

	public render() {
		return <>
			<Hero></Hero>
			<Section classes="wave" title="ABOUT US" img="img/cool-ppl.png" headerurl="svg/wave2.svg" text={[
				"San Diego CTF (SDCTF) is an annual Capture the Flag competition hosted by undergraduates at the University of California, San Diego (UCSD). The competition will be jeopardy-style and run in the 48 hour period from May 12 to May 14, 2023. We encourage participation from teams on and off campus, of all ages and backgrounds.",
				"This event is hosted yearly by ACM Cyber, the chief cybersecurity organization on campus at UC San Diego. This yearly competition allows us to train our members, build our internal resources, and give back to the greater cybersecurity community.",
				"You can now join the Discord server that will be used for the official competition in May."
			]}>
				<Button link={DISCORD_INVITE} classes="btn-white">Join the Discord</Button>
			</Section>
			<Section classes="details" title="Rules" heading="DETAILS" img="img/guy-soul.png" headerurl="svg/triangle.svg" text={[
				"San Diego CTF is a 48-hour jeopardy style CTF with static scoring. Challenges vary across the disciplines of Open Source Intelligence, Cryptography, Web Hacking, Reverse Engineering, Binary Exploitation, Jail Escapes, Forensic Analysis, and others. At the end of a 48 hour period, the teams participating are ranked by number of points, with ties broken by who reached that number of points first.",
				"Teams have no size limit. Monetary prizes are planned but not finalized. At the conclusion of the competition, challenge and solution source code will be made publicly available here."
			]}>
				<Button link={CHALLENGES_URL}>See 2022 Challenges</Button>
			</Section>
			<Section classes="infra" title="Infrastructure" img="img/this-cord.jpg" text={[
				"Challenges themselves run on the wonderful kctf and the cloud infrastructure is sponsored by [goo.gle/ctfsponsorship](https://goo.gle/ctfsponsorship).", 
				"In previous years, we hosted SDCTF entirely through the messaging platform Discord. This year, due to Discord API changes, excessive rate limiting, and reduced challenger satisfaction with the bot, we've opted to use a more standard web-based CTF platform.",
				"When signups open, we will send out an announcement in the Discord and update info where it is relevant."
			]}>
				<Button link={SIGNUP_URL}>Sign Up</Button>
			</Section>
			<Section classes="sponsor" heading="SPONSORSHIP" headerurl="svg/triangle-cyan.svg" text={[
				`We are actively looking for sponsors! If you are interested, check out our [official sponsorship packet](${SPONSOR_PACKET}) and then get in touch with us below.`
			]}>
				<Button link={CONTACT_LINK} classes="btn-white">Let's Talk</Button>
			</Section>
			<Footer></Footer>
		</>;
	}
}

ReactDom.render(<Main></Main>, document.getElementById("root"));
