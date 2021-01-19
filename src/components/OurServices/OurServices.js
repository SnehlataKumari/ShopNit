import { Row, Col } from 'antd';
const rowStyle = {
  marginLeft: '16%',
  marginRight: '15%',
  boxSizing: 'border-box',
  marginTop: '40px'
}

const colStyle = {
  height: "120px",
  display: "flex",
  verticalAlign: "middle",
  position: "relative",
  width: "1420px",
}
function OurSerivces({ icons = [] }) {
  console.log(icons);
  return (
    <>
      <Row style={rowStyle}>
        {icons.map((icon, i) => (
          <Col key={i} className="gutter-row" style={colStyle} span={8}>
            {icon}
          </Col>
        ))
        }
      </Row>
    </>
  );
}
export default OurSerivces;
