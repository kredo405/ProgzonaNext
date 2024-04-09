"use client";

import Image from "next/image";
import VerticalMenu from "@/app/ui/dashboard/verticalMenu";
import HorizontalMenu from "@/app/ui/dashboard/horizontalMenu";
import Achievement from "@/app/ui/dashboard/Achievement";
import { useAppSelector, useAppDispatch, useAppStore } from "@/lib/hooks";
import { setShow } from "@/lib/store/slices/verticalMenuSlice";

const Profile = () => {
    const dispatch = useAppDispatch();

    const stats = [
        {
            data: "0",
            title: "Курсов",
        },
        {
            data: "0",
            title: "Испытаний",
        },
        {
            data: "0%",
            title: "Решено",
        },
        {
            data: "0",
            title: "баллов",
        },
    ];

    return (
        <>
            <div className="flex flex-col">
                <VerticalMenu />
                <div className="relative z-10">
                    <HorizontalMenu />
                </div>
                <div
                    className="w-full px-2 md:pl-[85px] py-6"
                    onClick={() => dispatch(setShow(false))}
                >
                    <section>
                        <div className="flex mt-10 border-b-2 border-solid border-slate-700 py-3">
                            <h2 className="text-slate-100 font-mono font-bold text-4xl px-5">
                                Кабинет
                            </h2>
                        </div>
                        <div className="flex">
                            <div className="w-full flex justify-center md:justify-start mt-20 md:px-32 flex-wrap lg:flex-nowrap">
                                <Image
                                    width={200}
                                    height={200}
                                    className="rounded-full"
                                    src="/avatar.jpg"
                                    alt="avatar"
                                />
                                <div className="flex flex-col md:mt-0 mt-3">
                                    <h2 className="text-slate-100 font-mono font-bold text-2xl px-10">
                                        Илона Маскова
                                    </h2>
                                    <h3 className="text-orange-500 font-mono font-bold text-center md:text-start text-2xl px-10 mt-10 animate-bounce animate-pulse animate-ping">
                                        Уровень 1
                                    </h3>
                                </div>
                                <div className="max-w-screen-xl mx-auto px-4 md:px-8 mt-10 lg:mt-0">
                                    <ul className="flex flex-col items-center justify-center gap-x-12 gap-y-10 sm:flex-row sm:flex-wrap md:gap-x-24">
                                        {stats.map((item, idx) => (
                                            <li
                                                key={idx}
                                                className="text-center"
                                            >
                                                <h4 className="text-4xl text-slate-100 font-mono font-semibold">
                                                    {item.data}
                                                </h4>
                                                <p className="mt-3 text-slate-300 font-mono font-medium">
                                                    {item.title}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className=" mt-10">
                            <h2 className="text-slate-100 font-mono font-bold text-4xl text-center">
                                Достижения
                            </h2>
                            <div className="flex sm:justify-center gap-x-12 gap-y-10 flex-wrap mt-20">
                                <Achievement
                                    image="/achieve.jpg"
                                    title="Начинающий кодер"
                                    desc="Значок, который получают все новые пользователи при регистрации"
                                />
                                <Achievement
                                    image="/achieve.jpg"
                                    title="Первый код"
                                    desc="Значок за написание и успешное выполнение первой программы"
                                />
                                <Achievement
                                    image="/achieve.jpg"
                                    title="Мастер алгоритмов"
                                    desc="Значок за успешное решение задач на алгоритмы"
                                />
                                <Achievement
                                    image="/achieve.jpg"
                                    title="Ментор"
                                    desc="Значок за помощь другим пользователям в решении их проблем с кодом"
                                />
                                <Achievement
                                    image="/achieve.jpg"
                                    title="Бессонная ночь"
                                    desc="Значок за кодирование в ночное время"
                                />
                                <Achievement
                                    image="/achieve.jpg"
                                    title="Марафонец"
                                    desc="Значок за кодирование определенное количество часов без перерыва"
                                />
                                <Achievement
                                    image="/achieve.jpg"
                                    title="Легенда кодирования"
                                    desc="Этот значок получают те, кто достиг определенного уровня мастерства в программировании"
                                />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default Profile;
