import { ConfigProvider, Flex, Layout, theme } from 'antd';

const { Content } = Layout;
import RoutePaths from "../widgets/navigation/routes";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../widgets/navigation/navbar";
import { useUnit } from 'effector-react';
import themeStore from '../shared/model/theme';
import FooterClass from "../widgets/navigation/footer";

const App = () => {
  const {
    token: { borderRadiusLG },
  } = theme.useToken();

  const themeValue = useUnit(themeStore.theme);
  const toggleTheme = useUnit(themeStore.toggleTheme);
  const isLight = useUnit(themeStore.isLight);

  return (
    <ConfigProvider
      theme={{
        algorithm: themeValue,
      }}
    >
      <Layout style={{ minHeight: '100vh' }}>
        <BrowserRouter>
          <NavBar toggleTheme={toggleTheme} isLight={isLight} />
          <Flex gap="middle" vertical style={{ flex: 1, marginTop: "5vh" }}>
            <Flex flex={'1 1 auto'} style={{ width: '100%' }}>
              <Content style={{ flex: '1 1 auto' }}>
                <Layout
                  style={{ padding: '24px 0', borderRadius: borderRadiusLG }}
                >
                  <RoutePaths />
                </Layout>
              </Content>
            </Flex>
            <Flex flex={'0 0 auto'} justify="center">
              <FooterClass />
            </Flex>
          </Flex>
        </BrowserRouter>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
