"use client";

import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

export const Nav: React.FC = () => {
    const pathname = usePathname();

    const navigation = [
        {
            name: "Главная",
            href: "/",
            current: pathname === "/",
        },
        {
            name: "Обучение",
            href: "/education-landing",
            current: pathname === "/education-landing",
        },
        {
            name: "Контакты",
            href: "/contacts",
            current: pathname === "/contacts",
        },
    ];

    return (
        <Disclosure as="nav">
            {({ open }) => (
                <>
                    <div className="max-w-7xl md:max-w-full px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    {open ? (
                                        <XMarkIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <Bars3Icon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <Link href="/">
                                    <div className="flex flex-shrink-0 items-center">
                                        <Image
                                            className="block h-8 w-auto lg:hidden"
                                            src="/logo.png"
                                            alt="Your Company"
                                            width={100}
                                            height={100}
                                        />
                                        <Image
                                            className="hidden h-8 w-auto lg:block"
                                            src="/logo.png"
                                            alt="Your Company"
                                            width={100}
                                            height={100}
                                        />
                                    </div>
                                </Link>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current
                                                        ? "bg-zinc-900 text-white"
                                                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                                    "rounded-md px-3 py-2 text-sm font-medium font-mono"
                                                )}
                                                aria-current={
                                                    item.current
                                                        ? "page"
                                                        : undefined
                                                }
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 lg:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 hidden ">
                                <Link
                                    href="/auth"
                                    className="text-slate-100 font-bold px-3 font-mono"
                                >
                                    Вход
                                </Link>
                                <Link
                                    href="/registration"
                                    className="text-orange-500 font-bold px-3 font-mono"
                                >
                                    Регистрация
                                </Link>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        item.current
                                            ? "bg-gray-900 text-white"
                                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                        "block rounded-md px-3 py-2 text-base font-medium font-mono"
                                    )}
                                    aria-current={
                                        item.current ? "page" : undefined
                                    }
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="flex items-center mt-10 justify-center">
                                <Link
                                    href="/auth"
                                    className="text-slate-100 font-mono font-bold px-3"
                                >
                                    Вход
                                </Link>
                                <Link
                                    href="/registration"
                                    className="text-orange-500 font-mono font-bold px-3"
                                >
                                    Регистрация
                                </Link>
                            </div>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};
