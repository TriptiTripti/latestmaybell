'use client';
import React, { useEffect, useState } from 'react'
import LeftSideCatalog from './LeftCatalogListing';
import { useParams } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-toastify';
import RightSideCatalog from './RightCatalogListing';
import ProductCard from './ProductCard';


export default function CatalogListing() {

    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    const [getProducts, setGetProducts] = useState([]);

    useEffect(() => {
        axios.get('https://wscubetech.co/ecommerce-api/categories.php')
            .then((response) => {
                setCategories(response.data.data);
            })
            .catch((error) => {
                toast.error('Something went wrong.')
            });
    }, [])

    useEffect(() => {
        axios.get('https://wscubetech.co/ecommerce-api/brands.php')
            .then((response) => {
                setBrands(response.data.data);
            })
            .catch((error) => {
                toast.error('Something went wrong.')
            });
    }, [])

    const params = useParams();

    const [filterCategories, setFilterCategories] = useState((params.slug?.filter(Boolean).slice(-1) || []));
    
    const [filterBrands, setFilterBrands] = useState([]);

    useEffect(() => {
        setFilterCategories(params.slug?.filter(Boolean).slice(-1) || []);
    }, [params.slug])

    useEffect(() => {
        axios.get('https://wscubetech.co/ecommerce-api/products.php', {
            params: {
                page: '',
                limit: 15,
                sorting: '',
                name: '',
                price_from: '',
                price_to: '',
                discount_from: '',
                discount_to: '',
                rating: '',
                brands: filterBrands.toString(),
                categories: filterCategories.toString(),
            }
        })
        .then((result) => {
          // console.log(result.data,'res');
            // setIsProductLoading(false)
            setGetProducts(result.data.data)
            setTotalPages(result.data.toal_pages)
        })
        .catch(() => {
            toast.error('Something went wrong !!');
        })
    }, [filterCategories, filterBrands])

    const filterCategory = (slug) => {
        // setIsProductLoading(true);
       
        if (filterCategories.includes(slug)) {
            const data = filterCategories.filter((v, i) => {
                if (v != slug) {
                    return v;
                }
            })
            setFilterCategories([...data])
        } else {
            setFilterCategories([...filterCategories, slug])
        }
    }

    const filterBrand = (slug) => {
        // setCurrentPage(1)
        // setIsProductLoading(true);
        if (filterBrands.includes(slug)) {
            const data = filterBrands.filter((v, i) => {
                if (v != slug) {
                    return v;
                }
            })
            setFilterBrands([...data])
        } else {
            setFilterBrands([...filterBrands, slug])
        }
    }

    return (
        <>
            <nav class="mx-auto w-full mt-4 max-w-[1200px] px-5">
                <ul class="flex items-center">
                    <li class="cursor-pointer">
                        <a href="index.html">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                class="h-5 w-5"
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
                        <span class="mx-2 text-gray-500">&gt;</span>
                    </li>

                    <li class="text-gray-500">Catalog</li>
                </ul>
            </nav>

            <section
                class="container mx-auto flex-grow max-w-[1200px] border-b py-5 lg:flex lg:flex-row lg:py-10"
            >
                <section class="hidden w-[300px] flex-shrink-0 px-4 lg:block">
                    <div class="flex border-b pb-5">
                        <div class="w-full">
                            <p class="mb-3 font-medium">CATEGORIES</p>

                            {
                                categories.map((v, i) => {
                                    return (
                                        <div class="flex w-full justify-between" key={i}>
                                            <div class="flex justify-center items-center">
                                                <input type="checkbox" onClick={() => filterCategory(v.slug)} id={v.slug} checked={ (filterCategories.includes(v.slug)) ? 'checked' : '' } />
                                                <label class="ml-4" htmlFor={v.slug}>{v.name}</label>
                                            </div>
                                        </div>
                                    )
                                })
                            }



                        </div>
                    </div>

                    <div class="flex border-b py-5">
                        <div class="w-full">
                            <p class="mb-3 font-medium">BRANDS</p>

                            {
                                brands.map((v, i) => {
                                    return (
                                        <div class="flex w-full justify-between" key={i}>
                                            <div class="flex justify-center items-center">
                                                <input type="checkbox" onClick={() => filterBrand(v.slug)} id={v.slug} checked={ (filterBrands.includes(v.slug)) ? 'checked' : '' } />
                                                <label class="ml-4" htmlFor={v.slug}>{v.name}</label>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div class="flex border-b py-5">
                        <div class="w-full">
                            <p class="mb-3 font-medium">PRICE</p>

                            <div class="flex w-full">
                                <div class="flex justify-between">
                                    <input
                                        x-mask="99999"
                                        min="50"
                                        type="number"
                                        class="h-8 w-[90px] border pl-2"
                                        placeholder="50"
                                    />
                                    <span class="px-3">-</span>
                                    <input
                                        x-mask="999999"
                                        type="number"
                                        max="999999"
                                        class="h-8 w-[90px] border pl-2"
                                        placeholder="99999"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex border-b py-5">
                        <div class="w-full">
                            <p class="mb-3 font-medium">SIZE</p>

                            <div class="flex gap-2">
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
                    </div>

                    <div class="flex py-5">
                        <div class="w-full">
                            <p class="mb-3 font-medium">COLOR</p>

                            <div class="flex gap-2">
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
                    </div>
                </section>

                <div className='w-full'>
                  

                       <section
        class="container mx-auto flex-grow max-w-[1200px] border-b py-5 lg:flex lg:flex-row lg:py-10"
                    >
                       <RightSideCatalog filterCategories={filterCategories} />
                        
                    </section>

                    
                </div>

            </section>
        </>
    )
}