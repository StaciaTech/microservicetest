import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Link } from 'react-router-dom'

export default function Book() {
    const [book, setBook] = useState([]);
    const { id } = useParams();

    // const api = `http://localhost:4000/book/${id}`
    const api = `http://localhost:8002/test/book-show/${id}`

    const orderApi = `http://localhost:8002/test/order-store`

    const handleOrderBook = async (bookId) => {
        await axios.post(orderApi, {
            bookId: bookId
        }).then((res) => console.log("your order is placed!")).catch((err) => console.log(err));
    };


    const handleGetBooks = () => {
        axios.get(api).then((res) => {
            setBook(res.data)
        }).catch((err) => console.log(err))
    };

    useEffect(() => {
        handleGetBooks();
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
                }} src={book.img} />
            </div>
            <div><strong>Title: </strong>{book.title}</div>
            <div><strong>Author: </strong>{book.author}</div>
            <div><strong>Publisher: </strong>{book.publisher}</div>
            <div><strong>YearOfPublication: </strong>{book.yearOfPublication}</div>
            <a style={{
                marginLeft: "500px", cursor: "pointer", textAlign: "center", borderBottom: "1px solid blue", color: 'blue'
            }}
                onClick={() => handleOrderBook(book._id)}
            >Order Book</a>
        </div >
    )
}
