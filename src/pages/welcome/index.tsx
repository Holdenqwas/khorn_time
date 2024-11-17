import React from "react";
import { Layout, Typography, Card, Divider, Image, Button, Flex } from "antd";
import { BookOutlined, QuestionCircleOutlined, ToolOutlined } from '@ant-design/icons';
import Avataaar from '../../shared/images/avataaars.png'
import { useNavigate } from "react-router-dom";
import Tags from "../../shared/ui/tags";
import locationStore from "../../shared/model/location";
import { useUnit } from "effector-react";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const WelcomePage = () => {
  const gridStyle: React.CSSProperties = {
    width: '100%',
    textAlign: 'left',
  };
  const setLocation = useUnit(locationStore.setLocation);
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    setLocation(path);
    navigate(path);
  };

  return (
    <Layout>
      <Content style={{ maxWidth: "800px", margin: "auto" }}>
        <Card bordered={false} style={{ borderRadius: "8px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
            <Image width={120} src={Avataaar} alt="Антон Хорн" />
          </div>

          <Title level={2} style={{ textAlign: "center" }}>Привет, я Антон. Приятно познакомиться!</Title>
          <Title level={4} style={{ textAlign: "left" }}>Я инженер-программист, backend-разработчик на python,
            react-разработчик, <br />а еще нефтяник и геймер.</Title>
          <Title level={4} style={{ textAlign: "left" }}>Сейчас работаю программистом в нефтяной компании ПАО "Татнефть"</Title>
          <Divider />
          <Flex gap="small" wrap>
            <Button icon={<BookOutlined />} onClick={() => handleNavigate("blog")}>Блог</Button>
            <Button icon={<QuestionCircleOutlined />} onClick={() => handleNavigate("about_me")}>Обо мне</Button>
            <Button icon={<ToolOutlined />} onClick={() => handleNavigate("uses")}>Что использую</Button>
          </Flex>
          <Divider />
          <Card title="Последние статьи">
            <Card.Grid style={gridStyle} onClick={() => handleNavigate("/blog/splite_keyboard")} hoverable={true}>
              <Title level={5}>Split keyboard, или Сколько пробегают мои пальцы
              </Title>
              <Flex gap="4px 0" wrap>
                {Tags.devices}
                {Tags.programming}
              </Flex>
              <Paragraph style={{ marginTop: "10px" }}>11 ноября 2024 г.</Paragraph>
            </Card.Grid>
          </Card>
        </Card>
      </Content>
    </Layout >
  );
};

export default WelcomePage;
