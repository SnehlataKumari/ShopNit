import { Carousel, Row, Col } from 'antd';
import "./QuickView.css";

const colStyle = {
  height: "420px",
  display: "flex",
  verticalAlign: "middle",
  position: "relative",
  width: "320px",
  backgroundColor: 'red',
}

function QuickView({itemsList= []}) {
  return (
    <>
      <Carousel autoplay className="backgroundRed" dots={{className: 'dot'}}>
        {
          itemsList.map((row, i) => (
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