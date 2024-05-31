import ProductCard from '@ui/ProductCard'
import { getProducts } from '@utils'
import { useEffect, useState } from 'react'

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(products => setProducts(products))
    }, [])

    return (
        <section className={`py-10`}>
            <div className="container">
                <h1 className={`mb-10 text-center text-5xl font-bold`}>Products</h1>
                {!products.length && (
                    <h2
                        className={`flex h-full items-center justify-center text-center text-3xl font-bold text-red-500`}
                    >
                        Loading...
                    </h2>
                )}

                {products.length > 0 && (
                    <div className={`grid grid-cols-4 gap-4`}>
                        {products
                            .sort((a, b) => a.price - b.price)
                            .map(product => (
                                <ProductCard key={product.id} {...product} />
                            ))}
                    </div>
                )}
            </div>
        </section>
    )
}
export default Products
