import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Table, Divider, Form, Select, Row, Col } from "antd";

import { getStockRequest } from "./action";

const Example = ({ getStock, stock, isLoading }) => {
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
  ];

  return (
    <Row
      className="custom-row"
      type="flex"
      justify="space-around"
      align="middle"
    >
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
  stock: state.example.stock,
  isLoading: state.example.isLoading.stock
});

const mapDispatchToProps = dispatch => ({
  getStock: () => dispatch(getStockRequest())
});

const WrappedExample = Form.create({ name: "validate_other" })(Example);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WrappedExample);
