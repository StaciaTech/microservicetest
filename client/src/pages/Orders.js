import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Orders() {

    const [orders, setOrders] = useState([]);

    // -----------microservice----------------

    // const api = "http://localhost:4002/test/order-index"

    const api = `http://localhost:8002/test/order-index`

    const handleGetOrders = async () => {
        await axios.get(api).then((res) => setOrders(res.data)).catch((err) => console.log(err))
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
                        <div>
                            <img style={{
                                width: '10rem',
                                height: '10rem',
                                objectFit: 'cover'
                            }} src={data.bookData.img} />
                            <div><strong>Book Name: </strong>{data.bookData.title}</div>
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
