import { useLocation } from 'react-router-dom'

const ProductDetail = () => {
    const location = useLocation()
    const product = location.state?.product

    return (
        <section className={`h-full py-10`}>
            <div className={`container flex min-h-[calc(100vh-380px)] flex-col items-center justify-center`}>
                {!product && (
                    <h1 className={`h-full text-center text-4xl font-bold text-red-500`}>Product not found</h1>
                )}
                {product && (
                    <div className={`grid h-full min-h-full gap-5`}>
                        <h1 className={`text-balance text-center text-5xl font-bold`}>{product.title}</h1>
                        <img className={`mx-auto h-auto w-full max-w-96`} src={product.image} alt={product.title} />
                        <p className={`mx-auto max-w-full text-xl lg:max-w-[70vw]`}>{product.description}</p>
                        <p className={`text-center text-4xl font-bold`}>${product.price}</p>
                    </div>
                )}
            </div>
        </section>
    )
}

export default ProductDetail
