import { Col, Row } from "antd";
import "./HotDealCard.css";
import men from "../../assets/img/hotDealCards/men-1.jpg";
import Women from "../../assets/img/hotDealCards/Women.jpg";
import Hoodie from "../../assets/img/hotDealCards/Hoodie-Inner-image.jpg";
import Comfy from "../../assets/img/hotDealCards/Comfy-Shorts.jpg";
import PoloTShirt from "../../assets/img/hotDealCards/Polo.jpg";
import PlainTShirt from "../../assets/img/hotDealCards/Plain-T-Shirt-Category.jpg";
import Laptop from "../../assets/img/hotDealCards/Home-Page-Laptop-Sticker-Category.jpg";
import CoffeeMug from "../../assets/img/hotDealCards/Home-Page-Coffee-Mug-Category.jpg";

const cardStyle = {
  height: "512.9px",
  display: "flex",
  verticalAlign: "middle",
  position: "relative",
  width: "512.9px",
};

function HotDealCards() {
  return (
    <>
      <div width="1024px">
        {[
          [men, Women],
          [Hoodie, Comfy],
          [PlainTShirt, PoloTShirt],
          [Laptop, CoffeeMug],
        ].map((row, i) => (
          <Row
            key={i}
            gutter={30}
            style={{ marginLeft: "15%", paddingTop: i === 0 ? "0px" : "20px" }}
          >
            {row.map((col, i) => (
              <Col
                key={i}
                className="gutter-row"
                span={7}
                style={{ paddingLeft: (i + 1) % 2 === 0 ? "170px" : "20px" }}
              >
                <img alt="men img" style={cardStyle} src={col} />
              </Col>
            ))}
          </Row>
        ))}
      </div>
    </>
  );
}
export default HotDealCards;
