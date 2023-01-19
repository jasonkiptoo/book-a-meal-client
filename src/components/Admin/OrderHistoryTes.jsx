import React, { useState, useEffect } from 'react';
import { Table, Input, Button } from 'antd';

const AdminOrderHistory = () => {
  const [data, setData] = useState([]); // Initialize state for table data
  const [filteredData, setFilteredData] = useState([]); // Initialize state for filtered data
  const [searchValue, setSearchValue] = useState(''); // Initialize state for search input value
  const [currentPage, setCurrentPage] = useState(1); // Initialize state for current page
  const [pageSize, setPageSize] = useState(10); // Initialize state for page size

  // Fetch order data from API
  useEffect(() => {
    fetch('http://localhost:3000/orders')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setFilteredData(data); // Set filtered data to original data on initial load
      });
  }, []);

  // Handle search input change
  const handleSearch = event => {
    setSearchValue(event.target.value);
    setCurrentPage(1); // Reset current page to 1 on search
    setFilteredData(
      data.filter(order =>
        order.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  // Handle page change
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
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Order Date',
      dataIndex: 'order_date',
      key: 'order_date',
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
  ];

  return (
    <div>
      <Input
        placeholder="Search by name"
        value={searchValue}
        onChange={handleSearch}
        style={{ width: 200, marginBottom: 10 }}
      />
      <Table
        columns={columns} 
        dataSource={filteredData.slice(
          (currentPage - 1) * pageSize,
          currentPage * pageSize
        )}
        pagination={{
          total: filteredData.length,
          pageSize: pageSize,
          onChange: handlePageChange,
          showSizeChanger: true,
          onShowSizeChange: handlePageSizeChange,
        }}
      />
    </div>
  );
};

export default AdminOrderHistory;
