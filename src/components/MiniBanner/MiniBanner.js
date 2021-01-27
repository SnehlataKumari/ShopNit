import "./MiniBanner.css";
import banner1 from "../../assets/img/miniBanner/SPICEL-OFFERS-MINIBANNER.jpg";

const contentStyle = {
  marginLeft: "auto",
  marginRight: "auto",
  height: "248px",
  display: "flex",
  width: "initial",
  verticalAlign: "middle",
  position: "relative",
  margin: "-32px 0px - 33px 0px",
  padding: "0px 0px 0px 0px",
  boxSizing: "border - box",
};

function MiniBanner() {
  return (
    <>
      <img src={banner1} style={contentStyle} alt="img1" />
      {/* <img src={banner1} className="contentStyle" alt="img1" /> */}
    </>
  );
}

export default MiniBanner;
