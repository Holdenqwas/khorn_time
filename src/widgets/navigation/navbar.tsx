import React, { useState } from 'react';
import { MoonOutlined, BulbOutlined, QuestionCircleOutlined, BookOutlined, BugOutlined, HomeOutlined } from '@ant-design/icons';
import type { MenuProps, MenuTheme } from 'antd';
import AboutSvg from "../../shared/images/about.svg";
import BlogSvg from "../../shared/images/blog.svg";
import ProjectSvg from "../../shared/images/project.svg";
import { Space, Switch, Menu, theme } from 'antd';
import { Link, Outlet } from 'react-router-dom';


type MenuItem = Required<MenuProps>['items'][number];
export interface NavBarProps {
    toggleTheme: () => void;
    isLight: boolean;
}

const NavBar: React.FC<NavBarProps> = (props: NavBarProps) => {
    const [current, setCurrent] = useState('welcome');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    const changeTheme = (value: boolean) => {
        props.toggleTheme();
    };

    const {
        token: { colorIcon },
    } = theme.useToken();

    const items: MenuItem[] = [
        {
            label: (
                <Link to={""}>Главная</Link>
            ),
            key: 'welcome',
            icon: <HomeOutlined />,
        },
        {
            label: (
                <Link to={"about_me"}>Обо мне</Link>
            ),
            key: 'about_me',
            icon: <QuestionCircleOutlined />,
        },
        {
            label: (
                <Link to={"blog"}>Блог</Link>
            ),
            key: 'blog',
            icon: <BookOutlined />,
        },
        {
            label: (
                <Link to={"projects"}>Проекты</Link>
            ),
            key: 'projects',
            icon: <BugOutlined />,
        },
        {
            label:
                (<Switch
                    checkedChildren={<BulbOutlined />}
                    unCheckedChildren={<MoonOutlined />}
                    defaultChecked={props.isLight}
                    onChange={changeTheme}
                />),
            key: 'theme',
            disabled: true,
        },
    ];

    return (
        <Menu onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items} />
    );
};

export default NavBar;