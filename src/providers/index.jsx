import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from '@pages/Home'
import Products from '@pages/Products'
import Table from '@pages/Table'
import TableList from '@pages/TableList'
import Weather from '@pages/Weather'
import ProductDetail from '@pages/ProductDetail'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/products',
        element: <Products />
    },
    {
        path: '/products/:id',
        element: <ProductDetail />
    },
    {
        path: '/weather',
        element: <Weather />
    },
    {
        path: '/table',
        element: <Table />
    },
    {
        path: '/table-list',
        element: <TableList />
    }
])

export const Provider = () => {
    return <RouterProvider router={router} />
}
