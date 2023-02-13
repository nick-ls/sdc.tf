import * as React from "react";
import {Component} from "react";

interface SectionProps {
	text: string[];
	title?: string;
	heading?: string;
	img?: string;
	classes?: string;
	headerurl?: string;
}
interface SectionState {}

export default class Section extends Component<SectionProps, SectionState> {
	private linkGroups = /\[(.*?)\]\((.*?)\)/g
	private linkRegex = /\[.*?\]\(.*?\)/g

	constructor(props: SectionProps) {
		super(props);
		this.state = {};
	}

	public render() {
		return <div className={`section ${this.props.classes || ""}`}>
			{this.props.headerurl ? 
				<img src={this.props.headerurl} className="section-header"/> : <></>
			}
			<div className="section-body">
				{this.props.heading ?
					<h1>{this.props.heading}</h1> : <></>
				}
				<div className="section-inner-body">
					{this.props.img ? <img className="section-img" src={this.props.img}/> : <></>}
					<div className="section-content">
						{this.props.title ? <h1>{this.props.title}</h1> : <></>}
						{this.props.text.map((t, i) => {
							let text = t.split(this.linkRegex);
							let full: Array<JSX.Element> = [];
							let m: RegExpExecArray | null;
							while ((m = this.linkGroups.exec(t)) !== null) {
								if (m.index === this.linkGroups.lastIndex) {
									this.linkGroups.lastIndex++;
								}
								full.push(<>{text.shift()??""}</>);
								full.push(<a href={m[2]}>{m[1]}</a>);
							}
							full.push(<>{text.shift() ?? ""}</>);
							return <p key={i}>{full}</p>
						})}
						{this.props.children}
					</div>
				</div>
			</div>
		</div>;
	}
}
