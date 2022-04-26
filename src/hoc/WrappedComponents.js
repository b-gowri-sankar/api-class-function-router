import React from "react";
import { useLocation, useParams } from "react-router-dom";

function WrappedComponents(Component) {
	const params = useParams();
	const location = useLocation();
	return (props) => (
		<Component {...props} params={params} location={location} />
	);
}
export default WrappedComponents;

export function withParams(Component) {
	return (props) => <Component {...props} params={useParams()} />;
}
