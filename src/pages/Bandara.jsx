import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Bandara() {

    // state
    const [user, setUser] = useState([]);

    // component di mount
    useEffect(() => {

        // hit api json placeholder
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                console.info(res.data)
                setUser(res.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [])


    return (
        <div className='w-full min-h-screen'>

            <h1>Bandara</h1>

            <table className='w-full bg-origin-border'>
                <thead className='h-12 bg-slate-100 font-medium text-center px-2'>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((item) => {
                        return (
                            <tr className='h-12 bg-slate-200 text-center hover:bg-slate-300' key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>{item.website}</td>
                                <td>
                                    <div className='w-full flex gap-2 justify-center'>
                                        <button className='h-10 w-[100px] bg-green-500 text-white'>Edit</button>
                                        <button className='h-10 w-[100px] bg-orange-500 text-white'>View</button>
                                        <button className='h-10 w-[100px] bg-red-500 text-white'>Delete</button>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div >
    )
}
