import { Row, Col, Button } from "antd";
import {  FacebookOutlined, TwitterOutlined,
     MailOutlined, 
     InstagramOutlined,} from '@ant-design/icons';
import './Footer.css';
import FooterCol from "./FooterCol";

const footerItems = [
  <FooterCol
    title="follow us"
    icons={[
      <FacebookOutlined />,
      <InstagramOutlined />,
      <TwitterOutlined />,
      <MailOutlined />,
    ]}
  />,
  <FooterCol
    title="company"
    menu={[
      "contact us",
      "Track Shipment",
      "Privacy Policy",
      "Returns And Exchange Policy",
      "Shipping Policy",
      "Terms & Conditions",
    ]}
  />,
  <FooterCol
    title="subscribe for newsletter"
    inputFeild={
      <input
        className="input"
        type="email"
        placeholder="Your Email (Required)"
      ></input>
    }
    button={
      <Button className="btn" type="primary" shape="round">
        sign up
      </Button>
    }
  />,
];

function Footer() {
  return (
    <>
      <div className="background">
        <Row className="footerItem">
          {footerItems.map((item, i) => (
            <Col span={8} key={i}>
              {item}
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default Footer;