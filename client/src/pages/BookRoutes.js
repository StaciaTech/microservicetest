import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

export default function BookRoutes() {
    const navigate = useNavigate();
    return (
        <div>
            <div style={{
                margin: '1rem',
                float: 'right'
            }}>
                <Link to='/books' style={{
                    marginRight: '1rem'
                }}>All books</Link>
                <Link to='/books/add-book'>Add Book</Link>
            </div>
            <Outlet />
        </div>
    )
}
