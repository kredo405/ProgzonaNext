"use client";

import VerticalMenu from "@/app/ui/dashboard/verticalMenu";
import HorizontalMenu from "@/app/ui/dashboard/horizontalMenu";
import Link from "next/link";
import Task from "@/app/ui/dashboard/tasks/task";
import { useAppSelector, useAppDispatch, useAppStore } from "@/lib/hooks";
import { setShow } from "@/lib/store/slices/verticalMenuSlice";
import Image from "next/image";
import Dropdown from "@/app/ui/dashboard/tasks/dropdown";

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
                        <h1 className="text-3xl font-bold text-orange-600">
                            Испытания
                        </h1>
                    </div>

                    <div className="px-2 md:px-10 mt-10">
                        <div className="flex flex-col md:flex-row justify-between border-b-2 border-solid border-[#323541]">
                            <div className="w-full md:w-8/12">
                                <p className="text-slate-300 py-3">
                                    Добро пожаловать на страницу с
                                    дополнительными задачами нашего курса по
                                    основам C#! Если вы чувствуете, что готовы к
                                    новым вызовам и хотите закрепить пройденные
                                    темы, вы найдете здесь ценный ресурс для
                                    самостоятельного углубленного обучения.
                                </p>
                                <p className="text-slate-300 py-3">
                                    Задачи, представленные здесь, разработаны
                                    для того, чтобы вы могли не только
                                    практиковать новые концепции, но и научиться
                                    решать конкретные программные проблемы,
                                    которые вы можете встретить в реальной
                                    жизни. Они варьируются от базового до
                                    продвинутого уровня и покрывают широкий
                                    спектр тем – от базового синтаксиса C# и
                                    ООП, до алгоритмов, структур данных и
                                    асинхронного программирования.
                                </p>
                                <p className="text-slate-300 py-3">
                                    Помните, что практика – ключ к мастерству в
                                    программировании. Используйте эти задачи как
                                    инструмент для роста и достижения ваших
                                    целей разработчика. Удачи!
                                </p>
                            </div>
                            <div className="w-full md:w-4/12 flex justify-center">
                                <Image
                                    src="/tasks.png"
                                    alt="tasks"
                                    width={400}
                                    height={300}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center md:justify-start mt-10 mx-2 md:mx-10">
                        <Dropdown
                            text="Язык"
                            items={["C#", "JavaScript"]}
                            color="orange"
                        />
                        <Dropdown
                            text="Уровень"
                            items={["Легко", "Средне", "Сложно"]}
                            color="sky"
                        />
                        <Dropdown
                            text="Статус"
                            items={["Решена", "Не решена"]}
                            color="lime"
                        />
                    </div>
                    <div className="flex justify-center md:justify-start flex-wrap gap-3 mx-10 mt-10">
                        <Task />
                        <Task />
                        <Task />
                        <Task />
                        <Task />
                        <Task />
                        <Task />
                        <Task />
                        <Task />
                        <Task />
                        <Task />
                        <Task />
                        <Task />
                        <Task />
                        <Task />
                    </div>
                    <div className="flex justify-center">
                        <button className="rounded-xl px-3 py-2 mt-10 text-orange-600 border-2 border-solid border-orange-600">
                            Показать еще
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tasks;
