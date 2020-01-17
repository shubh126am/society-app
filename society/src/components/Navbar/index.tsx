import React from "react";
import { Link } from "react-router-dom";
import { Layout, Avatar, Dropdown, Menu, Icon, Badge, Tooltip } from "antd";
import { Username, NavItem, RightContent, BrandLink } from "./style";
import { CONFIG } from "../../app.config";
// import { SpeechRecognition } from '../SpeechRecognition';
import Text from "antd/lib/typography/Text";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const { Header } = Layout;

interface Props {
  user: {
    first_name: String;
    last_name: String;
  };
  onLogOut: () => void;
  notifications?: number;
  collapsed?: boolean;
}

export const Navbar = (props: Props) => {
  const profileMenu = (
    <Menu>
      <Menu.Item key="center">
        <Link to="/home/myprofile">
          <Icon type="user" style={{ paddingRight: 8 }} />
          <Text>Account Center</Text>
        </Link>
      </Menu.Item>
      <Menu.Item key="account">
        <Link to="/home/settings/account">
          <Icon type="setting" style={{ paddingRight: 8 }} />
          <Text>Account Settings</Text>
        </Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item onClick={props.onLogOut} key="logout">
        <Icon type="logout" />
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Header className="nav-bar" style={{ padding: "0px" }}>
      <BrandLink to="/">
        <FontAwesomeIcon
          icon="building"
          style={{ marginRight: "10px" }}
        ></FontAwesomeIcon>

        {!props.collapsed ? CONFIG.applicationName : null}
      </BrandLink>

      {/* <SpeechRecognition /> */}

      <RightContent>
        <Tooltip title="Tasks">
          <NavItem>
            <Link to="/home/tasks">
              <Badge
                count={
                  (props.notifications || "") >= 10 ? "9+" : props.notifications
                }
                style={{ boxShadow: "none", fontSize: "x-small", padding: 0 }}
              >
                <Icon
                  type="bell"
                  style={{
                    color: "#fff",
                    padding: "4px",
                    fontSize: 20,
                    verticalAlign: "middle"
                  }}
                />
              </Badge>
            </Link>
          </NavItem>
        </Tooltip>
        <Dropdown overlay={profileMenu}>
          <NavItem>
            <Avatar size="default" icon="user" style={{ marginRight: 6 }} />
            <Username style={{ color: "#fff" }}>
              {`${props.user.first_name} ${props.user.last_name}` || "User"}
            </Username>
          </NavItem>
        </Dropdown>
      </RightContent>
    </Header>
  );
};
