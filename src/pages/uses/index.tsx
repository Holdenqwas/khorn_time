import React from 'react';
import { Layout, Typography, Card, Row, Col, Divider, Image, Button, Space, Flex } from "antd";
import { GithubOutlined, GoogleOutlined } from '@ant-design/icons';
import Avataaar from '../../shared/images/avataaars.png'
import telegram from '../../shared/images/telegram.svg'
import leetcode from '../../shared/images/leetcode.svg'
import stepik from '../../shared/images/stepik.svg'
import Link from "antd/es/typography/Link";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const UsesPage = () => {
  const gridStyle: React.CSSProperties = {
    width: '100%',
    textAlign: 'left',
  };

  return (
    <Layout>
      <Content style={{ maxWidth: "800px", margin: "auto" }}>
        <Card>
          <Title level={2} style={{ textAlign: "center" }}>Что использую</Title>
          <Card title="Периферийные устройства">

            <ul>
              <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                <li>
                  <Link
                    href="https://github.com/foostan/crkbd" target="_blank" strong>
                    Corne keyboard
                  </Link> - ортогональная лоу профильная сплит клавиатура, одна из лучших клавиатур, что я пробовал
                </li>
                <li>
                  <Link
                    href="https://keychron-russia.com/k3" target="_blank" strong>
                    Keychron K3
                  </Link> - тихая рабочая клавиатура на оптических переключателях, жаль только без VIA/QMK
                </li>
                <li>
                  <Link
                    href="https://www.razer.ru/product/mouses/razer-deathadder-v2" target="_blank" strong>
                    Razer DeathAdder V2
                  </Link> - смело могу порекомендовать мышь, особенно нравятся ее верхние две клавиши настроееные на переключение песни и паузу
                </li>
                <li>
                  <Link
                    href="https://www.razer.ru/product/mouses/razer-basilisk-v3-x-hyperspeed?sku=RZ01-04870100-R3G1" target="_blank" strong>
                    Razer Basilisk V2 X HyperSpeed
                  </Link> - тоже отличная мышь, ощущается меньше, чем DeathAdder, зато большой палец причален в свою нишу
                </li>
                <li>
                  <Link
                    href="https://audio-technica.ru/catalog/headphones/pro/ath-m40x/" target="_blank" strong>
                    Audio-Technica ATH-M40x
                  </Link> - жемчужина среди наушников, не давят, легкие, можно спокойно просидеть в них рабочий день
                </li>
              </Space>
            </ul>

          </Card>
        </Card>
      </Content>
    </Layout >
  );
};

export default UsesPage;