import React from 'react'
import CardProduct from '../components/Fragments/CardProduct';

const products = [
    {
        id: 1,
        title: "Sepatu Multi Bagger",
        price: "99.000.000",
        image: "/images/menu-2509-1723349280.jpg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
    },
    {
        id: 2,
        title: "Sepatu Baru",
        price: "2.000.000",
        image: "/images/menu-2509-1723349280.jpg",
        description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Ducimus veniam officia fugiat quae non dolore libero accusamus reiciendis ad? Nobis similique sit alias in! 
        Illo accusantium unde veritatis quam placeat?`
    },
]

const ProductsPage = () => {
    return (
        <div className="flex justify-center">
            {products.map((product) => (
                <CardProduct key={product.id}>
                    <CardProduct.Header image={product.image}></CardProduct.Header>
                    <CardProduct.Body title={product.title}>
                        {product.description}
                    </CardProduct.Body>
                    <CardProduct.Footer price={product.price}></CardProduct.Footer>
                </CardProduct>
            ))}
        </div>
    )
}

export default ProductsPage;
