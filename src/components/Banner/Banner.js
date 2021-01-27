import { Carousel } from 'antd';
import  banner1  from '../../assets/img/banner/Nerd-Banner-.jpg';
import  banner2 from '../../assets/img/banner/Mens-Banner.jpg';
import  banner3  from '../../assets/img/banner/Winter-Banner.jpg';

const contentStyle = {
  height: '683.638px',
  touchAction: 'pan-y',
};

const Poster = ({ imgSrc, altMessage }) => (
  <img src={imgSrc} style={contentStyle} alt={altMessage} />
);

const posters = [
  <Poster imgSrc={banner1} altMessage="img1" />,
  <Poster imgSrc={banner2} altMessage="img2" />,
  <Poster imgSrc={banner3} altMessage="img3" />,
];

function Banner() {
  return (
    <Carousel autoplay>
      {posters.map((poster, i) => (
        <div key={i}>{poster}</div>
      ))}
    </Carousel>
  );
}

export default Banner;

// function Banner() {
//   return (
//     <Carousel autoplay>
//       <div>
//         <img src={banner1} style={contentStyle} alt="img1"/>
//       </div>
//       <div>
//         <img src={banner2} style={contentStyle} alt="img2" />
//       </div>
//       <div>
//         <img src={banner3} style={contentStyle} alt="img3" />
//       </div>
//     </Carousel>
//   );
// }
// export default Banner;