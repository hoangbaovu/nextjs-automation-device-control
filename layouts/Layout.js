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
          <Menu.Item key="1">Điều khiển</Menu.Item>
          <Menu.Item key="2">Thông tin</Menu.Item>
        </Menu>
      </Header>
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
          <Breadcrumb.Item>Điều khiển</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
          { children }
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>&copy;2021 PKH Technologies</Footer>
    </ALayout>
  )
}
