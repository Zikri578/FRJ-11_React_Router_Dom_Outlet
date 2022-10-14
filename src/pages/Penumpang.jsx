import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Penumpang() {
    // state
    const [posts, setPosts] = useState([]);

    // component di mount
    useEffect(() => {

        // hit api json placeholder
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                console.info(res.data)
                setPosts(res.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [])

    return (
        <div className='w-full min-h-screen'>

            <h1>Penumpang</h1>

            <table className='w-full'>
                <thead className='h-12 bg-slate-100 font-medium text-center px-2 '>
                    <tr>
                        <th className='text-center'>ID</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((status) => {
                        return (
                            <tr className='h-12 bg-slate-200 text-left hover:bg-slate-300' key={status.id}>
                                <td>{status.id}</td>
                                <td>{status.title}</td>
                                <td>{status.body}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
