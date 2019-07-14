import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Table, Divider, Form, Select, Input, Button } from "antd";

import { exampleRequest, getStockRequest, saveStockRequest } from "./action";
const { Option } = Select;

const Example = ({ getStock, stock, form, saveStock }) => {
  const { getFieldDecorator } = form;
  useEffect(() => {
    getStock();
    return () => {};
  }, [getStock]);

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
          <a href="javascript:;">Invite {record.name}</a>
          <Divider type="vertical" />
          <a href="javascript:;">Delete</a>
        </span>
      )
    }
  ];

  const save = e => {
    form.validateFields((err, values) => {
      console.log(values);
      if (!err) {
        saveStock(values);
      }
    });
  };

  return (
    <div>
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
            rules: [{ required: true, message: "Please select your kategori!" }]
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
          <Button type="primary" onClick={save}>
            Save
          </Button>
        </Form.Item>
      </Form>
      <Table columns={columns} dataSource={stock} />
    </div>
  );
};
const mapStateToProps = state => ({
  example: state.exampleReducer,
  stock: state.example.stock
});

const mapDispatchToProps = dispatch => ({
  example: () => dispatch(exampleRequest()),
  getStock: () => dispatch(getStockRequest()),
  saveStock: data => dispatch(saveStockRequest(data))
});

const WrappedExample = Form.create({ name: "validate_other" })(Example);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WrappedExample);
