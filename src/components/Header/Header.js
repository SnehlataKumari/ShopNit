import { PageHeader, Button, Divider, Input, Popover } from "antd";
import {
  UserOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import logo from "../../assets/img/logo.png";
import DropdownMenu from "../DropdownMenu/DropdownMenu";

const cartDetails = (cartItems) =>
  cartItems ? (
    <div>You have {cartItems} products in your cart.</div>
  ) : (
    <div>No products in cart...</div>
  );

const searchBar = () => (
  <Input
    size="large"
    type="text"
    placeholder="search...."
    suffix={<SearchOutlined style={{ color: "rgba(0,0,0,.45)" }} />}
  />
);

function Header() {
  return (
    <PageHeader
      title={<img src={logo} width={119} height={50} alt="crazy monkey" />}
      subTitle={<DropdownMenu />}
      extra={[
        <Popover content={searchBar}>
          <Button key="3" shape="round" icon={<SearchOutlined />}></Button>
        </Popover>,
        <Divider key="div_3" type="vertical" />,
        <Popover content={cartDetails}>
          <Button key="2" shape="round" icon={<ShoppingCartOutlined />}>
            {" "}
            ₹0.00
          </Button>
        </Popover>,
        <Divider key="div_4" type="vertical" />,
        <Button key="1" shape="circle" icon={<UserOutlined />}></Button>,
      ]}
    >
      <Divider style={{ margin: "0px" }} />
    </PageHeader>
  );
}

export default Header;
