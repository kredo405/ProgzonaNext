"use client";

import VerticalMenu from "@/app/ui/dashboard/verticalMenu";
import HorizontalMenu from "@/app/ui/dashboard/horizontalMenu";
import Link from "next/link";
import Task from "@/app/ui/dashboard/tasks/task";
import { useAppSelector, useAppDispatch, useAppStore } from "@/lib/hooks";
import { setShow } from "@/lib/store/slices/verticalMenuSlice";
import Image from "next/image";
import Dropdown from "@/app/ui/dashboard/tasks/dropdown";
import EditorCode from "@/app/ui/dashboard/lesson/editorCode";

const task = {
    task: "Напишите программу, которая приветствует пользователя",
    description:
        "Вам необходимо создать программу, которая приветствует пользователя в зависимости от его возраста. Если пользователь младше 18 лет, программа должна выводить сообщение 'Привет, ребенок!', а если пользователь 18 лет или старше, то сообщение должно быть 'Привет, взрослый!'.",
};

const Tasks = () => {
    // const store = useAppStore();
    const dispatch = useAppDispatch();

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };

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
                    <div className="flex justify-center">
                        <h1 className="text-3xl font-bold text-orange-600 text-center">
                            Анализатор логов с использованием многопоточности
                        </h1>
                    </div>

                    <div className="px-2 md:px-10 mt-10">
                        <div className="flex flex-col md:flex-row  border-b-2 border-solid border-[#323541]">
                            <div className="w-full">
                                <p className="text-slate-300 py-3">
                                    Разработайте консольное приложение на C#,
                                    которое анализирует большой объем логов и
                                    предоставляет отчет о самых часто
                                    встречающихся ошибках.
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-center mt-10">
                            <h2 className="text-xl font-bold text-orange-600">
                                Требования
                            </h2>
                        </div>
                        <div className="flex justify-center ">
                            <ul className="mt-5 flex flex-col mx-auto">
                                <li className="flex items-center text-slate-300">
                                    <span className="mr-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6 text-orange-600"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                                            />
                                        </svg>
                                    </span>
                                    <span>
                                        Программа должна читать текстовые файлы
                                        логов из заданной директории.
                                    </span>
                                </li>
                                <li className="flex items-center text-slate-300">
                                    <span className="mr-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6 text-orange-600"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                                            />
                                        </svg>
                                    </span>
                                    <span>
                                        Используйте async и await для
                                        асинхронного чтения файлов.
                                    </span>
                                </li>
                                <li className="flex items-center text-slate-300">
                                    <span className="mr-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6 text-orange-600"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                                            />
                                        </svg>
                                    </span>
                                    <span>
                                        Реализуйте механизм многопоточности для
                                        обработки данных с использованием
                                        ThreadPool или Task Parallel Library
                                        (TPL).
                                    </span>
                                </li>
                                <li className="flex items-center text-slate-300">
                                    <span className="mr-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6 text-orange-600"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                                            />
                                        </svg>
                                    </span>
                                    <span>
                                        - Программа должна осуществлять поиск
                                        строк, содержащих ключевое слово ERROR
                                    </span>
                                </li>
                                <li className="flex items-center text-slate-300">
                                    <span className="mr-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6 text-orange-600"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                                            />
                                        </svg>
                                    </span>
                                    <span>
                                        - Для каждой найденной ошибки программа
                                        должна вычислить количество её появлений
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex justify-center md:justify-start mx-2 md:mx-10 mt-10">
                        <EditorCode
                            task={task.task}
                            description={task.description}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tasks;
