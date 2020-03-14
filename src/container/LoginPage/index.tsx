import React, { Component } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { LoginFormData, LoginForm } from "./components/LoginForm";
import { CONFIG } from "../../app.config";
import { actionCreator } from "./action";
import { connect } from "react-redux";
import "./style.css";
import { Container, Wrapper, HeaderForm } from "./style";

interface Props extends RouteComponentProps {
  isLoading: boolean;
  loggedIn: boolean;
  errorMessage?: string;
  login: (username: string, password: string, options: any) => void;
}

class LoginPageImpl extends React.Component<Props> {
  handleSubmit = async ({ username, password, remember }: LoginFormData) => {
    const redirectTo =
      new URLSearchParams(this.props.location.search).get("next") || "/home";
    this.props.login(username, password, { remember, redirectTo });
  };

  render() {
    const { isLoading } = this.props;

    return (
      <Container>
        <Wrapper>
          <HeaderForm> {CONFIG.applicationName}</HeaderForm>
          <LoginForm isLoading={isLoading} onSubmit={this.handleSubmit} />
        </Wrapper>
      </Container>
    );
  }
}

function mapStateToProps(state: any) {
  const { loggingIn, loggedIn } = state.get("authentication");
  return {
    loggedIn,
    isLoading: loggingIn
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    login: (username: string, password: string, options: any) =>
      dispatch(actionCreator.loginRequest({ username, password, options }))
  };
}

export const LoginPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LoginPageImpl));
export default LoginPage;
