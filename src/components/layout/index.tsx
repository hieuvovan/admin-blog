import React from 'react';
import { Outlet, useNavigate } from 'react-router';

import type { MenuProps } from 'antd';
import {
  UserOutlined,
  EditOutlined,
  BookOutlined,
  FolderOutlined,
  DeleteOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons';
import { Layout as AntdLayout, Menu, Button } from 'antd';
import './layout.scss';

const { Header, Content, Sider } = AntdLayout;

const MENU_ITEMS: MenuProps['items'] = [
  {
    key: 'account',
    icon: <UserOutlined />,
    label: 'Account',
  },
  {
    key: 'create-post',
    icon: <EditOutlined />,
    label: 'Write post',
  },
  {
    key: 'my-posts',
    icon: <FolderOutlined />,
    label: 'My posts',
    children: [
      {
        key: 'my-posts/available',
        icon: <CheckCircleOutlined />,
        label: 'Available',
      },
      {
        key: 'my-posts/deleted',
        icon: <DeleteOutlined />,
        label: 'Deleted',
      },
    ],
  },
  {
    key: 'bookmark',
    icon: <BookOutlined />,
    label: 'Bookmark',
  },
];

export default function Layout() {
  const navigate = useNavigate();

  return (
    <AntdLayout className="main-layout">
      <Header className="header">
        <div className="logo"></div>
        <div className="header-right">
          <Button type="primary">Logout</Button>
        </div>
      </Header>
      <AntdLayout>
        <Sider
          className="sidebar"
          width={200}
        >
          <Menu
            className="c"
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            items={MENU_ITEMS}
            onSelect={(info) => {
              navigate(`/${info.key}`);
            }}
          />
        </Sider>
        <Content className="content">
          <Outlet />
        </Content>
      </AntdLayout>
    </AntdLayout>
  );
}
