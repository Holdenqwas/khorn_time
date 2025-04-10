import { Layout, Typography, Card, Space } from "antd";
import Link from "antd/es/typography/Link";

const { Content } = Layout;
const { Title } = Typography;

const UsesPage = () => {
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
                  </Link> - ортогональная лоу-профильная сплит-клавиатура, одна из лучших клавиатур, что я пробовал
                </li>
                <li>
                  <Link
                    href="https://keychron-russia.com/k3" target="_blank" strong>
                    Keychron K3
                  </Link> - тихая рабочая клавиатура на оптических переключателях, жаль только без поддержки VIA/QMK
                </li>
                <li>
                  <Link
                    href="https://www.razer.ru/product/mouses/razer-deathadder-v2" target="_blank" strong>
                    Razer DeathAdder V2
                  </Link> - смело могу порекомендовать эту мышь, особенно нравятся её верхние две кнопки, настроенные на переключение треков и паузу
                </li>
                <li>
                  <Link
                    href="https://www.razer.ru/product/mouses/razer-basilisk-v3-x-hyperspeed?sku=RZ01-04870100-R3G1" target="_blank" strong>
                    Razer Basilisk V2 X HyperSpeed
                  </Link> - тоже отличная мышь, ощущается компактнее, чем DeathAdder, зато большой палец удобно располагается в специальном углублении
                </li>
                <li>
                  <Link
                    href="https://audio-technica.ru/catalog/headphones/pro/ath-m40x/" target="_blank" strong>
                    Audio-Technica ATH-M40x
                  </Link> - жемчужина среди наушников: не давят, лёгкие, можно спокойно просидеть в них весь рабочий день
                </li>
              </Space>
            </ul>
          </Card>

          <Card title="Продуктивность">
            <ul>
              <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                <li>
                  <Link
                    href="https://obsidian.md/" target="_blank" strong>
                    Obsidian
                  </Link> - вся база знаний у меня там, особенно удобно с использованием <Link
                    href="https://habr.com/ru/articles/843288/" target="_blank" strong>
                    git-синхронизации
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.onenote.com/?public=1&wdorigin=ondcauth2&wdorigin=ondc" target="_blank" strong>
                    OneNote
                  </Link> - бесконечный черновик для всего: скриншоты, записи, рисование
                </li>
                <li>
                  <Link
                    href="https://timeto.me/" target="_blank" strong>
                    timeto.me
                  </Link> - идеальный трекер времени, почти ничего лишнего
                </li>
              </Space>
            </ul>
          </Card>

          <Card title="Программирование">
            <ul>
              <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                <li>
                  <Link
                    href="https://code.visualstudio.com/" target="_blank" strong>
                    VSCode
                  </Link> - классическая IDE в стандартной теме Dark Modern с иконками <Link
                    href="https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons" target="_blank" strong>
                    vscode-icons
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.jetbrains.com/ru-ru/pycharm/" target="_blank" strong>
                    PyCharm
                  </Link> - на Python пишу в PyCharm, для Python она хороша
                </li>
                <li>
                  <Link
                    href="https://dbeaver.io/" target="_blank" strong>
                    DBeaver
                  </Link> - VSCode в мире утилит для работы с базами данных
                </li>
              </Space>
            </ul>
          </Card>
        </Card>
      </Content>
    </Layout>
  );
};

export default UsesPage;