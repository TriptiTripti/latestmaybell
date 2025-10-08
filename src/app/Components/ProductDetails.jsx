   'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useParams } from 'next/navigation';
import ProductCard from './ProductCard';
import { useDispatch } from 'react-redux';
import {addToCart} from '../ReduxToolkit/CartSlice'

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



    const dispatch=useDispatch()
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


                            <div class="mt-6">
                                    <p class="pb-2 text-xs text-gray-500">Size</p>

                                    <div class="flex gap-1">
                                        <div
                                            class="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                                        >
                                            XS
                                        </div>
                                        <div
                                            class="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                                        >
                                            S
                                        </div>
                                        <div
                                            class="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                                        >
                                            M
                                        </div>

                                        <div
                                            class="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                                        >
                                            L
                                        </div>

                                        <div
                                            class="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                                        >
                                            XL
                                        </div>
                                    </div>
                                </div>

                                <div class="mt-6">
                                    <p class="pb-2 text-xs text-gray-500">Color</p>

                                    <div class="flex gap-1">
                                        <div
                                            class="h-8 w-8 cursor-pointer border border-white bg-gray-600 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                                        ></div>
                                        <div
                                            class="h-8 w-8 cursor-pointer border border-white bg-violet-900 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                                        ></div>
                                        <div
                                            class="h-8 w-8 cursor-pointer border border-white bg-red-900 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                                        ></div>
                                    </div>
                                </div>

                                <div class="mt-6">
                                    <p class="pb-2 text-xs text-gray-500">Quantity</p>

                                    <div class="flex">
                                        <button
                                            class="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                                        >
                                            &minus;
                                        </button>
                                        <div
                                            class="flex h-8 w-8 cursor-text items-center justify-center border-t border-b active:ring-gray-500"
                                        >
                                            1
                                        </div>
                                        <button
                                            class="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                                        >
                                            &#43;
                                        </button>
                                    </div>
                                </div>

                                <div class="mt-7 flex flex-row items-center gap-6">
                                    <button onClick={ () => dispatch(addToCart(productDetails)) }
                                        class="flex h-12 w-1/3 items-center justify-center bg-violet-900 text-white duration-100 hover:bg-blue-800"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="mr-3 h-4 w-4"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                            />
                                        </svg>

                                        Add to cart
                                    </button>
                                    <button
                                        class="flex h-12 w-1/3 items-center justify-center bg-amber-400 duration-100 hover:bg-yellow-300"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="mr-3 h-4 w-4"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                            />
                                        </svg>

                                        Wishlist
                                    </button>
                                </div>
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

  <div>
              <button  onClick={()=>dispatch(addToCart(product))} className="my-5 h-10 w-full bg-violet-900 text-white">
                Add to cart
              </button>
            </div>
        </>
    )
}
