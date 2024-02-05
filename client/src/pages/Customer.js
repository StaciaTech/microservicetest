import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

export default function Book() {
    const [customer, setCustomer] = useState([]);
    const { id } = useParams();
    const handleGetCustomer = async () => {

        console.log("--------------id----------", id)

        await axios.get(`http://localhost:4001/customer/${id}`).then((res) => {
            setCustomer(res.data)
        }).catch((err) => console.log(err))
    };

    useEffect(() => {
        handleGetCustomer();
    }, []);

    return (
        <div style={{
            marginBottom: '1rem',
            // textAlign: 'center'
        }}>
            <div >
                <img style={{
                    width: '10rem',
                    height: '10rem',
                    objectFit: 'cover'
                }} src={customer.img} />
            </div>
            <div><strong>Name: </strong>{customer.name}</div>
            <div><strong>Age: </strong>{customer.age}</div>
            <div><strong>Address: </strong>{customer.address}</div>
        </div >
    )
}
