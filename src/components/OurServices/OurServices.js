import { Row, Col } from "antd";
import {
  CustomerServiceOutlined,
  TransactionOutlined,
  CarOutlined,
} from "@ant-design/icons";
import ServicesCard from "../ServicesCard/ServicesCard";
import "./OurServices.css";

const icons = [
  <ServicesCard
    icon={<CustomerServiceOutlined />}
    title="CUSTOMER SERVICE"
    description="24*7 Customer Care"
  />,
  <ServicesCard
    icon={<CarOutlined />}
    title="free shipping"
    description="Free Shipping for orders above 500"
  />,
  <ServicesCard
    icon={<TransactionOutlined />}
    title="money back"
    description="100% MoneyBack Guaranteed"
  />,
];

function OurSerivces() {
  return (
    <>
      <Row className="rowStyle">
        {icons.map((icon, i) => (
          <Col key={i} className="gutter-row" className="colStyle" span={8}>
            {icon}
          </Col>
        ))}
      </Row>
    </>
  );
}
export default OurSerivces;
