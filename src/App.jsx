import React from "react";
import { Routes, Route } from "react-router-dom"
import Bandara from "./pages/Bandara";
import Dashboard from "./pages/Dashboard";
import Penerbangan from "./pages/Penerbangan";
import Penumpang from "./pages/Penumpang";

export default function App() {
  return (
    <Routes>
      {/* pathnya harus sesuai dengan yang ada di dashboard.jsx */}
      {/* <Route path="/dashboard" element={<Dashboard />} >
        <Route index element={<h1>Dashboard</h1>} />
        <Route path="/dashboard/master" element={<h1>Halaman Master</h1>} />
        <Route path="/dashboard/penerbangan" element={<h1>Halaman Penerbangan</h1>} />
        <Route path="/dashboard/penumpang" element={<h1>Halaman Penumpang</h1>} />
      </Route> */}

      <Route path="/" element={<Dashboard />} >
        <Route index element={<h1>Dashboard</h1>} />
        <Route path="/bandara" element={<Bandara />} />
        <Route path="/penerbangan" element={<Penerbangan />} />
        <Route path="/penumpang" element={<Penumpang />} />
      </Route>


    </Routes>
  )
}