'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useParams } from 'next/navigation';
import ProductCard from './ProductCard';

export default function ProductDetails() {
    const [productDetails, setProductDetails] = useState('');
    const [currentImage, setCurrentImage] = useState('');
    const params = useParams();

    const changeImage = (image) => {
        setCurrentImage(image); // Update the current image on hover
    };

    useEffect(() => {
        axios
            .get(`https://wscubetech.co/ecommerce-api/productdetails.php?id=${params.id[1]}`)
            .then((result) => {
                setProductDetails(result.data.product);
                setCurrentImage(result.data.product.multiple_images[0]); // Set the default image
            })
            .catch(() => {
                toast.error('Something went wrong !!');
            });
    }, []);
 const [relatedProduct, setRelatedProduct] = useState([]);
    

    useEffect(() => {
        axios.get('https://wscubetech.co/ecommerce-api/products.php', {
            params: {
                limit: 4,
                categories: params.id[0],
            }
        })
            .then((result) => {
                setRelatedProduct(result.data.data)
            })
            .catch(() => {
                toast.error('Something went wrong !!');
            })
    },[])
    return (
        <>
            <div>
                <nav className="mx-auto w-full mt-4 max-w-[1200px] px-5">
                    <ul className="flex items-center">
                        <li className="cursor-pointer">
                            <a href="index.html">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-5 w-5"
                                >
                                    <path
                                        d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"
                                    />
                                    <path
                                        d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"
                                    />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <span className="mx-2 text-gray-500">&gt;</span>
                        </li>
                        <li className="text-gray-500">{productDetails.name}</li>
                    </ul>
                </nav>
            </div>

            {productDetails ? (
                <>
                    <section className="container flex-grow mx-auto max-w-[1200px] border-b py-5 lg:grid lg:grid-cols-2 lg:py-10">
                        <div className="container mx-auto px-4">
                            {/* Main Image */}
                            <img
                                className="w-full"
                                src={currentImage} // Use the currentImage state
                                alt="Product image"
                            />

                            {/* Thumbnail Images */}
                            <div className="mt-3 grid grid-cols-4 gap-4">
                                {productDetails.multiple_images.map((v, i) => (
                                    <div
                                        key={i}
                                        className="cursor-pointer"
                                        onMouseOver={() => changeImage(v)} // Change image on hover
                                    >
                                        <img
                                            className="w-full h-full object-cover"
                                            src={v}
                                            alt={`Thumbnail ${i}`}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mx-auto px-5 lg:px-5">
                            <h2 className="pt-3 text-2xl font-bold lg:pt-0">{productDetails.name}</h2>
                            <p className="mt-5 font-bold">
                                Availability:
                                <span
                                    className={
                                        productDetails.stock > 0 ? 'text-green-600' : 'text-red-600'
                                    }
                                >
                                    {productDetails.stock > 0 ? 'In Stock' : 'Out of Stock'}
                                </span>
                            </p>
                            <p className="font-bold">
                                Brand: <span className="font-normal">{productDetails.brand}</span>
                            </p>
                            <p className="font-bold">
                                Category:{' '}
                                <span className="font-normal">{productDetails.category}</span>
                            </p>
                            <p className="font-bold">
                                SKU: <span className="font-normal">BE45VGTRK</span>
                            </p>
                            <p className="mt-4 text-4xl font-bold text-violet-900">
                            ${productDetails.price}{' '}
                                <span className="text-xs text-gray-400 line-through">
                                    ${productDetails.price}
                                </span>
                            </p>
                            <p className="pt-5 text-sm leading-5 text-gray-500">
                                {productDetails.description}
                            </p>
                        </div>
                    </section>
                </>
            ) : (
                <div>Loading...</div>
            )}
        


            <p class="mx-auto mt-10 mb-5 max-w-[1200px] px-5">RELATED PRODUCTS</p>
            <section
                class="container mx-auto grid max-w-[1200px] grid-cols-2 gap-3 px-5 pb-10 lg:grid-cols-4"
            >


              


           {
                  relatedProduct.map((v, i) => {
                      return (
                          <ProductCard key={i} product={v} />
                      )
                  })
              }
            </section>


        </>
    )
}
