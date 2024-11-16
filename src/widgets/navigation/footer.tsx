import React from 'react';
import { GithubOutlined, GoogleOutlined } from '@ant-design/icons';
import { Flex, Button, Image } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import telegram from '../../shared/images/telegram.svg'



const FooterClass: React.FC = () => {
    return (
        <Footer style={{ textAlign: 'center' }}>
            <Flex gap="small" wrap>
                <Button type="link" icon={<GithubOutlined />}
                    href={"https://github.com/Holdenqwas"}
                    target="_blank">GitHub</Button>
                <Button type="link" icon={<GoogleOutlined />}
                    href={"mailto:pranton0@gmail.com"}
                    target="_blank">Gmail</Button>
                <Button type="link" icon={<Image width={15}
                    src={telegram} preview={false} />}
                    href={"https://t.me/AKhorn"} target="_blank">Telegram</Button>
            </Flex>
        </Footer>
    );
};

export default FooterClass;