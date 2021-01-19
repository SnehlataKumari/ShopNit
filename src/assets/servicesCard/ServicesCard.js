import { Card } from 'antd';
const { Meta } = Card;

const ServicesCard = ({ icon, title, description }) => (
  < Card
    // hoverable
    className="customerServiceIcon"
    cover={icon}
  >
    <Meta title={title} description={description} />
  </Card >
);
export default ServicesCard;