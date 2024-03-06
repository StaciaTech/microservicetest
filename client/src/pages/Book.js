import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Link } from 'react-router-dom'

export default function Book() {
    const [book, setBook] = useState([]);
    const { id } = useParams();

    // -----------microservice----------------

    let bookApi = `http://localhost:4000/test/book-show/${id}`
    let orderApi = `http://localhost:4002/test/order-store`

    let bookApi2 = `http://localhost:8002/test/book-show/${id}`
    let orderApi2 = `http://localhost:8002/test/order-store`

    const handleOrderBook = async (bookId) => {
        if (bookApi) {
            await axios.post(orderApi, {
                bookId: bookId
            }).then((res) => console.log("your order is placed!")).catch((err) => console.log(err));
        } else {
            await axios.post(orderApi2, {
                bookId: bookId
            }).then((res) => console.log("your order is placed!")).catch((err) => console.log(err));
        }
    };


    const handleGetBooks = () => {
        if (bookApi) {
            axios.get(bookApi).then((res) => {
                setBook(res.data)
            }).catch((err) => console.log(err))
        } else {
            axios.get(orderApi2).then((res) => {
                setBook(res.data)
            }).catch((err) => console.log(err))
        }
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
