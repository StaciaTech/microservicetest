import React from 'react'

export default function Home() {
    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    columnGap: '1rem',
                    margin: '1rem'
                }}
            >
                <a href='/orders'>Orders</a>
                <a href='/books'>Books</a>
                <a href='/customers'>Customers</a>
            </div>
        </div>
    )
}
