import { PageHeader, Button, Menu, Dropdown, Space, Divider } from 'antd';
import { DownOutlined, UserOutlined, SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';

import  logo from "../../assets/img/logo.png";

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);


const DropdownMenu = () => (
  <Space >
  <Dropdown key="more" overlay={menu} className="first-menu">
    <Button
        icon={<DownOutlined />}
      style={{
        border: 'none',
        padding: 0,
      }}
    >
      MEN
    </Button>
  </Dropdown>

    <Divider type="vertical" />

  <Dropdown key="more" overlay={menu}>
    <Button
        icon={<DownOutlined />}
      style={{
        border: 'none',
        padding: 0,
      }}
    >
      WOMEN
    </Button>
  </Dropdown>

    <Divider type="vertical" />

    <Button
      style={{
        border: 'none',
        padding: 0,
      }}
    >
      HOODIES
    </Button>

    <Divider type="vertical" />

    <Button
      style={{
        border: 'none',
        padding: 0,
      }}
    >
      SHORTS
    </Button>

    <Divider type="vertical" />

    <Dropdown key="more" overlay={menu}>
      <Button
        icon={<DownOutlined />}
        style={{
          border: 'none',
          padding: 0,
        }}
      >
        ACCESSORIES
    </Button>
    </Dropdown>

    <Divider type="vertical" />

    <Button
      style={{
        fontWeight: '700',
        fontFamily: "sans-serif",
        color: 'rgba(17,17,17,0.85)',
        border: 'none',
        padding: 0,
      }}
    >
      CONTACT US
    </Button>

  </Space>
);

function Header() {

  return (
        <PageHeader
          title={
            <img
              src={logo}
              width={119}
              height={50}
              alt="crazy monkey"
            />
          }
          subTitle={
            <DropdownMenu />
          }
          extra={[
            <Button key="3">{<SearchOutlined />}</Button>,
             <Divider key="div_3" type="vertical" />,
            <Button key="2" shape="round" icon={<ShoppingCartOutlined />}> ₹0.00</Button>,
            <Divider key="div_4" type="vertical" />,
            <Button key="1" shape="circle" icon={<UserOutlined />} >  
            </Button>,
            
            // <Avatar shape="circle" size="large" icon={} />
          ]}
        >
          <Divider style={{margin:"0px"}} />
        </PageHeader>
  );
}

export default Header;