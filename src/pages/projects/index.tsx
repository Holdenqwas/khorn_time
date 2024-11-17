import { Layout, Typography, Card } from "antd";


const { Content } = Layout;
const { Title } = Typography;

const ProjectsPage = () => {
  return (
    <Layout>
      <Content style={{ maxWidth: "800px", margin: "auto" }}>
        <Card>
          <Title level={2} style={{ textAlign: "center" }}>Проекты</Title>
        </Card>
      </Content>
    </Layout >
  );
};

export default ProjectsPage;
