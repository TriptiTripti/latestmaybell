"use client"

import Link from 'next/link';
import React, { use, useState } from 'react'

export default function Header() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  return (
    <>
<header
 class="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5"
            >
                <a href="index.html">
                    <img
                        className="cursor-pointer sm:h-auto sm:w-auto"
                        src="/images/company-logo.svg"
                        alt="company logo"
                    />
                </a>
                <div class="md:hidden">
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            class="h-8 w-8"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </button>
                </div>

                <form class="hidden h-9 w-2/5 items-center border md:flex">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        class="mx-3 h-4 w-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                    </svg>

                    <input
                        class="hidden w-11/12 outline-none md:block"
                        type="search"
                        placeholder="Search"
                    />

                    <button class="ml-auto h-full bg-amber-400 px-4 hover:bg-yellow-300">
                        Search
                    </button>
                </form>

                <div class="hidden gap-3 md:!flex">
                    <Link
                        href="/wishlist"
                        class="flex cursor-pointer flex-col items-center justify-center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            class="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                            />
                        </svg>

                        <p class="text-xs">Wishlist</p>
                    </Link>

                    <Link
                        href="/cart"
                        class="flex cursor-pointer flex-col items-center justify-center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="h-6 w-6"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                                clipRule="evenodd"
                            />
                        </svg>

                        <p class="text-xs">Cart</p>
                    </Link>

                    <Link
                        href="/account-page"
                        class="relative flex cursor-pointer flex-col items-center justify-center"   >
                        <span class="absolute bottom-[33px] right-1 flex h-2 w-2">
                            <span
                                class="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"
                            ></span>
                            <span
                                class="relative inline-flex h-2 w-2 rounded-full bg-red-500"
                            ></span>
                        </span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            class="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                            />
                        </svg>

                        <p class="text-xs">Account</p>
                    </Link>
                </div>
            </header>
            {/* <form class="hidden h-9 w-2/5 items-center border md:flex">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    class="mx-3 h-4 w-4"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                </svg>

                <input
                    class="hidden w-11/12 outline-none md:block"
                    type="search"
                    placeholder="Search"
                />

                <button class="ml-auto h-full bg-amber-400 px-4 hover:bg-yellow-300">
                    Search
                </button>
            </form> */}

            {/* <div class="hidden gap-3 md:!flex">
                <Link
                    href="/wishlist"
                    class="flex cursor-pointer flex-col items-center justify-center"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        class="h-6 w-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                    </svg>

                    <p class="text-xs">Wishlist</p>
                </Link>

                <Link 
                    href="/cart"
                    class="flex cursor-pointer flex-col items-center justify-center"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="h-6 w-6"
                    >
                        <path
                            fillRule="evenodd"
                            d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                            clipRule="evenodd"
                        />
                    </svg>

                    <p class="text-xs">Cart</p>
                </Link>

                <Link
                    href="/account-page"
                    class="relative flex cursor-pointer flex-col items-center justify-center"
                >
                    <span class="absolute bottom-[33px] right-1 flex h-2 w-2">
                        <span
                            class="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"
                        ></span>
                        <span
                            class="relative inline-flex h-2 w-2 rounded-full bg-red-500"
                        ></span>
                    </span>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        class="h-6 w-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                    </svg>

                    <p class="text-xs">Account</p>
                </Link>
            </div> */}
{/* 
 mobile menu open */}

            <section
                x-show="mobileMenuOpen" onClick={() => setMobileMenuOpen(false)}

                className=   { (  mobileMenuOpen ?  'absolute left-0 right-0 z-50 h-screen w-full bg-white' :'absolute left-0 right-0 z-50 h-screen w-full bg-white hidden')}

            >
                <div class="mx-auto">
                    <div class="mx-auto flex w-full justify-center gap-3 py-4">
                        <Link
                            href="/wishlist"
                            class="flex cursor-pointer flex-col items-center justify-center"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                class="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                />
                            </svg>

                            <p class="text-xs">Wishlist</p>
                        </Link>

                        <Link
                            href="/cart"
                            class="flex cursor-pointer flex-col items-center justify-center"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                class="h-6 w-6"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                                    clipRule="evenodd"
                                />
                            </svg>

                            <p class="text-xs">Cart</p>
                        </Link>

                        <Link
                            href="/account-page"
                            class="relative flex cursor-pointer flex-col items-center justify-center"
                        >
                            <span class="absolute bottom-[33px] right-1 flex h-2 w-2">
                                <span
                                    class="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"
                                ></span>
                                <span
                                    class="relative inline-flex h-2 w-2 rounded-full bg-red-500"
                                ></span>
                            </span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                class="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                />
                            </svg>

                            <p class="text-xs">Account</p>
                        </Link>
                    </div>

                    <form class="my-4 mx-5 flex h-9 items-center border">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            class="mx-3 h-4 w-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                        </svg>

                        <input
                            class="hidden w-11/12 outline-none md:block"
                            type="search"
                            placeholder="Search"
                        />

                        <button
                            type="submit"
                            class="ml-auto h-full bg-amber-400 px-4 hover:bg-yellow-300"
                        >
                            Search
                        </button>
                    </form>
                    <ul class="text-center font-medium">
                        <li class="py-2"><Link href="/">Home</Link></li>
                        <li class="py-2"><Link href="/catalog">Catalog</Link></li>
                        <li class="py-2"><Link href="/about-us">About Us</Link></li>
                        <li class="py-2"><Link href="/contact-us">Contact Us</Link></li>
                    </ul>
                </div>
            </section>


{/* mobile menu close */}


<nav className="relative bg-violet-900">
                <div
                    className="mx-auto hidden h-12 w-full max-w-[1200px] items-center md:flex"
                >
                    <button onClick={() => setDesktopMenuOpen(!desktopMenuOpen)}

                        className="ml-5 flex h-full w-40 cursor-pointer items-center justify-center bg-amber-400"
                    >
                        <div className="flex justify-around" href="#">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="mx-1 h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>

                            All categories
                        </div>
                    </button>

                    <div className="mx-7 flex gap-8">
                        <Link
                            className="font-light text-white duration-100 hover:text-yellow-400 hover:underline"
                            href="/"
                        >Home</Link >
                        <Link
                            className="font-light text-white duration-100 hover:text-yellow-400 hover:underline"
                            href="/catalog"
                        >Catalog</Link>
                        <Link
                            className="font-light text-white duration-100 hover:text-yellow-400 hover:underline"
                            href="/about-us"
                        >About Us
                        </Link >
                        <Link
                            className="font-light text-white duration-100 hover:text-yellow-400 hover:underline"
                            href="/contact-us"
                        >Contact Us</Link >
                    </div>

                    <div className="ml-auto flex gap-4 px-5">
                        <Link
                            className="font-light text-white duration-100 hover:text-yellow-400 hover:underline"
                            href="/login"
                        >Login</Link>

                        <span className="text-white">&#124;</span>

                        <Link
                            className="font-light text-white duration-100 hover:text-yellow-400 hover:underline"
                            href="/sign-up"
                        >Sign Up</Link  >
                    </div>
                </div>
            </nav>
 {/* desktop menu open */}

 <section
                x-show="desktopMenuOpen" onClick={() => setDesktopMenuOpen(false)}
                className=   { (  desktopMenuOpen ?  'absolute left-0 right-0 z-10 w-full border-b border-r border-l bg-white' :'absolute left-0 right-0 z-10 w-full border-b border-r border-l bg-white hidden')}

         
    >
            <div className="mx-auto flex max-w-[1200px] py-10">
                <div className="w-[300px] border-r">
                    <ul className="px-5">
                        <li
                            className="active:blue-900 flex items-center gap-2 bg-amber-400 py-2 px-3 active:bg-amber-400"
                        >
                            <img
                                width="15px"
                                height="15px"
                                src="/images/bed.svg"
                                alt="Bedroom icon"
                            />
                            Bedroom
                            <span className="ml-auto"
                            ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-4 w-4"
                            >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                    />
                                </svg>
                            </span>
                        </li>

                        <li
                            className="active:blue-900 flex items-center gap-2 py-2 px-3 hover:bg-neutral-100 active:bg-amber-400"
                        >
                            <img
                                width="15px"
                                height="15px"
                                src="/images/sleep.svg"
                                alt="bedroom icon"
                            />
                            Matrass
                            <span className="ml-auto"
                            ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-4 w-4"
                            >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                    />
                                </svg>
                            </span>
                        </li>

                        <li
                            className="active:blue-900 flex items-center gap-2 py-2 px-3 hover:bg-neutral-100 active:bg-amber-400"
                        >
                            <img
                                width="15px"
                                height="15px"
                                src="/images/outdoor.svg"
                                alt="bedroom icon"
                            />
                            Outdoor
                            <span className="ml-auto"
                            ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-4 w-4"
                            >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                    />
                                </svg>
                            </span>
                        </li>

                        <li
                            className="active:blue-900 flex items-center gap-2 py-2 px-3 hover:bg-neutral-100 active:bg-amber-400"
                        >
                            <img
                                width="15px"
                                height="15px"
                                src="/images/sofa.svg"
                                alt="bedroom icon"
                            />
                            Sofa
                            <span className="ml-auto"
                            ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-4 w-4"
                            >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                    />
                                </svg>
                            </span>
                        </li>

                        <li
                            className="active:blue-900 flex items-center gap-2 py-2 px-3 hover:bg-neutral-100 active:bg-amber-400"
                        >
                            <img
                                width="15px"
                                height="15px"
                                src="/images/kitchen.svg"
                                alt="bedroom icon"
                            />
                            Kitchen
                            <span className="ml-auto"
                            ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-4 w-4"
                            >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                    />
                                </svg>
                            </span>
                        </li>

                        <li
                            className="active:blue-900 flex items-center gap-2 py-2 px-3 hover:bg-neutral-100 active:bg-amber-400"
                        >
                            <img
                                width="15px"
                                height="15px"
                                src="/images/food.svg"
                                alt="Food icon"
                            />
                            Living room
                            <span className="ml-auto"
                            ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-4 w-4"
                            >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                    />
                                </svg>
                            </span>
                        </li>
                    </ul>
                </div>

                <div className="flex w-full justify-between">
                    <div className="flex gap-6">
                        <div className="mx-5">
                            <p className="font-medium text-gray-500">BEDS</p>
                            <ul className="text-sm leading-8">
                                <li><a href="product-overview.html">Italian bed</a></li>
                                <li><a href="product-overview.html">Queen-size bed</a></li>
                                <li><a href="product-overview.html">Wooden craft bed</a></li>
                                <li><a href="product-overview.html">King-size bed</a></li>
                            </ul>
                        </div>

                        <div className="mx-5">
                            <p className="font-medium text-gray-500">LAMPS</p>
                            <ul className="text-sm leading-8">
                                <li><a href="product-overview.html">Italian Purple Lamp</a></li>
                                <li><a href="product-overview.html">APEX Lamp</a></li>
                                <li><a href="product-overview.html">PIXAR lamp</a></li>
                                <li><a href="product-overview.html">Ambient Nightlamp</a></li>
                            </ul>
                        </div>

                        <div className="mx-5">
                            <p className="font-medium text-gray-500">BEDSIDE TABLES</p>
                            <ul className="text-sm leading-8">
                                <li><a href="product-overview.html">Purple Table</a></li>
                                <li><a href="product-overview.html">Easy Bedside</a></li>
                                <li><a href="product-overview.html">Soft Table</a></li>
                                <li><a href="product-overview.html">Craft Table</a></li>
                            </ul>
                        </div>

                        <div className="mx-5">
                            <p className="font-medium text-gray-500">SPECIAL</p>
                            <ul className="text-sm leading-8">
                                <li><a href="product-overview.html">Humidifier</a></li>
                                <li><a href="product-overview.html">Bed Cleaner</a></li>
                                <li><a href="product-overview.html">Vacuum Cleaner</a></li>
                                <li><a href="product-overview.html">Pillow</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section >

        {/* desktop menu close */}

        <div className="relative">
        <img
          className="w-full object-cover brightness-50 filter lg:h-[500px]"
          src="/images/header-bg.jpeg"
          alt="Living room image"
        />

        <div
          className="absolute top-1/2 left-1/2 mx-auto flex w-11/12 max-w-[1200px] -translate-x-1/2 -translate-y-1/2 flex-col text-center text-white lg:ml-5"
        >
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-left">
            Best Collection for Home decoration
          </h1>
          <p className="pt-3 text-xs lg:w-3/5 lg:pt-5 lg:text-left lg:text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
            aperiam natus, nulla, obcaecati nesciunt, itaque adipisci earum
            ducimus pariatur eaque labore.
          </p>
          <button
            className="mx-auto mt-5 w-1/2 bg-amber-400 px-3 py-1 text-black duration-100 hover:bg-yellow-300 lg:mx-0 lg:h-10 lg:w-2/12 lg:px-10"
          >
            Order Now
          </button>
        </div>
      </div>

    </>
  )
}
