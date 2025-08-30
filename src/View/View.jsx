// src/views/Views.jsx
import { Suspense } from 'react'
import AllRoutes from '../config/route.config/allRoute'



const Views = (props) => {
    return (
        <Suspense fallback={<div>Loading...</div>} className="w-full" >
            <AllRoutes {...props} />
        </Suspense >
    )
}

export default Views
