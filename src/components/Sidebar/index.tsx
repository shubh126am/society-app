import React from "react";
import { Layout, Menu, Icon, Tooltip } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CollapseType } from "antd/lib/layout/Sider";
import { ClickParam } from "antd/lib/menu";

const { Sider } = Layout;
const { SubMenu } = Menu;

interface Props {
  collapsed: boolean;
  onCollapse?: (collapsed: boolean, type: CollapseType) => void;
  onClick?: (param: ClickParam) => void;
  currentPath: string;
}

export const Sidebar = (props: Props) => {
  const { collapsed, onCollapse, currentPath, onClick } = props;

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      trigger={
        collapsed ? (
          <Tooltip title="Expand Sidebar" placement="right">
            <div>
              <Icon type="right" />
            </div>
          </Tooltip>
        ) : (
          <Icon type="left" />
        )
      }
    >
      <Menu theme="dark" selectedKeys={[currentPath]} mode="inline">
        <Menu.Item key="/home" onClick={onClick}>
          <i className="anticon em175">
            <FontAwesomeIcon icon="home" />
          </i>
          <span>Home</span>
        </Menu.Item>
        <Menu.Item key="/home/flat" onClick={onClick}>
          <i className="anticon">
            <FontAwesomeIcon icon="id-badge" />
          </i>
          <span>Flat</span>
        </Menu.Item>
        <Menu.Item key="/home/owner" onClick={onClick}>
          <i className="anticon">
            <FontAwesomeIcon icon="key" />
          </i>
          <span>Owner</span>
        </Menu.Item>
        <Menu.Item key="/home/flat-registration" onClick={onClick}>
          <i className="anticon">
            <FontAwesomeIcon icon="tasks" />
          </i>
          <span>Flat Registration</span>
        </Menu.Item>

        <SubMenu
          key="/home/settings"
          title={
            <span>
              <i className="anticon">
                <FontAwesomeIcon icon="cog" />
              </i>
              <span>Settings</span>
            </span>
          }
        >
          <Menu.Item key="/home/settings/profile" onClick={onClick}>
            <i className="anticon">
              <FontAwesomeIcon icon="user-cog" />
            </i>
            <span>Profile Settings</span>
          </Menu.Item>
          <Menu.Item key="/home/settings/login" onClick={onClick}>
            <i className="anticon">
              <FontAwesomeIcon icon="id-badge" />
            </i>
            <span>Login Settings</span>
          </Menu.Item>
          <Menu.Item key="/home/settings/identity" onClick={onClick}>
            <i className="anticon">
              <FontAwesomeIcon icon="sign-in-alt" />
            </i>
            <span>Identity Settings</span>
          </Menu.Item>
          <Menu.Item
            key="/home/settings/permission/abilities"
            onClick={onClick}
          >
            <i className="anticon">
              <FontAwesomeIcon icon="users-cog" />
            </i>
            <span>Permission Settings</span>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};
