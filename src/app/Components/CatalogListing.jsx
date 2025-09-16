'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-toastify';
import ProductCard from './ProductCard';
import ProductLoading from './ProductLoading';
import { Pagination } from "flowbite-react";


export default function CatalogListing() {
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    const [getProducts, setGetProducts] = useState([]);
    const [isProductLoading, setIsProductLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => setCurrentPage(page);
    useEffect(() => {
        axios.get('https://wscubetech.co/ecommerce-api/categories.php')
            .then((response) => {
                setCategories(response.data.data);
            })
            .catch((error) => {
                toast.error('Something went wrong.');
            });
    }, []);

    useEffect(() => {
        axios.get('https://wscubetech.co/ecommerce-api/brands.php')
            .then((response) => {
                setBrands(response.data.data);
            })
            .catch((error) => {
                toast.error('Something went wrong.');
            });
    }, []);

    const params = useParams();

    const [filterCategories, setFilterCategories] = useState((params.slug?.filter(Boolean).slice(-1) || []));
    const [filterBrands, setFilterBrands] = useState([]);

    useEffect(() => {
        setFilterCategories(params.slug?.filter(Boolean).slice(-1) || []);
    }, [params.slug]);

    useEffect(() => {
        setIsProductLoading(true); // Show loading spinner before fetching
        axios.get('https://wscubetech.co/ecommerce-api/products.php', {
            params: {
                page: 1,
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
            setGetProducts(result.data.data);
            setIsProductLoading(false); // Hide loading spinner after fetching
        })
        .catch(() => {
            toast.error('Something went wrong !!');
        });
    }, [filterCategories, filterBrands]);

    const filterCategory = (slug) => {
        setIsProductLoading(true); // Show loading spinner when a category is selected

        if (filterCategories.includes(slug)) {
            const data = filterCategories.filter((v) => v !== slug);
            setFilterCategories([...data]);
        } else {
            setFilterCategories([...filterCategories, slug]);
        }
    };

    const filterBrand = (slug) => {
        if (filterBrands.includes(slug)) {
            const data = filterBrands.filter((v) => v !== slug);
            setFilterBrands([...data]);
        } else {
            setFilterBrands([...filterBrands, slug]);
        }
    };

    return (
        <>
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
                    <li className="text-gray-500">Catalog</li>
                </ul>
            </nav>

            <section className="container mx-auto flex-grow max-w-[1200px] border-b py-5 lg:flex lg:flex-row lg:py-10">
                <section className="hidden w-[300px] flex-shrink-0 px-4 lg:block">
                    <div className="flex border-b pb-5">
                        <div className="w-full">
                            <p className="mb-3 font-medium">CATEGORIES</p>
                            {
                                categories.map((v, i) => {
                                    return (
                                        <div className="flex w-full justify-between" key={i}>
                                            <div className="flex justify-center items-center">
                                                <input
                                                    type="checkbox"
                                                    onClick={() => filterCategory(v.slug)}
                                                    id={v.slug}
                                                    checked={filterCategories.includes(v.slug)}
                                                />
                                                <label className="ml-4" htmlFor={v.slug}>{v.name}</label>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </section>

                <section className=" w-full h-full mx-auto grid max-w-[1200px] grid-cols-2 gap-3 px-5 pb-10 lg:grid-cols-3">
                    {
                        isProductLoading
                            ? (
                                <>
                                    <ProductLoading />
                                    <ProductLoading />
                                    <ProductLoading />
                                    <ProductLoading />
                                    <ProductLoading />
                                    <ProductLoading />
                                    <ProductLoading />
                                    <ProductLoading />
                                    <ProductLoading />
                                    <ProductLoading />
                                    <ProductLoading />
                                    <ProductLoading />
                                </>
                            )
                            : getProducts.map((v, i) => (
                                <ProductCard key={i} product={v} />
                            ))
                    }

                    
                </section>
                <div className="flex overflow-x-auto sm:justify-center">
      <Pagination currentPage={currentPage} totalPages={100} onPageChange={onPageChange} />
    </div>
            </section>
        </>
    );
}