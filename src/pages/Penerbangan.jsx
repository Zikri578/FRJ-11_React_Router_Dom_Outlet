import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Penerbangan() {

    // state
    const [albums, setAlbums] = useState([]);

    // component di mount
    useEffect(() => {

        // hit api json placeholder
        axios.get("https://jsonplaceholder.typicode.com/albums")
            .then((res) => {
                console.info(res.data)
                setAlbums(res.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [])

    return (
        <div className='w-full min-h-screen'>

            <h1>Penerbangan</h1>

            <table className='w-full'>
                <thead className='h-12 bg-slate-100 font-medium text-center px-2'>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {albums.map((coba) => {
                        return (
                            <tr className='h-12 bg-slate-200 text-center hover:bg-slate-300' key={coba.id}>
                                <td>{coba.id}</td>
                                <td>{coba.title}</td>
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
        </div>
    )
}
