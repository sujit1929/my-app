// src/views/Views.jsx
import { Suspense } from 'react'
import AllRoutes from '../config/route.config/allRoute'



const Views = (props) => {
    return (
        <Suspense className="w-full" >
            <AllRoutes {...props} />
        </Suspense >
    )
}

export default Views
