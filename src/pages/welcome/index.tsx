import React from "react";
import { Layout, Typography, Card, Row, Col, Divider, Image, Button, Space } from "antd";
import { GithubOutlined, LinkedinOutlined, TwitterOutlined } from '@ant-design/icons';
import Avataaar from '../../shared/images/avataaars.png'

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const About = () => {
  return (
    <Layout>
      <Content style={{ maxWidth: "800px", margin: "auto" }}>
        <Card bordered={false} style={{ borderRadius: "8px" }}>
          {/* Profile Picture */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
            <Image width={120} src={Avataaar} alt="Your Name" />
          </div>

          {/* Name and Introduction */}
          <Title level={2} style={{ textAlign: "center" }}>Обо мне</Title>
          <Paragraph style={{ textAlign: "center" }}>
            Hello! I’m [Your Name], a [Your Profession/Role]. I’m passionate about [mention your field of interest, e.g., software development, data science, design]. 
            I have experience in various projects, and I enjoy learning new technologies and improving my skills.
          </Paragraph>

          {/* Social Links */}
          <Divider />
          <div style={{ textAlign: "center", marginBottom: "24px" }}>
            <Space>
              <Button type="link" icon={<GithubOutlined />} href="https://github.com/yourprofile" target="_blank">
                GitHub
              </Button>
              <Button type="link" icon={<LinkedinOutlined />} href="https://linkedin.com/in/yourprofile" target="_blank">
                LinkedIn
              </Button>
              <Button type="link" icon={<TwitterOutlined />} href="https://twitter.com/yourprofile" target="_blank">
                Twitter
              </Button>
            </Space>
          </div>

          {/* Skills Section */}
          <Title level={3}>Skills</Title>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Card title="JavaScript" bordered={false}>
                Experienced in building applications with JavaScript, React, and Node.js.
              </Card>
            </Col>
            <Col span={12}>
              <Card title="Data Analysis" bordered={false}>
                Skilled in data analysis with Python and libraries like Pandas and NumPy.
              </Card>
            </Col>
          </Row>

          {/* Interests Section */}
          <Divider />
          <Title level={3}>Interests</Title>
          <Paragraph>
            I enjoy working on open-source projects, reading about technology advancements, and collaborating with people on creative ideas. In my free time, I like hiking and exploring new places.
          </Paragraph>

          {/* Achievements Section */}
          <Divider />
          <Title level={3}>Achievements</Title>
          <Paragraph>
            - Completed XYZ certification in software development<br />
            - Built a project that helped increase efficiency by 20% in my previous role<br />
            - Speaker at ABC tech conference in 2023
          </Paragraph>
        </Card>
      </Content>
    </Layout>
  );
};

export default About;
