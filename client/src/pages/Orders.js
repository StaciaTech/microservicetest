import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Orders() {

    const [orders, setOrders] = useState([]);

    const handleGetOrders = async () => {
        await axios.get('http://localhost:4002/orders').then((res) => setOrders(res.data)).catch((err) => console.log(err))
    };


    const navigate = useNavigate();

    useEffect(() => {
        handleGetOrders();

    }, []);

    console.log("---------", orders)

    return (
        <div style={{
            margin: '2rem'
        }}>
            <div>All Orders</div>
            <div style={{
                margin: '1rem'
            }}>
                {
                    orders.map((data, index) => (
                        <div key={index}
                            onClick={() => navigate(`${data._id}`)}
                        >
                            <img style={{
                                width: '10rem',
                                height: '10rem',
                                objectFit: 'cover'
                            }} src={data.img} />
                            <div><strong>order Name: </strong>{data.name}</div>
                        </div>
                    ))
                }
            </div>
        </div>

        // title
        // author
        // publisher
        // yearOfPublication
    )
}
