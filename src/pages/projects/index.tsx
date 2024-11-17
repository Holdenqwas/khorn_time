import { Layout, Typography, Card } from "antd";
import Paragraph from "antd/es/typography/Paragraph";

const { Content } = Layout;
const { Title } = Typography;

const ProjectsPage = () => {
  const gridStyle: React.CSSProperties = {
    width: '100%',
    textAlign: 'left',
    cursor: 'pointer'
  };
  const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Layout>
      <Content style={{ maxWidth: "800px", margin: "auto" }}>
        <Card>
          <Title level={2} style={{ textAlign: "center" }}>Проекты</Title>
          <Card title="Готовые">
            <Card.Grid style={gridStyle} onClick={() => openInNewTab("https://t.me/khorn_butler_bot")} hoverable={true}>
              <Title level={3}>KhornBot - Бот помощник в Telegram
              </Title>
              <Paragraph style={{ marginTop: "10px" }}>Сохранение прогресса на тренировках, ведение многопользовательского списка покупок</Paragraph>
              <Paragraph style={{ marginTop: "10px" }}>11 ноября 2024 г.</Paragraph>
            </Card.Grid>
          </Card>
        </Card>
      </Content>
    </Layout >
  );
};

export default ProjectsPage;
