import React, { Component } from "react";
import axios from "axios";
import { withParams } from "../hoc/WrappedComponents";
import { Card, Container } from "react-bootstrap";

export class SignData extends Component {
	constructor(props) {
		super(props);

		//Intialization the state
		this.state = {
			signData: {},
		};
	}

	componentDidMount() {
		//fetch the data from api once component is rendered
		this.fetchData();
	}

	async fetchData() {
		const options = {
			method: "POST",
			url: "https://sameer-kumar-aztro-v1.p.rapidapi.com/",
			params: { sign: this.props.params.sign, day: "today" },
			headers: {
				"X-RapidAPI-Host": "sameer-kumar-aztro-v1.p.rapidapi.com",
				"X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
			},
		};

		const resposne = await axios.request(options);
		this.setState({
			...this.state,
			signData: resposne.data,
		});
	}

	render() {
		// console.log(sign);
		console.log(this.state);
		return (
			<Container>
				<Card className="mt-3">
					<Card.Header style={{ fontWeight: "bold" }}>
						{this.props.params.sign}
					</Card.Header>
					<Card.Body>
						<p>
							<span style={{ fontWeight: "bold" }}>Color: </span>
							{this.state.signData?.color}
						</p>
						<p>
							<span style={{ fontWeight: "bold" }}>Compatability:</span>{" "}
							{this.state.signData?.compatibility}
						</p>
						<p>
							<span style={{ fontWeight: "bold" }}>Lucky Number:</span>{" "}
							{this.state.signData?.lucky_number}
						</p>
						<p>
							<span style={{ fontWeight: "bold" }}>Lucky Time:</span>{" "}
							{this.state.signData?.lucky_time}
						</p>
						<p>{this.state.signData?.description}</p>
					</Card.Body>
				</Card>
			</Container>
		);
	}
}

export default withParams(SignData);
