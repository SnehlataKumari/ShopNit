import { RightOutlined } from "@ant-design/icons";
import { Col, Row, Divider } from "antd";
import "./DividerBar.css";

function DividerBar(props) {
  return (
    <>
      <Row
        gutter={30}
        style={{ marginLeft: "15%", marginRight: "150px", paddingTop: "0px" }}
      >
        <Col className="gutter-row" flex="auto">
          <Divider orientation="center">
            <span className="dividerBoxStyle">{props.heading}</span>{" "}
          </Divider>
        </Col>
        <Col className="gutter-row" flex="100px" style={{ paddingTop: "19px" }}>
          <a href style={{ color: "rgba(0, 0, 0, 0.4)" }}>
            <RightOutlined />
          </a>
        </Col>
      </Row>
    </>
  );
}

export default DividerBar;
