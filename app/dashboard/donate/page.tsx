"use client";

import VerticalMenu from "@/app/ui/dashboard/verticalMenu";
import HorizontalMenu from "@/app/ui/dashboard/horizontalMenu";
import BlogCard from "@/app/ui/dashboard/blog/blogCard";
import { useAppSelector, useAppDispatch, useAppStore } from "@/lib/hooks";
import { setShow } from "@/lib/store/slices/verticalMenuSlice";
import Image from "next/image";
import { CheckIcon } from "@heroicons/react/20/solid";

const includedFeatures = ["ЮMoney ", "Visa/MasterCard", "bePaid", "WebPay"];

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
                    <div className="py-24 sm:py-32">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto max-w-2xl sm:text-center">
                                <h2 className="text-3xl font-bold tracking-tight text-orange-600 sm:text-4xl">
                                    Поддержать Проект
                                </h2>
                                <p className="mt-6 text-lg leading-8 text-slate-200">
                                    Вы можете помочь нашему проекту, сделав
                                    пожертвование.
                                </p>
                            </div>
                            <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                                <div className="p-8 sm:p-10 lg:flex-auto">
                                    <h3 className="text-2xl font-bold tracking-tight text-slate-100">
                                        Способы оплаты
                                    </h3>
                                    <p className="mt-6 text-base leading-7 text-slate-200">
                                        Мы предлагаем несколько удобных способов
                                        для совершения пожертвования и поддержки
                                        нашего проекта. Вы можете выбрать
                                        наиболее удобный для вас способ оплаты
                                    </p>
                                    <div className="mt-10 flex items-center gap-x-4">
                                        <div className="h-px flex-auto bg-blue-800" />
                                    </div>
                                    <ul
                                        role="list"
                                        className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-slate-100 sm:grid-cols-2 sm:gap-6"
                                    >
                                        {includedFeatures.map((feature) => (
                                            <li
                                                key={feature}
                                                className="flex gap-x-3"
                                            >
                                                <CheckIcon
                                                    className="h-6 w-5 flex-none text-indigo-100"
                                                    aria-hidden="true"
                                                />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                                    <div className="rounded-2xl h-full bg-[#292c35] py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                                        <div className="mx-auto max-w-xs px-8">
                                            <button className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                                Поддержать
                                            </button>
                                            <p className="mt-6 text-xs leading-5 text-gray-300">
                                                Мы ценим вашу поддержку и
                                                благодарим вас за вклад в
                                                развитие нашего проекта. Ваше
                                                пожертвование поможет нам
                                                продолжать нашу миссию и
                                                достигать новых высот.
                                            </p>
                                        </div>
                                    </div>
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
