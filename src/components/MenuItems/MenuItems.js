import { Menu, Divider } from "antd";

const MenuItems = ({ titles = [] }) => (
  <Menu>
    {titles.map((title, i) => (
      <Menu.Item key={i}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.alipay.com/"
        >
          {title}
        </a>
        <Divider type="horizontal" />
      </Menu.Item>
    ))}
  </Menu>
);

export default MenuItems;
