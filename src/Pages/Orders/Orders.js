import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/Auth Provider/AuthProvider';
import OrdersTable from './OrdersTable';

const Orders = () => {
    const {user} = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    useEffect( () => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setOrders(data));
    }, [user?.email])

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0) {
                alert('Deleted Successfully')
                const remaining = orders.filter(odr => odr._id !== id)
                setOrders(remaining);
            }
        })
    }

    return (
        <div>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        orders.map(order => <OrdersTable
        key={order._id}
          order={order}
          handleDelete={handleDelete}
        ></OrdersTable>)
      }
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default Orders;