import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Form, Icon, Input, Button, Checkbox, Row, Col } from "antd";
import { authRequest } from "./action";
import { USER_AUTH } from "../../utils/constants";

const Auth = ({ form, auth, history }) => {
  const { getFieldDecorator } = form;
  useEffect(() => {
    const isAuthFromStorage = JSON.parse(localStorage.getItem(USER_AUTH));
    if (isAuthFromStorage !== null) {
      if (isAuthFromStorage.role == "admin") {
        history.push("/data-entry");
      } else if (isAuthFromStorage.role == "customer") {
        history.push("/list-stok");
      }
    }
  }, [history]);

  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      values.history = history;
      if (!err) {
        auth(values);
      }
    });
  };

  return (
    <Row type="flex" justify="center" align="middle" className="custom-row">
      <Col span={4}>
        <Form onSubmit={handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator("username", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your Password!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("remember", {
              valuePropName: "checked",
              initialValue: true
            })(<Checkbox>Remember me</Checkbox>)}
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(Auth);

const mapStateToProps = state => ({
  auth: state.authReducer
});

const mapDispatchToProps = dispatch => ({
  auth: data => dispatch(authRequest(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WrappedNormalLoginForm);
