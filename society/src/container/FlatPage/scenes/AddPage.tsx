import React, { Component } from "react";
import { Input, Form, Button, Select, notification, Icon, Modal } from "antd";
import { FormComponentProps } from "antd/lib/form";
import { notificationConfig, notificationConfigProps } from "../saga";
import { ButtonWrapper, FormWrapper } from "../style";
import { connect } from "react-redux";
import { actionCreators } from "../action";
import { RouteComponentProps } from "react-router";
const { Option } = Select;
type FormProps = {
  flatNumber: string;
  floor: string;
  roomtype: string;
  buildupArea: string;
  carpetArea: string;
  entranceDirection: string;
};

interface AddPageProps extends FormComponentProps, RouteComponentProps {
  isLoading: boolean;
  onSubmit: (data: FormProps) => void;
  displayModal: boolean;
}

class AddPage extends Component<AddPageProps> {
  state = {
    flatNumber: "",
    floor: [
      {
        value: "Ground Floor",
        name: "Ground Floor"
      },
      {
        value: "First Floor",
        name: "First Floor"
      },
      {
        value: "Second Floor",
        name: "Second Floor"
      },
      {
        value: "Third Floor",
        name: "Third Floor"
      },
      {
        value: "Fourth Floor",
        name: "Fourth Floor"
      },
      {
        value: "Fifth Floor",
        name: "Fifth Floor"
      },
      {
        value: "Sixth Floor",
        name: "Sixth Floor"
      }
    ],
    roomType: [
      {
        value: "1BHK",
        name: "1BHK"
      },
      {
        value: "2BHK",
        name: "2BHK"
      },
      {
        value: "3BHK",
        name: "3BHK"
      },
      {
        value: "VILLA",
        name: "VILLA"
      }
    ],
    buildupArea: "",
    carpetArea: "",
    entranceDirection: [
      {
        value: "N",
        name: "North"
      },
      {
        value: "S",
        name: "South"
      },
      {
        value: "E",
        name: "East"
      },
      {
        value: "W",
        name: "West"
      },
      {
        value: "N-E",
        name: "North-East"
      },
      {
        value: "S-E",
        name: "South-East"
      },
      {
        value: "N-W",
        name: "North-West"
      },
      {
        value: "S-W",
        name: "South-West"
      }
    ]
  };

  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.form.validateFields((err: any, value: any) => {
      if (!err) {
        this.props.onSubmit(value);
      } else {
        notification.error(
          notificationConfig({
            message: "Unable to Add Flat",
            description: "Please fill the mandatory Fields",
            configStyle: "Error"
          })
        );
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const {
      floor,
      flatNumber,
      roomType,
      buildupArea,
      carpetArea,
      entranceDirection
    } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
        lg: { span: 7 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
        lg: { span: 17 }
      }
    };

    return (
      <FormWrapper>
        <h2> Add Flat </h2>
        <Form onSubmit={this.handleSubmit} {...formItemLayout}>
          <Form.Item label="Flat Number">
            {getFieldDecorator("flatNo", {
              rules: [
                {
                  required: true,
                  whitespace: true,
                  message: "Flat Number is Required"
                }
              ]
            })(<Input autoFocus size="large" placeholder="Flat Number" />)}
          </Form.Item>
          <Form.Item label="Floor">
            {getFieldDecorator("floor")(
              <Select size="large" placeholder="Floor">
                {floor.map(option => {
                  return (
                    <Option key={option.name} value={option.value}>
                      {option.name}
                    </Option>
                  );
                })}
              </Select>
            )}
          </Form.Item>
          <Form.Item label="Room Type">
            {getFieldDecorator("roomType", {
              rules: [{ required: true, message: "Room Type is Required" }]
            })(
              <Select size="large" placeholder="Room Type">
                {roomType.map(room => {
                  return (
                    <Option value={room.value} key={room.name}>
                      {room.name}
                    </Option>
                  );
                })}
              </Select>
            )}
          </Form.Item>
          <Form.Item label="buildupArea">
            {getFieldDecorator(
              "BuildUp Area",
              {}
            )(<Input size="large" placeholder="BuildUp Area" />)}
          </Form.Item>
          <Form.Item label="carpetArea">
            {getFieldDecorator(
              "Carpet Area",
              {}
            )(<Input size="large" placeholder="Carpet Area" />)}
          </Form.Item>
          <Form.Item label="Entrance Direction">
            {getFieldDecorator(
              "entranceDirection",
              {}
            )(
              <Select placeholder="Entrance Direction " size="large">
                {entranceDirection.map(entrance => {
                  return (
                    <Option value={entrance.value} key={entrance.name}>
                      {entrance.name}
                    </Option>
                  );
                })}
              </Select>
            )}
          </Form.Item>

          <ButtonWrapper>
            <Form.Item>
              <Button
                type="danger"
                size="large"
                onClick={() => this.props.history.goBack()}
              >
                {" "}
                Cancel{" "}
              </Button>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                size="large"
                htmlType="submit"
                style={{ marginLeft: "10px" }}
                loading={this.props.isLoading}
                disabled={this.props.isLoading}
              >
                {<Icon type="plus" />}
                {"Add Flat"}
              </Button>
            </Form.Item>
          </ButtonWrapper>
        </Form>
      </FormWrapper>
    );
  }
}

const mapStateToProps = (state: any) => {
  const { addingLoader } = state.get("flats");
  return {
    isLoading: addingLoader
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  onSubmit: (data: FormProps) => dispatch(actionCreators.addRequest(data))
});

const AddPageForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create({ name: "AddPage" })(AddPage));
export default AddPageForm;
