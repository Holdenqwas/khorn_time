import { Layout, Typography, Card, Flex } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import { useNavigate } from "react-router-dom";
import Tags from "../../shared/ui/tags";

const { Content } = Layout;
const { Title } = Typography;

const BlogPage = () => {
  const gridStyle: React.CSSProperties = {
    width: '100%',
    textAlign: 'left',
  };
  const navigate = useNavigate();
  return (
    <Layout>
      <Content style={{ maxWidth: "800px", margin: "auto" }}>
        <Card>
          <Title level={2} style={{ textAlign: "center" }}>Что использую</Title>
          <Card title="Cтатьи">
            <Card.Grid style={gridStyle} onClick={() => navigate("splite_keyboard")} hoverable={true}>
              <Title level={5}>Split keyboard, или Сколько пробегают мои пальцы
              </Title>
              <Flex gap="4px 0" wrap>
                {Tags.devices}
                {Tags.programming}
              </Flex>
              <Paragraph style={{ marginTop: "10px" }}>11 ноября 2024 г.</Paragraph>
            </Card.Grid>
            <Card.Grid style={gridStyle} onClick={() => navigate("/uses")} hoverable={true}>
              <Title level={5}>Что я использую
              </Title>
              <Flex gap="4px 0" wrap>
                {Tags.devices}
                {Tags.opinion}
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

export default BlogPage;
