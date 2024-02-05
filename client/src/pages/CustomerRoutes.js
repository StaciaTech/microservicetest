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
                <Link to='/customers' style={{
                    marginRight: '1rem'
                }}>All Customers</Link>
                <Link to='/customers/add-customer'>Add Customer</Link>
            </div>

            <Outlet />
        </div>
    )
}
