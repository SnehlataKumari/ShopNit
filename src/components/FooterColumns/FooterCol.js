import { Col } from "antd";
import "./FooterCol.css";

const FooterCol = ({ title, icons = [], menu = [], inputFeild, button }) => (
  <Col>
    {title}
    <div className="is-divider"></div>
    <div className="icons">
      {icons.map((icon, i) => (
        <div key={i}>{icon}</div>
      ))}
    </div>
    <div className="menu">
      {menu.map((item, i) => (
        <ul className="list" key={i}>
          <li>{item}</li>
        </ul>
      ))}
    </div>
    <div>{inputFeild}</div>
    <div> {button}</div>
  </Col>
);
export default FooterCol;
