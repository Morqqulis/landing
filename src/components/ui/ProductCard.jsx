import { Link } from 'react-router-dom'

/* eslint-disable react/prop-types */
const ProductCard = ({ id, title, price, image, description }) => {
    return (
        <Link
            className={`group/item grid h-[400px] overflow-hidden rounded-xl border border-[#E5E5E5] shadow-2xl shadow-indigo-500 duration-300 ease-linear hover:scale-105 hover:border-red-500`}
            to={`/products/${id}`}
            state={{ product: { id, title, price, image, description } }}
        >
            <div key={id} className={`flex max-h-[400px] flex-col  p-5 text-center font-bold  `}>
                <h2 className={`mb-3 text-xl `}>{title.length > 20 ? title.slice(0, 20) + '...' : title}</h2>
                <p className={`mb-3 text-3xl text-red-500 `}>${price}</p>
                <div className={`flex h-full flex-col items-center justify-center`}>
                    <img
                        className={`h-auto w-full max-w-[200px] object-cover shadow-2xl shadow-cyan-100 duration-300 group-hover/item:scale-110`}
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
