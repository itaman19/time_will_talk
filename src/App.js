import Header from "./components/Header";
import "antd/dist/antd.css";
import "./App.css";
import Home from "./components/Home";
import { useEffect, useState } from "react";
import axios from "axios";
import { Col, Input, Row } from "antd";
import { fetchNews, fetchSources } from "./redux/ActionCreators";
import { useDispatch } from "react-redux";
import { apikey } from "./apikey";
function App() {
	const [q, setq] = useState("");
	const [news, setnews] = useState();
	const dispatch = useDispatch();
	useEffect(() => {
		const url = q
			? `https://newsapi.org/v2/everything?q=${q}&apiKey=${apikey}`
			: `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikey}`;
		//	axios.get(url).then((res) => {
		//		setnews(res.data.articles);
		//		console.log(res.data.articles);
		//	});
		dispatch(fetchNews(url));
		dispatch(fetchSources());
		return () => {
			//
		};
	}, [q]);
	return (
		<div className="App">
			<Header></Header>

			<Row style={{ marginTop: 15 }}>
				<Col span={12} offset={4}>
					<Input
						type="text"
						value={q}
						onChange={(e) => setq(e.target.value)}
						placeholder="Search articles here"
					></Input>
				</Col>
			</Row>
			<Home></Home>
		</div>
	);
}

export default App;
