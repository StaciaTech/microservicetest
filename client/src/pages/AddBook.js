import React, { useState } from 'react'
import axios from 'axios'

export default function AddBook() {
    const [title, setTitle] = useState('');
    const [img, setImg] = useState('');
    const [author, setAuthor] = useState('');
    const [publisher, setPublisher] = useState('');
    const [yearOfPublication, setYearOfPublication] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // -----------microservice----------------

        // const api = "http://localhost:4000/test/book-store"

        const api = `http://localhost:8002/test/book-store`


        axios.post(api, {
            title: title,
            img: img,
            author: author,
            publisher: publisher,
            yearOfPublication: yearOfPublication
        })
            .then(function (response) {
                console.log("response", response);
            })
            .catch(function (error) {
                console.log("error", error);
            });
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
                    Title: <input
                        type='text'
                        onChange={(e) => setTitle(e.target.value)}
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
                    Author: <input
                        type='text'
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>
                <div
                    style={{
                        marginBottom: '1rem'
                    }}
                >
                    Publisher: <input
                        type='text'
                        onChange={(e) => setPublisher(e.target.value)}
                    />
                </div>
                <div
                    style={{
                        marginBottom: '1rem'
                    }}
                >
                    YearOfPublication: <input
                        type='text'
                        onChange={(e) => setYearOfPublication(e.target.value)}
                    />
                </div>
                <button onClick={handleSubmit}>Add Book</button>
            </div>
        </div>
    )
}
