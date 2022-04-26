import React from "react";
import { Button, Row, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const signs = [
	"Aries",
	"Taurus",
	"Gemini",
	"Cancer",
	"Leo",
	"Virgo",
	"Libra",
	"Scorpio",
	"Sagittarius",
	"Capricorn",
	"Aquarius",
	"Pisces",
];
const SignsDashboard = () => {
	const navigate = useNavigate();
	return (
		<Container>
			<h1 className="text-center mt-5 mb-3">Horoscope Day</h1>
			<Row>
				{signs?.map((sign) => (
					<Col md={3} key={sign}>
						<Button
							variant="outline-primary"
							className="btn btn-block w-100 mt-2"
							onClick={() => {
								navigate(`/sign/${sign}`);
							}}
						>
							{sign}
						</Button>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default SignsDashboard;
