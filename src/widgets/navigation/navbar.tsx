import React, { useState } from 'react';
import { MoonOutlined, BulbOutlined, QuestionCircleOutlined, BookOutlined, BugOutlined } from '@ant-design/icons';
import type { MenuProps, MenuTheme } from 'antd';
import AboutSvg from "../../shared/images/about.svg";
import BlogSvg from "../../shared/images/blog.svg";
import ProjectSvg from "../../shared/images/project.svg";
import { Space, Switch, Menu, theme } from 'antd';
import { Link, Outlet } from 'react-router-dom';


type MenuItem = Required<MenuProps>['items'][number];
export interface NavBarProps {
    toggleTheme: () => void;
}

const NavBar: React.FC<NavBarProps> = (props: NavBarProps) => {
    const [current, setCurrent] = useState('about_me');

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
                <Link to={""}>Обо мне</Link>
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
                <Link to={"project"}>Проекты</Link>
            ),
            key: 'Project',
            icon: <BugOutlined />,
        },
        {
            label:
                (<Switch
                    checkedChildren={<BulbOutlined />}
                    unCheckedChildren={<MoonOutlined />}
                    defaultChecked
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