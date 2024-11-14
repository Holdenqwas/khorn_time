import React from 'react';
import { MoonOutlined, BulbOutlined, QuestionCircleOutlined, BookOutlined, BugOutlined, HomeOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Switch, Menu, theme } from 'antd';
import { Link } from 'react-router-dom';
import { useUnit } from 'effector-react';
import locationStore from '../../shared/model/location';


type MenuItem = Required<MenuProps>['items'][number];
export interface NavBarProps {
    toggleTheme: () => void;
    isLight: boolean;
}

const NavBar: React.FC<NavBarProps> = (props: NavBarProps) => {
    const location = useUnit(locationStore.location);
    const setLocation = useUnit(locationStore.setLocation);

    const onClick: MenuProps['onClick'] = (e) => {
        setLocation(e.key);
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
            selectedKeys={[location]}
            mode="horizontal"
            items={items}
            style={{
                position: "fixed",
                top: "0", width: "100%", overflow: "hidden", zIndex: "99"
            }} />
    );
};

export default NavBar;