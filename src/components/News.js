import Text from "antd/lib/typography/Text";
import React, { useEffect, useRef } from "react";
import { Card, Col, message, Row, Tooltip } from "antd";
import { Button } from "antd/lib/radio";
import { useDispatch } from "react-redux";
import { addBookmark } from "../redux/ActionCreators";

const { Meta } = Card;

export default function News({ news }) {
	const dispatch = useDispatch();
	const handleClick = (url, name) => {
		dispatch(addBookmark(url, name));
		message.info("Bookmark added");
	};
	const RederArticle = (article) => {
		return (
			<Col span={8}>
				<Card
					hoverable
					style={{ width: 240 }}
					cover={<img alt="example" src={article.urlToImage} />}
				>
					<Meta title={article.title} description={article.description} />
					<Text type="dark">
						Author : {article.author}, Source : {article.source.name}
					</Text>
					<br></br>
					<Tooltip title="add bookmark">
						<Button
							type="primary"
							shape="circle"
							onClick={() => handleClick(article.url, article.title)}
						>
							<span className="fa fa-bookmark"></span>
						</Button>
					</Tooltip>
				</Card>
			</Col>
		);
	};
	var newsList;
	if (news) {
		newsList = news.map((article) => {
			return RederArticle(article);
		});
	}
	return (
		<div>
			{" "}
			<div className="site-card-wrapper">
				<Row gutter={16} style={{ marginBottom: 15 }} justify="center">
					{newsList}
				</Row>
			</div>
		</div>
	);
}
