import React from "react";
import { Layout, Typography, Card, Row, Col, Divider, Image, Button, Space, Flex } from "antd";
import { GithubOutlined, GoogleOutlined } from '@ant-design/icons';
import Avataaar from '../../shared/images/avataaars.png'
import telegram from '../../shared/images/telegram.svg'
import leetcode from '../../shared/images/leetcode.svg'
import stepik from '../../shared/images/stepik.svg'
import Link from "antd/es/typography/Link";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const AboutMePage = () => {
  return (
    <Layout>
      <Content style={{ maxWidth: "800px", margin: "auto", fontSize: "1rem" }}>
        <Card bordered={false} style={{ borderRadius: "8px" }}>
          {/* Про себя */}
          <Title level={2} style={{ textAlign: "center" }}>Обо мне</Title>
          <Row>
            <Col span={6}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
                <Image width={120} src={Avataaar} alt="Антон Хорн" />
              </div>
            </Col>
            <Col span={18}>
              <Title level={4}>Привет, меня зовут Антон Хорн.</Title>
              <Paragraph>
                В период до пандемии столкнулся с необходимостью изучения программирования в рамках профессиональной деятельности.
                Это послужило отправной точкой для глубокого погружения в IT-сферу.
              </Paragraph>
            </Col>
          </Row>

          <Paragraph>
            Во время пандемии активно занимался самообразованием, пройдя множество курсов по программированию, начал с курса&nbsp;
            <Link
              href="https://habr.com/ru/companies/vertdider/articles/403823/" target="_blank">
              CS50 от Гарвардского университета
            </Link>. Эти занятия позволили получить базу в информатике и программировании, что стало основой
            для дальнейшего развития. Главное, этот курс подарил любовь к программированию, премного благодарен всем&nbsp;
            <Link
              href="https://cs50.harvard.edu/x/2023/" target="_blank">
              создателям
            </Link> курса, особая благодарность&nbsp;
            <Link
              href="https://vertdider.tv/" target="_blank">
              Vert Dider
            </Link> за перевод на русский язык.
          </Paragraph>

          <Paragraph>
            Дальнейшее обучение продолжил на платформе&nbsp;
            <Link
              href="https://stepik.org/users/250908809/profile" target="_blank">
              Stepik
            </Link>. Познал удовольствие от получения сертификатов и решения задач.
          </Paragraph>
          <Paragraph>
            Пробовал себя в различных направлениях IT, таких как Data Science и машинное обучение,
            веб- и бэкенд-разработка, DevOps. После получения этого опыта остановился на веб- и бэкенд-разработке с упором на бэкенд,
            в которой активно развиваюсь и специализируюсь в настоящее время.
            В качестве отдыха и развлечения от работы занимаюсь разработкой игр.
          </Paragraph>

          {/* Ссылки */}
          <Divider />
          <div style={{ textAlign: "center", marginBottom: "24px" }}>
            <Space>
              <Flex gap="small" wrap>
                <Button type="link" icon={<GithubOutlined />} href={"https://github.com/Holdenqwas"}
                  target="_blank">GitHub</Button>
                <Button type="link" icon={<Image width={15} src={leetcode} preview={false} />}
                  href={"https://leetcode.com/u/holdenqwas/"} target="_blank">LeetCode</Button>
                <Button type="link" icon={<GoogleOutlined />} href={"mailto:pranton0@gmail.com"}
                  target="_blank">Gmail</Button>
                <Button type="link" icon={<Image width={15} src={telegram} preview={false} />}
                  href={"https://t.me/AKhorn"} target="_blank">Telegram</Button>
                <Button type="link" icon={<Image width={15} src={stepik} preview={false} />}
                  href={"https://stepik.org/users/250908809/profile"} target="_blank">Сертификаты обучения</Button>
              </Flex>
            </Space>
          </div>

          {/* Навыки */}
          <Title level={3}>Навыки</Title>
          <Row>
            <Col span={12}>
              <Card title="Backend" bordered={false}>
                Последний год делал приложение на FastAPI с базой на PostgreSQL, использовал ORM библиотеку SQLAlchemy.
              </Card>
            </Col>
            <Col span={12}>
              <Card title="Frontend" bordered={false}>
                Делал приложения на TypeScript, React, с использованием инструмента сборки Rsbuild.
              </Card>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Card title="DevOps" bordered={false}>
                Был опыт использования Docker, Ansible, Vagrant.
              </Card>
            </Col>
            <Col span={12}>
              <Card title="Data Science" bordered={false}>
                Есть навыки анализа данных на Python с применением Pandas и NumPy, 
                применял scikit-learn, графики рисовал в основном на Plotly.
              </Card>
            </Col>
          </Row>
        </Card>
      </Content>
    </Layout>
  );
};

export default AboutMePage;