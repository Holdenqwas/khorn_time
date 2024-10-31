import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import type { MenuProps, MenuTheme } from 'antd';
import { Space, Switch, Menu } from 'antd';
import { Outlet } from 'react-router-dom';
import { useUnit } from 'effector-react';
import themeStore from '../../shared/model/theme';

type MenuItem = Required<MenuProps>['items'][number];


const NavBar: React.FC = () => {
    const [current, setCurrent] = useState('mail');
    const theme = useUnit(themeStore.theme);
    const toggleTheme = useUnit(themeStore.toggleTheme);

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    const changeTheme = (value: boolean) => {
        toggleTheme();
      };
    
    const items: MenuItem[] = [
        {
            label: 'Navigation One',
            key: 'mail',
            icon: <MailOutlined />,
        },
        {
            label:
                (<Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    defaultChecked
                    onChange={changeTheme}
                />),
            key: 'theme'
        },
        {
            label: 'Navigation Two',
            key: 'app',
            icon: <AppstoreOutlined />,
            disabled: true,
        },
        {
            label: 'Navigation Three - Submenu',
            key: 'SubMenu',
            icon: <SettingOutlined />,
            children: [
                {
                    type: 'group',
                    label: 'Item 1',
                    children: [
                        { label: 'Option 1', key: 'setting:1' },
                        { label: 'Option 2', key: 'setting:2' },
                    ],
                },
                {
                    type: 'group',
                    label: 'Item 2',
                    children: [
                        { label: 'Option 3', key: 'setting:3' },
                        { label: 'Option 4', key: 'setting:4' },
                    ],
                },
            ],
        },
        {
            key: 'alipay',
            label: (
                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                    Navigation Four - Link
                </a>
            ),
        },
    ];

    return (
        <Menu onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
            theme={theme as MenuTheme}
        ><Outlet />
        </Menu>
    );
};

export default NavBar;