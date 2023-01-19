import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminOrderHistoryPage() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:3001/orders')
      .then(response => setOrders(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Order Date</th>
            <th>Items Ordered</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.customerName}</td>
              <td>{order.orderDate}</td>
              <td>{order.itemsOrdered.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminOrderHistoryPage;