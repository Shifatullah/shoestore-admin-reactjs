import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Switch, Route, Link } from 'react-router-dom'
import Catalogues from './Catalogues';
import Categories from './Categories';
import Products from './Products';
import Images from './Images';
import Videos from './Videos';
import Customers from './Customers';
import Baskets from './Baskets';
import Orders from './Orders';
import Users from './Users';

const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;

function App() {  
    return (<div>
<Layout>
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1"><Link to="/products">Products</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/customers">Customers</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/orders">Orders</Link></Menu.Item>
      </Menu>
    </Header>
    <Layout>
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="laptop" />
                Products
              </span>
            }
          >
            <Menu.Item key="1"><Link to="/products">Products</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/catalogues">Catalogues</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/categories">Categories</Link></Menu.Item>
            <Menu.Item key="4"><Link to="/images">Images</Link></Menu.Item>
            <Menu.Item key="5"><Link to="/videos">Videos</Link></Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="user" />
                Customer
              </span>
            }
          >
            <Menu.Item key="6"><Link to="/customers">Customers</Link></Menu.Item>
            <Menu.Item key="7"><Link to="/baskets">Baskets</Link></Menu.Item>
            <Menu.Item key="8"><Link to="/orders">Orders</Link></Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            title={
              <span>
                <Icon type="notification" />
                Users
              </span>
            }
          >
            <Menu.Item key="9"><Link to="/users">Users</Link></Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Content
          style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <Switch>
            <Route path="/catalogues" component={Catalogues}></Route>
            <Route path="/categories" component={Categories}></Route>
            <Route path="/products" component={Products}></Route>
            <Route path="/images" component={Images}></Route>
            <Route path="/videos" component={Videos}></Route>
            <Route path="/customers" component={Customers}></Route>
            <Route path="/baskets" component={Baskets}></Route>
            <Route path="/orders" component={Orders}></Route>
            <Route path="/users" component={Users}></Route>
          </Switch>
        </Content>
      </Layout>
    </Layout>
  </Layout>
    </div>);
}

export default App;