import { RightOutlined } from '@ant-design/icons';
import { Col, Row, Divider } from 'antd';

const dividerBoxStyle = {
  border: "2px solid rgba(0, 0, 0, 0.1)",
  padding: ".3em .8em",
  fontWeight: 700,
  textAlign: "center",
  fontSize: "1.25em",
  color: "#555",
  textTransform: "uppercase",
}

function DividerBar(props) {
  return (
    <>
      <Row gutter={30} style={{ marginLeft: "15%", marginRight: "150px", paddingTop: "0px" }} >
        <Col className="gutter-row" flex="auto">
          <Divider orientation="center"><span style={dividerBoxStyle}>{props.heading}</span> </Divider>
        </Col>
        <Col className="gutter-row" flex="100px" style={{ paddingTop: "19px" }} >
          <a href style={{ color: "rgba(0, 0, 0, 0.4)" }}  ><RightOutlined /></a>
        </Col>
      </Row>
    </>
  );
}

export default DividerBar;