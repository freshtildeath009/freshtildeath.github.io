import React from 'react'
import { Routes, Route } from "react-router-dom"

// Page routes
import Home from "./pages/Home"
import Blog from "./pages/Blog"

const PageRoute = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/blog/' element={<Blog />} />
            </Routes>
        </>
    )
}

export default PageRoute
