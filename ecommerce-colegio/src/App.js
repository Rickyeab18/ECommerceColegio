import React from 'react';
import { Layout, Header, Navigation, Drawer, Content, Footer, FooterSection, FooterLinkList} from 'react-mdl';
import './App.css';
import Main from './Components/Main';
import UserValidation from './Components/UserValidation';
import UI from './Components/UI';
import { Link } from 'react-router-dom';
import img from './data/backpic.jpg'

function App() {
  // console.log('./data/backpic.jpg')
  return (
<div className="demo-big-content">
      <Layout transparent style={{ background: 'url(/backpic.jpg) center / cover'}}>
      {/* <Layout > */}
        <Header transparent title="Title" scroll>
        </Header>
        <Content>
            {/* <Main/> */}
            {/* <UserValidation/> */}
            <UI/>
        </Content>
       {/*  <Footer size="mini">
          <FooterSection type="left" logo="Title">
              <FooterLinkList>
                  <a href="#">Help</a>
                  <a href="#">Privacy & Terms</a>
              </FooterLinkList>
          </FooterSection>
      </Footer> */}
    </Layout>
</div>
  );
}

export default App;
