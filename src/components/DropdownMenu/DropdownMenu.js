import { Button, Dropdown, Space, Divider } from "antd";
import { DownOutlined } from "@ant-design/icons";
import MenuItems from "../MenuItems/MenuItems";

const DropdownMenu = () => (
  <Space>
    <Dropdown
      key="men"
      overlay={
        <MenuItems
          titles={[
            "Half Sleeve T-Shirts",
            "Full Sleeve T-Shirts",
            "Polo T-Shirts",
            "Plain T-Shirts",
            "Hoodies",
            "Boxers Shorts",
          ]}
        />
      }
      className="first-menu"
    >
      <Button
        icon={<DownOutlined />}
        style={{
          border: "none",
          padding: 0,
        }}
      >
        MEN
      </Button>
    </Dropdown>

    <Divider type="vertical" />

    <Dropdown
      key="women"
      overlay={
        <MenuItems
          titles={["Unisex Half Sleeves", "Full Sleeves", "Hoodies"]}
        />
      }
    >
      <Button
        icon={<DownOutlined />}
        style={{
          border: "none",
          padding: 0,
        }}
      >
        WOMEN
      </Button>
    </Dropdown>

    <Divider type="vertical" />

    <Button
      style={{
        border: "none",
        padding: 0,
      }}
    >
      HOODIES
    </Button>

    <Divider type="vertical" />

    <Button
      style={{
        border: "none",
        padding: 0,
      }}
    >
      SHORTS
    </Button>

    <Divider type="vertical" />

    <Dropdown
      key="accessories"
      overlay={<MenuItems titles={["Laptop Stickers", "Coffee Mugs"]} />}
    >
      <Button
        icon={<DownOutlined />}
        style={{
          border: "none",
          padding: 0,
        }}
      >
        ACCESSORIES
      </Button>
    </Dropdown>

    <Divider type="vertical" />

    <Button
      style={{
        fontWeight: "700",
        fontFamily: "sans-serif",
        color: "rgba(17,17,17,0.85)",
        border: "none",
        padding: 0,
      }}
    >
      CONTACT US
    </Button>
  </Space>
);

export default DropdownMenu;
