"use client";

import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { useAppSelector, useAppDispatch, useAppStore } from "@/lib/hooks";
import { setSelectedCourse } from "@/lib/store/slices/educationSlice";
import { setdCourseId } from "@/lib/store/slices/educationSlice";
import Image from "next/image";

const solutions = [
    {
        name: "Fulstack разработка на JavaScript",
        description: "lorem ipsum dolor sit amet",
        href: "#",
        icon: "/javascriptIcon.svg",
        id: 1,
    },
    {
        name: "Курс Путешествие в мир C#",
        description: "lorem ipsum dolor sit amet",
        href: "#",
        icon: "/cSharp.svg",
        id: 2,
    },
];

export default function CoursePicker() {
    const dispatch = useAppDispatch();

    const onClickCourse = (id: number) => {
        dispatch(setSelectedCourse(true));
        dispatch(setdCourseId(id));
    };

    return (
        <Popover className="relative">
            <div className="w-full flex justify-center">
                <Popover.Button className="inline-flex items-center px-10 py-5 rounded-2xl justify-center gap-x-1 text-sm font-semibold bg-orange-600 leading-6 text-slate-100">
                    <span className="text-slate-100 text-xl">Выбрать курс</span>
                    <ChevronUpIcon className="h-5 w-5" aria-hidden="true" />
                </Popover.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
            >
                <Popover.Panel className="absolute left-1/2 bottom-full z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
                    <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                        <div className="p-4">
                            {solutions.map((item) => (
                                <div
                                    key={item.name}
                                    onClick={() => {
                                        onClickCourse(item.id);
                                    }}
                                    className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                                >
                                    <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                        <Image
                                            src={item.icon}
                                            alt={item.name}
                                            width={100}
                                            height={100}
                                        />
                                    </div>
                                    <div>
                                        <a
                                            href={item.href}
                                            className="font-semibold text-gray-900"
                                        >
                                            {item.name}
                                            <span className="absolute inset-0" />
                                        </a>
                                        <p className="mt-1 text-gray-600">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    );
}
