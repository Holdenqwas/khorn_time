import { Layout, Typography, Card, Button, Form, Input, FormProps, message } from "antd";
import { useSearchParams } from "react-router-dom";


type FieldType = {
    user_id: string;
    verify_code: string;
    state?: string;
    client_id?: string;
    scope?: string;
    redirect_uri?: string;
};

const { Content } = Layout;
const { Title } = Typography;

const ConnectAlicePage = () => {
    const [queryParams] = useSearchParams();
    const state = queryParams.get('state');
    const client_id = queryParams.get('client_id');
    const scope = queryParams.get('scope');
    const redirect_uri = queryParams.get('redirect_uri');

    // const [messageApi, contextHolder] = message.useMessage();

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        values.user_id = values.user_id.replace(/-/g, '');
        values.verify_code = values.verify_code.replace(/-/g, '');

        values.state = state || '';
        values.client_id = client_id || '';
        values.scope = scope || '';
        values.redirect_uri = redirect_uri || '';
        console.log('Success:', values);

        fetch(process.env.PUBLIC_BACKEND_URL + 'login', {
            method: 'POST',
            redirect: "follow",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
          })
        .then(response => {
            if (!response.ok) {
                response.json().then(data => {
                    const detail = data.detail;
                    message.error(detail);
                  });
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();

        })
        .then(data => {
            // message.success('Бот успешно привязан');
            const redirectUrl = `${redirect_uri}?code=${data.code}&state=${state}&client_id=${client_id}&scope=${scope}`;

            // Редирект на URI Диалогов
            window.location.href = redirectUrl;

            // window.location.href = data.url;
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        message.error('Данные заполнены некорректно!');
    };

    const handleInputChange = (value: string, long: Boolean = true) => {
        value = value.replace(/-/g, ''); // Удаляем все дефисы
        value = value.replace(/\D/g, ''); // Удаляем все нецифровые символы

        // Форматируем значение
        if (value.length > 3) {
            value = value.slice(0, 3) + '-' + value.slice(3);
        }
        if (long && value.length > 7) {
            value = value.slice(0, 7) + '-' + value.slice(7);
        }

        return value.slice(0, (long ? 11 : 7));
    };

    return (
        <Layout>
            <Content style={{ maxWidth: "800px", margin: "auto" }}>
                <Card bordered={false} style={{ borderRadius: "8px" }}>
                    <Title level={2} style={{ textAlign: "center" }}>Подключение бота к Алисе</Title>
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 8 }}
                        style={{ maxWidth: 800 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item<FieldType>
                            label="Первое число"
                            name="user_id"
                            rules={[{ required: true, message: 'Пожалуйста, введите число!' },
                                () => ({
                                    validator(_, value) {
                                      if (value && value.length == 11) {
                                        return Promise.resolve();
                                      }
                                      return Promise.reject(new Error('Нужно ввести все 9 чисел!'));
                                    },
                                  }),
                            ]}
                            normalize={(value) => handleInputChange(value)}
                        >
                            <Input placeholder="123-456-789" />
                        </Form.Item>

                        <Form.Item<FieldType>
                            label="Второе число"
                            name="verify_code"
                            rules={[{ required: true, message: 'Пожалуйста, введите число!' },
                                () => ({
                                    validator(_, value) {
                                      if (value && value.length == 7) {
                                        return Promise.resolve();
                                      }
                                      return Promise.reject(new Error('Нужно ввести все 6 чисел!'));
                                    },
                                  }),]}
                            normalize={(value) => handleInputChange(value, false)}
                        >
                            <Input placeholder="123-456" />
                        </Form.Item>

                        <Form.Item label={null}>
                            <Button type="primary" htmlType="submit">
                                Отправить
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Content>
        </Layout >
    );
};

export default ConnectAlicePage;
