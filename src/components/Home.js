import { Dropdown, Menu, Row, Space } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import News from "./News";
import { DownOutlined } from "@ant-design/icons";
import { Pagination } from "antd";
import ReactPaginate from "react-paginate";
export default function Home() {
	const { loading, news, errMess } = useSelector((state) => state.news);
	const { bookmarks } = useSelector((state) => state.bookmarks);

	const [pageNumber, setPageNumber] = useState(0);

	const newsPerPage = 6;
	const pagesVisited = pageNumber * newsPerPage;

	const displaynews = news.slice(pagesVisited, pagesVisited + newsPerPage);

	const pageCount = Math.ceil(news.length / newsPerPage);

	const changePage = ({ selected }) => {
		setPageNumber(selected);
	};

	let menuitem;
	if (bookmarks) {
		menuitem = bookmarks.map((bookmark) => {
			return (
				<Menu.Item>
					<a target="_blank" rel="noopener noreferrer" href={bookmark.url}>
						{bookmark.name}
					</a>
				</Menu.Item>
			);
		});
	}
	const menu = <Menu>{menuitem}</Menu>;
	useEffect(() => {
		console.log(news);
	}, []);
	return (
		<div>
			<div>
				<Dropdown overlay={menu}>
					<a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
						Saved Bookmarks <DownOutlined />
					</a>
				</Dropdown>
			</div>
			<div className="scroll">
				<Row style={{ marginTop: 15 }}>
					{loading ? (
						"Loading..."
					) : errMess ? (
						errMess
					) : (
						<News news={displaynews}></News>
					)}
				</Row>
			</div>
			<div>
				<Row style={{ marginTop: 15 }}>
					<ReactPaginate
						previousLabel={"Previous"}
						nextLabel={"Next"}
						pageCount={pageCount}
						onPageChange={changePage}
						containerClassName={"paginationBttns"}
						previousLinkClassName={"previousBttn"}
						nextLinkClassName={"nextBttn"}
						disabledClassName={"paginationDisabled"}
						activeClassName={"paginationActive"}
					/>
				</Row>
			</div>
		</div>
	);
}
