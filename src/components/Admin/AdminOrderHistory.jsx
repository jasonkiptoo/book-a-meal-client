import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Input } from 'antd';
import axios from 'axios';
import { color } from '@mui/system';
import NavBar from "../NavBar/NavBar"

const AdminOrderHistory = () => {
const [orders, setOrders] = useState([]);
const [visible, setVisible] = useState(false);
const [form] = Form.useForm();
const [currentPage, setCurrentPage] = useState(1); // Initialize state for current page
  const [pageSize, setPageSize] = useState(10); // Initialize state for page size

useEffect(() => {
axios.get('http://localhost:3000/orders')
.then(res => setOrders(res.data))
.catch(err => console.log(err));
}, []);
const handlePageChange = page => {
  setCurrentPage(page);
};

// Handle page size change
const handlePageSizeChange = (current, size) => {
  setPageSize(size);
  setCurrentPage(1); // Reset current page to 1 on page size change
};


const columns = [
{
title: 'Customer ID',
dataIndex: 'customer_id',
key: 'customer_id',
},
{
title: 'Customer Name',
dataIndex: 'customer_name',
key: 'customer_name',
},
{
  title: 'Email ID',
  dataIndex: 'email_id',
  key: 'email_id',
  },
{
title: 'Ordered Item',
dataIndex: 'ordered_item',
key: 'ordered_item',
},
{
title: 'Bill',
dataIndex: 'bill',
key: 'bill',
},
{
title: 'Date',
dataIndex: 'date',
key: 'date',
},
{

render: (text, record) => (
<Button type="primary" onClick={() => handleEdit(record)}>Edit</Button>
),
},
];

const handleEdit = (record) => {
form.setFieldsValue({
customer_id: record.customer_id,
customer_name: record.customer_name,
email_id: record.email_id,
ordered_item: record.ordered_item,
bill: record.bill,
date: record.date,
});
setVisible(true);
};

const handleUpdate = () => {
form
.validateFields()
.then(values => {
axios.put('http://localhost:3000/adminorderhistory/orders/${values.order_id}, values')
.then(res => {
setOrders(prevOrders => prevOrders.map(order => order.customer_id_id === values.customer_id ? values : order));
setVisible(false);
form.resetFields();
})
.catch(err => console.log(err));
})
.catch(info => {
console.log('Validate Failed:', info);
});
};

return (
  <>
  <div>
    <NavBar />
  </div>
<div>
<h4>Order History</h4>
<h5>Ordered By Date</h5>
<Table dataSource={orders} columns={columns} />
<Modal
    title="Edit Order"
    visible={visible}
    onOk={handleUpdate}
    onCancel={() => setVisible(false)}
  >
    <Table
        
        pagination={{
          pageSize: pageSize,
          onChange: handlePageChange,
          showSizeChanger: true,
          onShowSizeChange: handlePageSizeChange,
        }}
        >
    <Form form={form}>
      <Form.Item name="order_id" label="Order ID">
        <Input disabled />
      </Form.Item>
      <Form.Item name="customer_name" label="Customer Name">
        <Input />
      </Form.Item>
      <Form.Item name="meal" label="M"
      >

      </Form.Item>
      </Form>
      </Table>
      </Modal>
      </div>
      </>
);
}
    
 export default AdminOrderHistory;