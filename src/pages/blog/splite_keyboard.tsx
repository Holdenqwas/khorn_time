import { Layout, Typography, Card, Flex } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import { useNavigate } from "react-router-dom";
import Tags from "../../shared/ui/tags";

const { Content } = Layout;
const { Title } = Typography;

const SpliteKeyboardPage = () => {

  return (
    <Layout>
      <Content style={{ maxWidth: "800px", margin: "auto" }}>
        <Card>
          <Title level={2} style={{ textAlign: "center" }}>Corne клавиатура</Title>
        </Card>
      </Content>
    </Layout >
  );
};

export default SpliteKeyboardPage;
