import { Carousel, Col, Row, Divider } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import Flickity from 'react-flickity-component';
// import './MiniBanner.css';
import banner1 from '../../assets/img/banner/SPICEL-OFFERS-MINIBANNER.jpg';
import men from '../../assets/img/banner/men-1.jpg';
 import Women from '../../assets/img/banner/Women.jpg';
 import Hoodie from '../../assets/img/banner/Hoodie-Inner-image.jpg';
import Comfy from '../../assets/img/banner/Comfy-Shorts.jpg';
import PoloTShirt from '../../assets/img/banner/Polo.jpg';
import PlainTShirt from '../../assets/img/banner/Plain-T-Shirt-Category.jpg';
import Laptop from '../../assets/img/banner/Home-Page-Laptop-Sticker-Category.jpg';
import CoffeeMug from '../../assets/img/banner/Home-Page-Coffee-Mug-Category.jpg';
import t1 from '../../assets/img/banner/t1.jpg';
import t2 from '../../assets/img/banner/t2.jpg';
import t3 from '../../assets/img/banner/t3.jpg';
import t4 from '../../assets/img/banner/t4.jpg';
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
}

const cardStyle = {
  height: "512.9px",
  display: "flex",
  verticalAlign: "middle",
  position: "relative",
  width: "512.9px",  
}

const dividerBoxStyle = {
  border: "2px solid rgba(0, 0, 0, 0.1)",
  padding: ".3em .8em",
  fontWeight: 700,
  textAlign: "center",
  fontSize: "1.25em",
  color: "#555",
  textTransform: "uppercase",
}

const flickityOptions = {
  initialIndex: 2
}

function MiniBanner() {
  return (
    <Carousel autoplay>
      <div>
        <img src={banner1} style={contentStyle} alt="img1" /> 
        <div >
          <Row gutter={30} style={{marginLeft: "15%", paddingTop: "0px"}} >
            <Col className="gutter-row" span={7}>         
                <img alt="men img" style={cardStyle} src={men} />    
            </Col>
             <Col className="gutter-row" style={{ paddingLeft: "170px" }} span={7}>   
              <img alt="women img" style={cardStyle} src={Women} />              
            </Col>
          </Row>
          <Row gutter={30} style={{ marginLeft: "15%", paddingTop: "20px" }} >
            <Col className="gutter-row" span={7}>
              <img alt="men img" style={cardStyle} src={Hoodie} />
            </Col>
            <Col className="gutter-row" style={{ paddingLeft: "170px" }} span={7}>
              <img alt="women img" style={cardStyle} src={Comfy} />
            </Col>
          </Row>
          <Row gutter={30} style={{ marginLeft: "15%", paddingTop: "20px" }} >
            <Col className="gutter-row" span={7}>
              <img alt="men img" style={cardStyle} src={PlainTShirt} />
            </Col>
            <Col className="gutter-row" style={{ paddingLeft: "170px" }} span={7}>
              <img alt="women img" style={cardStyle} src={PoloTShirt} />
            </Col>
          </Row>
          <Row gutter={30} style={{ marginLeft: "15%", paddingTop: "20px" }} >
            <Col className="gutter-row" span={7}>
              <img alt="men img" style={cardStyle} src={Laptop} />
            </Col>
            <Col className="gutter-row" style={{ paddingLeft: "170px" }} span={7}>
              <img alt="women img" style={cardStyle} src={CoffeeMug} />
            </Col>
          </Row>
        </div >
        <Row gutter={30} style={{ marginLeft: "15%", marginRight:"150px", paddingTop: "0px" }} >
          <Col className="gutter-row" flex="auto">
            <Divider orientation="center"><span style={dividerBoxStyle}>HALF SLEEVE T-SHIRTS</span> </Divider>
          </Col>
          <Col className="gutter-row" flex="100px" style={{paddingTop:"19px"}} >
            <a href style={{color:"rgba(0, 0, 0, 0.4)"}}  ><RightOutlined /></a>
          </Col>
        </Row>
        {/* <div class="main-carousel" data-flickity='{ "cellAlign": "right", "contain": true }'>
          <div class="carousel-cell">...</div>
          <div class="carousel-cell">...</div>
          <div class="carousel-cell">...</div>
  
        </div> */}
        <Flickity
          className={'carousel'} // default ''
          elementType={'div'} // default 'div'
          options={flickityOptions} // takes flickity options {}
          disableImagesLoaded={false} // default false
          reloadOnUpdate // default false
          static // default false
        >
          <img src={t1} alt=""/>
          <img src={t2} alt="" />
          <img src={t3} alt="" />
          <img src={t4} alt="" />
        </Flickity>
      </div>
    </Carousel>
  )
}
export default MiniBanner;

