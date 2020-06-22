import React from 'react';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
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
  
  
      <Layout style={{ background: 'url(/backpic.jpg) center / cover'}}>
      
        <Header transparent title="Title" scroll>
        </Header>
        <Content>
            {/* <Main/> */}
            {/* <UserValidation/> */}
            <UI/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
