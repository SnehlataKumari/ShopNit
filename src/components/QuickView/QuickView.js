import { Carousel, Row, Col } from "antd";
import "./QuickView.css";

function QuickView({ itemsList = [] }) {
  return (
    <>
      <Carousel autoplay className="backgroundRed" dots={{ className: "dot" }}>
        {itemsList.map((row, i) => (
          <div>
            <Row key={i}>
              {row.map((col, i) => (
                <Col className="gutter-row" span={6} key={i}>
                  <img alt="" width="320px" height="420px" src={col} />
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Carousel>
    </>
  );
}

export default QuickView;
