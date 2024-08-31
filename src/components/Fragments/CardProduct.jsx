import React from 'react'
import Button from '../Elements/Button/Index';

const CardProduct = (props) => {
  const {children} = props;
     
  return (
    <div className="w-full max-w-sm bg-white border-blue-700 rounded-lg shadow mx-2 flex flex-col justify-between">
        {children}
    </div>
  )
}

const Header = (props) => {
    const {image} = props;
    return (
        <a href="">
            <img 
            src={image} 
            alt="products"
            className='p-8 rounded-t-lg' />
        </a>
    )
}

const Body = (props) => {
    const {children, title} = props
    return(
        <div className="px-5 pb-5 h-full">
            <a href="">
                <h5 className="text-xl font-semibold tracking-tight">
                    {title}
                </h5>
                <p className="text-m">
                    {children}
                </p>
            </a>
        </div>
    )
}

const Footer = (props) => {
    const {price} = props;
    return (
        <div className="flex items-center justify-between px-5 py-5">
            <span className="text-xl font-bold">Rp.{price},-</span>
            <Button classname="bg-blue-600">
                Add to Cart
            </Button>
        </div>
    )
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct
