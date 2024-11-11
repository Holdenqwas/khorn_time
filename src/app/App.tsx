import React from "react";
import { ConfigProvider, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer } = Layout;
import RoutePaths from "../widgets/navigation/routes";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../widgets/navigation/navbar";


const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <Layout>
        <BrowserRouter>
          <NavBar />
          <Content style={{ padding: '0 48px', margin: '16px 0' }}>
            <div
              style={{
                background: colorBgContainer,
                minHeight: 280,
                padding: 24,
                borderRadius: borderRadiusLG,
              }}
            >
              <RoutePaths />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </BrowserRouter>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
