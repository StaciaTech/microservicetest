import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Link } from 'react-router-dom'

export default function Book() {
    const [book, setBook] = useState([]);
    const { id } = useParams();
    const handleGetBooks = () => {
        axios.get(`http://localhost:4000/book/${id}`).then((res) => {
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
            <div style={{ textAlign: "center" }}> <Link to='/book/order-book'>Order Book</Link></div>
        </div >
    )
}
