import { Link } from 'react-router-dom'

/* eslint-disable react/prop-types */
const ProductCard = ({ id, title, price, image, description }) => {
    return (
        <Link
            className={`grid h-[400px] overflow-hidden duration-500 ease-linear hover:animate-shake`}
            to={`/products/${id}`}
            state={{ product: { id, title, price, image, description } }}
        >
            <div key={id} className={`flex max-h-[400px] flex-col border border-[#E5E5E5] p-5 text-center font-bold`}>
                <h2 className={`mb-3 text-xl `}>{title.length > 20 ? title.slice(0, 20) + '...' : title}</h2>
                <p className={`mb-3 text-3xl text-red-500 `}>${price}</p>
                <div className={`flex h-full flex-col items-center justify-center`}>
                    <img
                        className={`h-auto w-full max-w-[200px] object-cover`}
                        src={image}
                        alt="product image"
                        width={200}
                        height={200}
                    />
                </div>
            </div>
        </Link>
    )
}

export default ProductCard
