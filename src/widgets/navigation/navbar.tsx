import React, { useState } from 'react';
import { MoonOutlined, BulbOutlined } from '@ant-design/icons';
import type { MenuProps, MenuTheme } from 'antd';
import AboutSvg from "../../shared/images/about.svg";
import BlogSvg from "../../shared/images/blog.svg";
import ProjectSvg from "../../shared/images/project.svg";
import { Space, Switch, Menu } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import { useUnit } from 'effector-react';
import themeStore from '../../shared/model/theme';

type MenuItem = Required<MenuProps>['items'][number];


const NavBar: React.FC = () => {
    const [current, setCurrent] = useState('about_me');
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
            label: (
                <Link to={""}>Обо мне</Link>
            ),
            key: 'about_me',
            icon: <img src={AboutSvg} alt="About" className={theme == "dark" ? "light-color" : undefined}/>,
        },
        {
            label: (
                <Link to={"blog"}>Блог</Link>
            ),
            key: 'blog',
            icon: <img src={BlogSvg} alt="Blog" className={theme == "dark" ? "light-color" : undefined}/>,
        },
        {
            label: (
                <Link to={"project"}>Проекты</Link>
            ),
            key: 'Project',
            icon: <img src={ProjectSvg} alt="Project" className={theme == "dark" ? "light-color" : undefined}/>,
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
            items={items}
            theme={theme as MenuTheme}/>
    );
};

export default NavBar;