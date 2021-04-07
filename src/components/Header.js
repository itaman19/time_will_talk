import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

const { SubMenu } = Menu;

function Header() {
	const { sources, loading, errMess } = useSelector((state) => state.sources);

	const [current, setcurrent] = useState("mail");

	const handleClick = (e) => {
		console.log("click ", e);
		setcurrent(e.key);
	};
	let menuitem;
	let bookmarkitem;
	if (sources) {
		menuitem = sources.map((source1) => {
			return (
				<Menu.Item
					key={source1.id}
					onClick={() => alert("You have selected : " + source1.name)}
				>
					{source1.name}
				</Menu.Item>
			);
		});
	}
	useEffect(() => {
		return () => {
			//
		};
	}, []);
	return (
		<Menu
			onClick={(e) => handleClick(e)}
			selectedKeys={[current]}
			mode="horizontal"
		>
			<Menu.Item key="alipay">
				<a href="#">Home</a>
			</Menu.Item>
			<SubMenu
				key="SubMenu"
				icon={<SettingOutlined />}
				title="Select news provider"
			>
				<Menu.ItemGroup title="News Providers">
					{loading ? "Loading..." : errMess ? errMess : menuitem}
				</Menu.ItemGroup>
			</SubMenu>
		</Menu>
	);
}

//ReactDOM.render(<App />, mountNode);

export default Header;
