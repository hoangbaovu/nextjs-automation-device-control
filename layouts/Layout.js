import React from 'react';
import 'antd/dist/antd.min.css';

import { Layout as ALayout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = ALayout;


export function Layout({ children }) {
  return (
    <ALayout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
          { children }
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>PKH Technologies &copy;2021</Footer>
    </ALayout>
  )
}
