import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Customers() {

    const [customers, setCustomers] = useState([]);

    // -----------microservice----------------

    // const api = "http://localhost:4001/test/customer-index"

    const api = `http://localhost:8002/test/customer-index`


    const handleGetCustomers = async () => {
        await axios.get(api).then((res) => setCustomers(res.data)).catch((err) => console.log(err))
    };


    const navigate = useNavigate();

    useEffect(() => {
        handleGetCustomers();

    }, []);

    console.log("customers", customers)

    return (
        <div style={{
            margin: '2rem'
        }}>
            <div>All Customers</div>
            <div style={{
                margin: '1rem'
            }}>
                {
                    customers.map((data, index) => (
                        <div key={index}
                            onClick={() => navigate(`${data._id}`)}
                        >
                            <img style={{
                                width: '10rem',
                                height: '10rem',
                                objectFit: 'cover'
                            }} src={data.img} />
                            <h3>Name: {data.name}</h3>

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
