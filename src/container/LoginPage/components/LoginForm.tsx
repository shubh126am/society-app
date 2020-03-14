import React from "react";
import Text from "antd/lib/typography/Text";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import { FormComponentProps } from "antd/lib/form";

interface Props extends FormComponentProps {
  isLoading: boolean;
  onSubmit: (data: LoginFormData) => void;
}

interface State {
  isCapsLockOn: boolean;
}

export type LoginFormData = {
  username: string;
  password: string;
  remember: boolean;
};

class NormalLoginForm extends React.PureComponent<Props, State> {
  state: State = {
    isCapsLockOn: false
  };

  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.form.validateFields((err: any, values: any) => {
      if (!err) {
        this.props.onSubmit(values);
      }
    });
  };

  handleKeyDown = (keyEvent: React.KeyboardEvent<HTMLInputElement>) => {
    if (keyEvent.getModifierState("CapsLock")) {
      this.setState({ isCapsLockOn: true });
    } else {
      this.setState({ isCapsLockOn: false });
    }
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { isCapsLockOn } = this.state;

    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator("username", {
            rules: [
              {
                required: true,
                whitespace: true,
                message: "Username is a required field"
              }
            ]
          })(
            <Input
              autoFocus
              size="large"
              placeholder="Username"
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            />
          )}
        </Form.Item>
        <Form.Item
          help={
            isCapsLockOn && (
              <Text type="warning">
                <Icon type="warning" /> CapsLock is on
              </Text>
            )
          }
          validateStatus={(isCapsLockOn && "warning") || undefined}
        >
          {getFieldDecorator("password", {
            rules: [
              {
                required: true,
                whitespace: true,
                message: "Password is a required field"
              },
              { min: 3, message: "Password must be at least 3 characters" }
            ]
          })(
            <Input.Password
              size="large"
              type="password"
              placeholder="Password"
              onKeyDown={this.handleKeyDown}
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("remember", {
            valuePropName: "checked",
            initialValue: false
          })(<Checkbox>Remember me</Checkbox>)}
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            size="large"
            htmlType="submit"
            loading={this.props.isLoading}
            disabled={this.props.isLoading}
            style={{ width: "100%" }}
          >
            {!this.props.isLoading && <Icon type="login" />}
            {this.props.isLoading ? "Signing in..." : "Sign In"}
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export const LoginForm = Form.create<Props>({ name: "login_form" })(
  NormalLoginForm
);
