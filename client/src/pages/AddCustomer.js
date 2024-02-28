import React, { useState } from 'react'
import axios from 'axios'

export default function AddCustomer() {
    const [name, setName] = useState('');
    const [img, setImg] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        let customerApi
        // -----------microservice----------------
        // customerApi = "http://localhost:4001/test/customer-store"

        const api = "http://localhost:8002/test/customer-store"

        if (customerApi) {

            axios.post(customerApi, {
                name: name,
                img: img,
                age: age,
                address: address
            }).then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });
        } else {
            axios.post(api, {
                name: name,
                img: img,
                age: age,
                address: address
            }).then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });
        }
    }

    return (
        <div style={{
            marginTop: '3rem',
            backgroundColor: 'pink',
            padding: '3rem'
        }}>
            {/* <div>Add book</div> */}
            <div>
                <div style={{
                    marginBottom: '1rem'
                }}>
                    Name: <input
                        type='text'
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div
                    style={{
                        marginBottom: '1rem'
                    }}
                >
                    Img: <input
                        type='text'
                        onChange={(e) => setImg(e.target.value)}
                    />
                </div>
                <div
                    style={{
                        marginBottom: '1rem'
                    }}>
                    Age: <input
                        type='text'
                        onChange={(e) => setAge(e.target.value)}
                    />
                </div>
                <div
                    style={{
                        marginBottom: '1rem'
                    }}
                >
                    Address: <input
                        type='text'
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <button onClick={handleSubmit}>Add Customer</button>
            </div>
        </div>
    )
}
