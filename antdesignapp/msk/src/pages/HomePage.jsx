
import { Row, Col, Divider } from 'antd';
import Menu from '../pages/Menu'

import $ from 'jquery'

function HomePage() {


    function menuHideShow(){
        $('.rootMenu').toggleClass('hide');
    }

    return (
        <>
           
            <Row style={{boxShadow: "0px 0px 32px -1px rgb(0 0 0 / 50%)",padding: "15px 0px",height: "10vh"}}>
                    <Col span={3}><img src="https://cdn2.steamgriddb.com/file/sgdb-cdn/logo/b91a76b0b2fa7ce160212f53f3d2edba.png" className="img_res" alt=""/></Col>
                    <Col span={21} style={{position: "relative"}}> <span className="c_menuIcon" onClick={menuHideShow}>☰</span>	</Col>
            </Row>
            <Row style={{height: "85vh"}}>
                    <Col span={4} className="rootMenu"><Menu/></Col>
                    <Col span={20}></Col>
            </Row>
            <Row style={{"box-shadow": "0px 0px 32px -1px rgb(0 0 0 / 50%)",padding: "15px 0px",height: "5vh"}}>
                    <Col span={24} style={{position: "relative",textAlign: "center",fontSize:18}}> <span>Made with <span style={{color: "pink"}}>❤</span> by Lalit</span></Col>
            </Row>
        </>
    );
  }
  
  export default HomePage;