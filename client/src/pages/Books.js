import React, { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Books() {

    const [books, setBooks] = useState([]);

    const handleGetBooks = async () => {
        await axios.get('http://localhost:4000/books').then((res) => setBooks(res.data)).catch((err) => console.log(err))
    };


    const navigate = useNavigate();

    useEffect(() => {
        handleGetBooks();
        console.log(books)
    }, []);

    return (
        <div style={{
            margin: '2rem'
        }}>
            <div>all books</div>
            <div style={{
                margin: '1rem'
            }}>
                {
                    books.map((data, index) => (
                        <div key={index}
                            onClick={() => navigate(`${data._id}`)}
                        >
                            <img style={{
                                width: '10rem',
                                height: '10rem',
                                objectFit: 'cover'
                            }} src={data.img} />
                            <h3>Title: {data.title}</h3>

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