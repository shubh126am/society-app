import React, { Component } from "react";
import { Wrapper } from "./style";
import { Switch, Route } from "react-router-dom";
import { CONFIG } from "../../app.config";
import { Layout } from "antd";
import { actionCreator } from "../LoginPage/action";
import { connect } from "react-redux";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { withRouter, RouteComponentProps } from "react-router-dom";

import Dashboard from "./scenes/Dashboard/Dashboard";
import FlatPage from "../FlatPage";
import OwnerPage from "../OwnerPage";
import FlatRegistration from "../FlatRegistraion";

const { Content } = Layout;
interface Props extends RouteComponentProps {
  token: any;
  logout: () => void;
}

export class HomePage extends Component<Props> {
  state = {
    collapsed: false
  };

  handleCollapse = (collapsed: boolean) => {
    this.setState({ collapsed });
  };

  handleLogOut = () => {
    this.props.logout();
  };

  handleSidebarClick = (data: any) => {
    this.props.history.push(data.key);
  };

  handleLogout = () => {
    this.props.logout();
  };

  render() {
    console.log(this.props);
    const { match } = this.props;
    return (
      <>
        <Layout style={{ backgroundColor: "transparent", minHeight: "100vh" }}>
          <Navbar
            user={{
              first_name: "Abhinav",
              last_name: "Rao"
            }}
            onLogOut={this.handleLogout}
            notifications={100}
            collapsed={this.state.collapsed}
          />

          <Layout style={{ backgroundColor: "transprent" }}>
            <Sidebar
              currentPath={this.props.location.pathname}
              collapsed={this.state.collapsed}
              onCollapse={this.handleCollapse}
              onClick={this.handleSidebarClick}
            ></Sidebar>
            <Content>
              <Wrapper>
                <Switch>
                  <Route exact path={match.url} component={Dashboard} />
                  <Route path={`${match.url}/flat`} component={FlatPage} />
                  <Route path={`${match.url}/owner`} component={OwnerPage} />
                  <Route
                    path={`${match.url}/flat-registration`}
                    component={FlatRegistration}
                  />
                </Switch>
              </Wrapper>
            </Content>
          </Layout>
        </Layout>
      </>
    );
  }
}

function mapStateToProps(state: any) {
  const { user } = state.get("authentication");
  return {
    token: user
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    logout: () => dispatch(actionCreator.logoutRequest())
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HomePage)
);
