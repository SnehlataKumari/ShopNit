import { Carousel, Image, Row, Col } from 'antd';
import "./QuickView.css";
import t1 from '../../assets/img/quickView/t1.jpg';
import t2 from '../../assets/img/quickView/t2.jpg';
import t3 from '../../assets/img/quickView/t3.jpg';
import t4 from '../../assets/img/quickView/t4.jpg';
import t5 from '../../assets/img/quickView/t5.jpg';
import t6 from '../../assets/img/quickView/t6.jpg';
import t7 from '../../assets/img/quickView/t7.jpg';
import t8 from '../../assets/img/quickView/t8.jpg';

// function onChange(a) {
//   console.log(a);
// }

const colStyle = {
  height: "420px",
  display: "flex",
  verticalAlign: "middle",
  position: "relative",
  width: "320px",
  backgroundColor: 'red',
}

function QuickView() {
  return (
    <>
      <Carousel autoplay className="backgroundRed" dots={{className: 'dot'}}>
        {/* {
          [t1, t2, t3, t4,t5, t6, t7, t8].map((imgSrc, i) => (
            <div key={i} style={colStyle} className="asdf">
              <img src={imgSrc} style={colStyle} alt="sfd"/>
            </div>
          ))
        } */}

        {
           [[t1, t2, t3, t4],[t5, t6, t7, t8]].map((row, i) => (
             <div>
               <Row key={i}>
                 {
                   row.map((col, i) => (
                     <Col className="gutter-row" marginLeft="15%" span={6} key={i}>
                       <img alt="" width="320px" height="420px" style={colStyle} src={col} />
                     </Col>
                   ))
                 }
               </Row>
             </div>
            
           ))
        }
      </Carousel>
      
        
     
    </>
  );
}

export default QuickView;