import "./App.css";
import SignsDashboard from "./pages/SignsDashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignData from "./pages/SignData";

function App() {
	console.log(process.env.REACT_APP_API_KEY);
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<SignsDashboard />} />
				<Route path="/sign/:sign" element={<SignData />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
