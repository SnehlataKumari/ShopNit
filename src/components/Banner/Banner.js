import { Carousel } from 'antd';
import  banner1  from '../../assets/img/banner/Nerd-Banner-.jpg';
import  banner2 from '../../assets/img/banner/Mens-Banner.jpg';
import  banner3  from '../../assets/img/banner/Winter-Banner.jpg';


const contentStyle = {
  // height: '360px',
  // color: '#fff',
  // lineHeight: '160px',
  // textAlign: 'center',
  // background: '#364d79',
  height: '683.638px',
  touchAction: 'pan-y',

};

function Banner() {
  return(
    <Carousel autoplay>
      <div>
        <img src={banner1} style={contentStyle} alt="img1"/>
      </div>
      <div>
        <img src={banner2} style={contentStyle} alt="img2"/>
      </div>
      <div>
        <img src={banner3} style={contentStyle} alt="img3"/>
      </div>
    </Carousel>
  )
}
export default Banner;