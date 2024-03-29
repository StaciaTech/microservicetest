import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Books() {

    const [books, setBooks] = useState([]);

    // -----------microservice----------------
    let bookApi = 'http://localhost:4000/test/book-index'

    const api = 'http://localhost:8002/test/book-index'

    const handleGetBooks = async () => {
        if (bookApi) {
            await axios.get(bookApi).then((res) => setBooks(res.data)).catch((err) => console.log(err))
        } else {
            await axios.get(api).then((res) => setBooks(res.data)).catch((err) => console.log(err))
        }
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
