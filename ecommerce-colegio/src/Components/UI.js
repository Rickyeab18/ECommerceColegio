import React from 'react';
// import '../../App.css';
import Main from './Main';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import { Link } from 'react-router-dom';
// import img from './data/backpic.jpg'

export default function UI() {
    return (
        <div className="demo-big-content">
            {/* <Layout style={{ background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}> */}
            <Layout>
                <Header transparent title="Title" scroll>
                    <Navigation>
                    <Link to="/Inicio">Inicio</Link>
                    <Link to="/LandingPage">Pagos</Link>
                    <Link to="/Help">Ayuda</Link>
                    <Link to="/PostData">Json Data</Link>
                    <Link to="/MainPay">Main Pago</Link>
                    </Navigation>
                </Header>
                <Drawer title="Title">
                    <Navigation>
                    <Link to="/Inicio">Inicio</Link>
                    <Link to="/LandingPage">Pagos</Link>
                    <Link to="/Help">Ayuda</Link>
                    <Link to="/PostData">Json Data</Link>
                    <Link to="/MainPay">Main Pago</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    {<Main/>}
                    {/* <UserValidation/> */}
                </Content>
            </Layout>
        </div>
    )
}
