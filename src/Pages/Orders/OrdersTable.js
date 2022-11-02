import React, { useEffect, useState } from 'react';
import { FaWrench } from 'react-icons/fa';

const OrdersTable = ({order, handleDelete}) => {
    const {_id, name, price, service} = order;
    const [orderedService, setOrderedService] = useState({})

    useEffect( () => {
        fetch(`http://localhost:5000/services/${service}`)
        .then(response => response.json())
           .then(data =>  setOrderedService(data))

    }, [service])

    return (
            <tr>
                <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
                </label>
                </th>
                <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                    <div className="avatar rounded w-24 h-24">
                        {
                            orderedService?.img ?  <img src={orderedService.img} alt="Avatar Tailwind CSS Component" />
                            : <FaWrench></FaWrench>
                        }
                    </div>
                    </div>
                    <div>
                    <div className="font-bold">{name}</div>
                    <div className="text-sm opacity-50">Service Name</div>
                    </div>
                </div>
                </td>
                <td>
                ${price}
                <br/>
                <span className="badge badge-ghost badge-sm">Price</span>
                </td>
                <td>Purple</td>
      </tr>
    );
};

export default OrdersTable;