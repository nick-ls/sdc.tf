import * as ReactDom from "react-dom";
import * as React from "react";
import {Component} from "react";
import Hero from "./components/Hero";

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
		</>;
	}
}

ReactDom.render(<Main></Main>, document.getElementById("root"));
