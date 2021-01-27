import { Card } from "antd";
import "./ServicesCard.css";
const { Meta } = Card;

const ServicesCard = ({ icon, title, description }) => (
  <Card className="customerServiceIcon" cover={icon}>
    <Meta title={title} description={description} />
  </Card>
);
export default ServicesCard;
