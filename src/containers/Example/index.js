import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Table, Divider, Form, Select, Input, Button, Row, Col } from "antd";

import {
  exampleRequest,
  getStockRequest,
  saveStockRequest,
  editStockRequest
} from "./action";
const { Option } = Select;

const Example = ({
  getStock,
  stock,
  form,
  saveStock,
  isLoading,
  editStock
}) => {
  const [editing, setEditing] = useState(false);
  const [formStock, setFormStock] = useState({
    name: "",
    kategori: "",
    ukuran: "",
    warna: ""
  });
  const { getFieldDecorator } = form;

  useEffect(() => {
    getStock();
    return () => {};
  }, [getStock]);

  useEffect(() => {
    if (isLoading) {
      form.resetFields();
      setEditing(false);
    }
    return () => {};
  }, [form, isLoading]);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: text => <a href="javascript:;">{text}</a>
    },
    {
      title: "Kategori",
      dataIndex: "kategori",
      key: "kategori"
    },
    {
      title: "Ukuran",
      dataIndex: "ukuran",
      key: "ukuran"
    },
    {
      title: "Warna",
      dataIndex: "warna",
      key: "warna"
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <span>
          <a onClick={() => update(record)}>Edit</a>
          <Divider type="vertical" />
          <a href="javascript:;">Delete</a>
        </span>
      )
    }
  ];

  const save = e => {
    form.validateFields((err, values) => {
      if (!err) {
        saveStock(values);
      }
    });
  };
  const edit = e => {
    form.validateFields((err, values) => {
      if (!err) {
        editStock(values);
      }
    });
  };
  const update = e => {
    setEditing(true);
    form.setFieldsValue({
      id: e.id,
      name: e.name,
      kategori: e.kategori,
      ukuran: e.ukuran,
      warna: e.warna
    });
  };

  const onTyping = e => {
    setFormStock({
      ...formStock,
      [e.target.id]: e.target.value
    });
  };

  return (
    <Row
      className="custom-row"
      type="flex"
      justify="space-around"
      align="middle"
    >
      <Col xl={6}>
        <Form>
          <Form.Item label="Name">
            {getFieldDecorator("name", {
              rules: [
                {
                  required: true,
                  message: "Please input your name"
                }
              ]
            })(<Input placeholder="Please input your name" />)}
          </Form.Item>
          <Form.Item label="Kategori" hasFeedback>
            {getFieldDecorator("kategori", {
              rules: [
                { required: true, message: "Please select your kategori!" }
              ]
            })(
              <Select placeholder="Please select a kategori">
                <Option value="celana">Celana</Option>
                <Option value="kaos">Kaos</Option>
                <Option value="jaket">Jaket</Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item label="Ukuran" hasFeedback>
            {getFieldDecorator("ukuran", {
              rules: [{ required: true, message: "Please select your ukuran!" }]
            })(
              <Select placeholder="Please select a ukuran">
                <Option value="s">s</Option>
                <Option value="m">m</Option>
                <Option value="xl">xl</Option>
                <Option value="27">27</Option>
                <Option value="28">28</Option>
                <Option value="30">30</Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item label="Warna" hasFeedback>
            {getFieldDecorator("warna", {
              rules: [{ required: true, message: "Please select your warna!" }]
            })(
              <Select placeholder="Please select a warna">
                <Option value="mocha">mocha</Option>
                <Option value="cream">cream</Option>
                <Option value="hitam">hitam</Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={editing ? edit : save}>
              Save
            </Button>
          </Form.Item>
        </Form>
      </Col>
      <Col xs={2} sm={4} md={6} lg={8} xl={14}>
        <Table
          rowKey={record => record.id}
          columns={columns}
          dataSource={stock}
        />
      </Col>
    </Row>
  );
};
const mapStateToProps = state => ({
  example: state.exampleReducer,
  stock: state.example.stock,
  isLoading: state.example.isLoading.stock
});

const mapDispatchToProps = dispatch => ({
  example: () => dispatch(exampleRequest()),
  getStock: () => dispatch(getStockRequest()),
  saveStock: data => dispatch(saveStockRequest(data)),
  editStock: data => dispatch(editStockRequest(data))
});

const WrappedExample = Form.create({ name: "validate_other" })(Example);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WrappedExample);
