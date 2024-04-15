"use client";

import VerticalMenu from "../ui/dashboard/verticalMenu";
import HorizontalMenu from "../ui/dashboard/horizontalMenu";
import CoursePicker from "../ui/dashboard/сoursePicker";
import CourseCard from "../ui/dashboard/courseCard";
import { useAppSelector, useAppDispatch, useAppStore } from "@/lib/hooks";
import { setShow } from "@/lib/store/slices/verticalMenuSlice";
import { useState } from "react";
import StartTest from "../ui/dashboard/startTest";
import MainCardCourse from "../ui/dashboard/mainCardCourse";
import Image from "next/image";

const Dashboard = () => {
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
                <div className="mt-10 flex flex-col items-center justify-center">
                    <div className="px-2 md:px-10 lg:px-44">
                        <h1 className="text-slate-100 font-mono font-bold text-3xl text-center py-5">
                            Добро пожаловать на страницу обучения!
                        </h1>
                        <p className="text-slate-100 font-mono pt-5">
                            Мы рады приветствовать вас на нашей платформе
                            обучения программированию. Здесь вы найдете
                            множество ресурсов и курсов, которые помогут вам
                            освоить различные языки программирования и
                            технологии.
                        </p>
                        <div className="flex justify-center">
                            <Image
                                src="/educ.png"
                                alt="картинка"
                                width={400}
                                height={400}
                            />
                        </div>

                        <p className="text-slate-100 font-mono pt-5">
                            Наша миссия - делать программирование доступным и
                            увлекательным для всех. Мы предлагаем курсы для
                            начинающих и продвинутых студентов, позволяя каждому
                            найти подходящий уровень обучения.
                        </p>

                        <p className="text-slate-100 font-mono pt-5">
                            Прежде чем начать изучение, мы рекомендуем вам
                            пройти наш тест по выбранному языку
                            программирования. Этот тест поможет определить ваш
                            уровень знаний и выбрать подходящий курс для
                            обучения.
                        </p>
                        <p className="text-slate-100 font-mono pt-5">
                            После прохождения теста вы сможете выбрать курс и
                            приступить к обучению. Не бойтесь ошибаться и
                            задавать вопросы - наша команда всегда готова помочь
                            вам в процессе обучения.
                        </p>
                        <h2 className="text-slate-100 font-mono text-2xl pt-5 text-center">
                            Выберите курс и начните свой путь к освоению
                            программирования прямо сейчас!
                        </h2>
                    </div>
                    <div className="mt-10">
                        <CoursePicker />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
