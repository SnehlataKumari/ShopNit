import { Row, Col } from 'antd';
import {
  CustomerServiceOutlined,
  TransactionOutlined,
  CarOutlined,
} from "@ant-design/icons";
import { Card } from "antd";
import './OurServices.css';
// const rowStyle = {
//   marginLeft: '16%',
//   marginRight: '15%',
//   boxSizing: 'border-box',
//   marginTop: '40px'
// }

// const colStyle = {
//   height: "120px",
//   display: "flex",
//   verticalAlign: "middle",
//   position: "relative",
//   width: "1420px",
// }

const { Meta } = Card;

const ServicesCard = ({ icon, title, description }) => (
  <Card className="customerServiceIcon" cover={icon}>
    <Meta title={title} description={description} />
  </Card>
);

const icons =[
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
        ]


function OurSerivces() {
  return (
    <>
      <Row className="rowStyle">
        {/* <Row style={rowStyle}> */}
        {icons.map((icon, i) => (
          // <Col key={i} className="gutter-row" style={colStyle} span={8}>
          <Col key={i} className="gutter-row" className="colStyle" span={8}>
            {icon}
          </Col>
        ))}
      </Row>
    </>
  );
}
export default OurSerivces;
