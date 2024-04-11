"use client";

import VerticalMenu from "@/app/ui/dashboard/verticalMenu";
import HorizontalMenu from "@/app/ui/dashboard/horizontalMenu";
import BlogCard from "@/app/ui/dashboard/blog/blogCard";
import { useAppSelector, useAppDispatch, useAppStore } from "@/lib/hooks";
import { setShow } from "@/lib/store/slices/verticalMenuSlice";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

const Blog = () => {
    // const store = useAppStore();
    const dispatch = useAppDispatch();
    return (
        <div className="flex flex-col">
            <VerticalMenu />
            <div className="relative z-10">
                <HorizontalMenu />
            </div>
            <div
                className="w-full px-2 md:pl-[85px] py-6"
                onClick={() => dispatch(setShow(false))}
            >
                <div className="mt-16">
                    <div className="flex justify-around flex-col lg:flex-row bg-[#2a2e3a] text-orange-600 p-5 rounded-2xl mx-2 lg:mx-5">
                        <div>
                            <h1 className="text-3xl font-mono font-bold py-5">
                                Руководства по технологиям, инструментам и
                                методикам разработки
                            </h1>
                            <p className="font-mono text-xl text-slate-200">
                                Информационные ресурсы для новичков в мире
                                разработки: разбор основных терминов и простое
                                описание сложных процессов.
                            </p>
                        </div>
                        <div className="mt-4 lg:mt-0 px-2 lg:px-5">
                            <Image
                                src="/blog.png"
                                alt="blog"
                                width={400}
                                height={400}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row flex-wrap mt-10 lg:justify-evenly gap-3 lg:gap-5">
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                    </div>
                    <div className="flex justify-center mt-10">
                        <div className="flex items-center justify-between px-4 py-3 sm:px-6">
                            <div className="flex flex-1 justify-between sm:hidden">
                                <a
                                    href="#"
                                    className="relative inline-flex items-center rounded-md border border-slate-800 bg-slate-800 px-4 py-2 text-sm font-medium text-gray-100 hover:bg-slate-600"
                                >
                                    Пред.
                                </a>
                                <a
                                    href="#"
                                    className="relative ml-3 inline-flex items-center rounded-md border border-slate-800 bg-slate-800 px-4 py-2 text-sm font-medium text-gray-100 hover:bg-slate-600"
                                >
                                    След.
                                </a>
                            </div>
                            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                                <div>
                                    <nav
                                        className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                                        aria-label="Pagination"
                                    >
                                        <a
                                            href="#"
                                            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-slate-100 ring-1 ring-inset ring-gray-300 hover:bg-slate-700 focus:z-20 focus:outline-offset-0"
                                        >
                                            <span className="sr-only">
                                                Previous
                                            </span>
                                            <ChevronLeftIcon
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                            />
                                        </a>

                                        <a
                                            href="#"
                                            aria-current="page"
                                            className="relative z-10 inline-flex items-center bg-indigo-900 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            1
                                        </a>
                                        <a
                                            href="#"
                                            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-slate-100 ring-1 ring-inset ring-gray-300 hover:bg-slate-700 focus:z-20 focus:outline-offset-0"
                                        >
                                            2
                                        </a>
                                        <a
                                            href="#"
                                            className="relative hidden items-center px-4 py-2 text-sm font-semibold text-slate-100 ring-1 ring-inset ring-gray-300 hover:bg-slate-700 focus:z-20 focus:outline-offset-0 md:inline-flex"
                                        >
                                            3
                                        </a>
                                        <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-slate-100 ring-1 ring-inset ring-gray-300 hover:bg-slate-700 focus:outline-offset-0">
                                            ...
                                        </span>
                                        <a
                                            href="#"
                                            className="relative hidden items-center px-4 py-2 text-sm font-semibold text-slate-100 ring-1 ring-inset ring-gray-300 hover:bg-slate-700 focus:z-20 focus:outline-offset-0 md:inline-flex"
                                        >
                                            8
                                        </a>
                                        <a
                                            href="#"
                                            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-slate-100 ring-1 ring-inset ring-gray-300 hover:bg-slate-700 focus:z-20 focus:outline-offset-0"
                                        >
                                            9
                                        </a>
                                        <a
                                            href="#"
                                            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-slate-100 ring-1 ring-inset ring-gray-300 hover:bg-slate-700 focus:z-20 focus:outline-offset-0"
                                        >
                                            10
                                        </a>
                                        <a
                                            href="#"
                                            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-slate-100 ring-1 ring-inset ring-gray-300 hover:bg-slate-700 focus:z-20 focus:outline-offset-0"
                                        >
                                            <span className="sr-only">
                                                Next
                                            </span>
                                            <ChevronRightIcon
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                            />
                                        </a>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
