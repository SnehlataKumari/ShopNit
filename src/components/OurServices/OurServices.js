import { Row, Col } from 'antd';

function OurSerivces({ icons = [] }) {
  console.log(icons);
  return (
    <>
      {
        icons.map((icon, i) => (
          <Row>
            <Col key={i}>{icon}</Col>
          </Row>
        ))
      }
    </>
  );
}
export default OurSerivces;
