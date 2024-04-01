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
			<Section classes="wave" title="ABOUT US" img="img/about.jpg" alt="That same picture of Aaron we keep using" headerurl="svg/wave2.svg" text={[
				"San Diego CTF (SDCTF) is an annual Capture the Flag competition hosted by undergraduates at the University of California, San Diego (UCSD). The competition will be jeopardy-style and run in the 48 hour period from May 10 to May 12, 2024. We encourage participation from teams on and off campus, of all ages and backgrounds.",
				"This event is hosted yearly by ACM Cyber, the chief cybersecurity organization on campus at UC San Diego. This yearly competition allows us to train our members, build our internal resources, and give back to the greater cybersecurity community.",
				"You can now join the Discord server that will be used for the official competition in May."
			]}>
				<Button link={DISCORD_INVITE} classes="btn-white">Join the Discord</Button>
			</Section>
			<Section classes="details" title="Rules" heading="DETAILS" img="img/geisel.png" alt="UCSD Geisel Library" headerurl="svg/triangle.svg" text={[
				"San Diego CTF is a 48-hour jeopardy style CTF with static scoring. Challenges vary across the disciplines of Open Source Intelligence, Cryptography, Web Hacking, Reverse Engineering, Binary Exploitation, Forensic Analysis, and others. At the end of a 48 hour period, the teams participating are ranked by number of points, with ties broken by who reached that number of points first.",
				"Non-UCSD teams have no size limit. Monetary prizes are planned but not finalized. At the conclusion of the competition, challenge and solution source code will be made publicly available."
			]}>
				<Button link={CHALLENGES_URL}>See 2022 Challenges</Button>
			</Section>
			<Section classes="ucsd" title="UCSD Students" img="img/students.jpg" alt="Competitors gathered around a table looking at laptops" text={[
				"This year, we have a prize pool of $1,500 for UCSD student teams!",
				"The prize distributions are $512 for 1st, $256 for 2nd, $128 for 3rd, and $64 for 4th through 8th place. In order to be elegible for UCSD-specific prizes, team sizes are capped at 4 players.",
				"In addition, we have around $300 extra that we will be distributing to the UCSD teams/players for challenge writeups, so even if your team doesn't win, you will still be eligible for these prizes!"
			]}>
			</Section>
			<Section classes="infra" title={"Infra\u00ADstruct\u00ADure"} img="img/discord.jpg" alt="Discord's old logo" text={[
				"Challenges themselves run on the wonderful kctf and the cloud infrastructure is sponsored by [goo.gle/\u2009ctfsponsorship](https://goo.gle/ctfsponsorship).", 
				"In previous years, we hosted SDCTF entirely through the messaging platform Discord. This year, due to Discord API changes, excessive rate limiting, and reduced challengers' satisfaction with the bot, we've opted to use a more common web-based CTF platform.",
				"When signups open, we will send out an announcement in the Discord and update information where it is relevant."
			]}>
				<Button link={SIGNUP_URL}>Sign Up</Button>
			</Section>
			<Section classes="sponsor" heading={"SPONSOR\u00ADSHIP"} headerurl="svg/triangle-cyan.svg" text={[
				`We are actively looking for sponsors! If you are interested, check out our [official sponsorship packet](${SPONSOR_PACKET}) and then get in touch with us below.`
			]}>
				<Button link={CONTACT_LINK} classes="btn-white">Let's Talk</Button>
			</Section>
			<Footer></Footer>
		</>;
	}
}

ReactDom.render(<Main></Main>, document.getElementById("root"));
