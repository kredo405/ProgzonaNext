"use client";

import VerticalMenu from "@/app/ui/dashboard/verticalMenu";
import HorizontalMenu from "@/app/ui/dashboard/horizontalMenu";
import Link from "next/link";
import { useAppSelector, useAppDispatch, useAppStore } from "@/lib/hooks";
import { setShow } from "@/lib/store/slices/verticalMenuSlice";
import Image from "next/image";
import { CheckIcon } from "@heroicons/react/20/solid";

const EducationPlan = () => {
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
                    <div className="py-5 sm:py-3">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto max-w-2xl sm:text-center">
                                <h2 className="text-3xl font-bold tracking-tight text-orange-600 sm:text-4xl text-center">
                                    Оновы программировании на C#
                                </h2>
                            </div>
                            <div className="flex justify-center mt-10">
                                <Image
                                    src="/courseCard1.png"
                                    alt="course"
                                    width={500}
                                    height={300}
                                />
                            </div>
                            <div className="mx-auto mt-16">
                                <p className="text-slate-200">
                                    Погрузитесь в мир C# с нашим курсом Основы
                                    C#. Этот курс идеально подходит для
                                    начинающих разработчиков и представляет
                                    собой ваш первый шаг на пути к становлению
                                    опытным программистом .NET. Вы научитесь
                                    основам синтаксиса C#, принципам
                                    объектно-ориентированного программирования и
                                    освоите ключевые концепции, необходимые для
                                    создания надежных и эффективных приложений.
                                    Курс объединяет теоретические знания с
                                    практическими заданиями, что позволит вам к
                                    концу обучения самостоятельно реализовывать
                                    свои проекты на C#.
                                </p>
                            </div>
                            <div className="flex justify-center mt-10">
                                <Link
                                    href="/dashboard/lesson"
                                    className="hover:bg-orange-600 hover:text-slate-200 border-2 border-orange-600 border-solid text-orange-500 text-center font-bold font-mono rounded-lg w-[300px] py-4"
                                >
                                    Продолжить
                                </Link>
                            </div>
                            <div className="flex justify-center mt-10">
                                <h2 className="text-xl font-bold tracking-tight text-slate-200 md:text-2xl">
                                    Программа обучения
                                </h2>
                            </div>
                            <div className="mx-auto mt-5 max-w-2xl rounded-3xl ring-1 sm:mt-10 lg:mx-32 lg:flex lg:max-w-none flex justify-center">
                                <div className="p-4 md:p-10 lg:flex-auto">
                                    <ul>
                                        <li className="flex items-center border-b-2 hover:bg-[#292c35] border-[#323541] px-2 rounded-xl py-3 corsor-pointer">
                                            <Link
                                                href="/dashboard/lesson"
                                                className="flex items-center justify-between w-full"
                                            >
                                                <div>
                                                    <span className="text-orange-500 hover-text-orange-700">
                                                        1.
                                                    </span>
                                                    <span className="ml-3 text-sm lg:text-lg font-bold text-slate-100 hover:text-sky-500">
                                                        Обзор платформы .NET
                                                    </span>
                                                </div>
                                                <div>
                                                    <CheckIcon className="w-5 h-5 text-lime-500 mr-2" />
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="flex items-center border-b-2 hover:bg-[#292c35] border-[#323541] px-2 rounded-xl py-3 corsor-pointer">
                                            <Link
                                                href="/dashboard/lesson"
                                                className="flex items-center justify-between w-full"
                                            >
                                                <div>
                                                    <span className="text-orange-500 hover-text-orange-700">
                                                        2.
                                                    </span>
                                                    <span className="ml-3 text-sm lg:text-lg font-bold text-slate-100 hover:text-sky-500">
                                                        Установка и настройка
                                                        среды разработки (IDE)
                                                    </span>
                                                </div>
                                                <div>
                                                    <CheckIcon className="w-5 h-5 text-lime-500 mr-2" />
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="flex items-center border-b-2 hover:bg-[#292c35] border-[#323541] px-2 rounded-xl py-3 corsor-pointer">
                                            <Link
                                                href="/dashboard/lesson"
                                                className="flex items-center justify-between w-full"
                                            >
                                                <div>
                                                    <span className="text-orange-500 hover-text-orange-700">
                                                        3.
                                                    </span>
                                                    <span className="ml-3 text-sm lg:text-lg font-bold text-slate-100 hover:text-sky-500">
                                                        Первая программа на C#
                                                        (Hello, World!)
                                                    </span>
                                                </div>
                                                <div>
                                                    <CheckIcon className="w-5 h-5 text-lime-500 mr-2" />
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="flex items-center border-b-2 hover:bg-[#292c35] border-[#323541] px-2 rounded-xl py-3 corsor-pointer">
                                            <Link
                                                href="/dashboard/lesson"
                                                className="flex items-center justify-between w-full"
                                            >
                                                <div>
                                                    <span className="text-orange-500 hover-text-orange-700">
                                                        4.
                                                    </span>
                                                    <span className="ml-3 text-sm lg:text-lg font-bold text-slate-100 hover:text-sky-500">
                                                        Переменные и типы данных
                                                    </span>
                                                </div>
                                                <div>
                                                    <CheckIcon className="w-5 h-5 text-lime-500 mr-2" />
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="flex items-center border-b-2 hover:bg-[#292c35] border-[#323541] px-2 rounded-xl py-3 corsor-pointer">
                                            <Link
                                                href="/dashboard/lesson"
                                                className="flex items-center justify-between w-full"
                                            >
                                                <div>
                                                    <span className="text-orange-500 hover-text-orange-700">
                                                        5.
                                                    </span>
                                                    <span className="ml-3 text-sm lg:text-lg font-bold text-slate-100 hover:text-sky-500">
                                                        Операторы и выражения
                                                    </span>
                                                </div>
                                                <div>
                                                    {/* <CheckIcon className="w-5 h-5 text-lime-500 mr-2"  /> */}
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="flex items-center border-b-2 hover:bg-[#292c35] border-[#323541] px-2 rounded-xl py-3 corsor-pointer">
                                            <Link
                                                href="/dashboard/lesson"
                                                className="flex items-center justify-between w-full"
                                            >
                                                <div>
                                                    <span className="text-orange-500 hover-text-orange-700">
                                                        6.
                                                    </span>
                                                    <span className="ml-3 text-sm lg:text-lg font-bold text-slate-100 hover:text-sky-500">
                                                        Управляющие конструкции:
                                                        условные операторы и
                                                        циклы
                                                    </span>
                                                </div>
                                                <div>
                                                    {/* <CheckIcon className="w-5 h-5 text-lime-500" /> */}
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EducationPlan;
