import { UpSquareOutlined } from "@ant-design/icons";
import "./AbsoluteFooter.css";
function AbsoluteFooter() {
  return (
    <>
      <div className="footer">
        <a href="#top">
          <UpSquareOutlined />
        </a>
        <h3 className="absFooter">Copyright 2021 © ShopNit</h3>
      </div>
    </>
  );
}

export default AbsoluteFooter;
