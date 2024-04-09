"use client";

import VerticalMenu from "../ui/dashboard/verticalMenu";
import HorizontalMenu from "../ui/dashboard/horizontalMenu";
import CoursePicker from "../ui/dashboard/сoursePicker";
import CourseCard from "../ui/dashboard/courseCard";
import { useAppSelector, useAppDispatch, useAppStore } from "@/lib/hooks";
import { setShow } from "@/lib/store/slices/verticalMenuSlice";

const Profile = () => {
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
                <div>
                    <div className="mt-16 ">
                        <CoursePicker />
                    </div>
                    <div className="mt-10 border-b-2 border-solid border-slate-700 py-3">
                        <h2 className="text-slate-100 font-mono font-bold text-xl lg:text-3xl px-5">
                            Курс Путешествие в мир C#
                        </h2>
                    </div>
                    <div className="py-5 flex flex-wrap justify-center">
                        <CourseCard
                            img="/courseCard1.png"
                            title="Основы программирования на C#"
                            level="Уровень 1"
                            desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, quam!"
                            access={true}
                        />
                        <CourseCard
                            img="/courseCard1.png"
                            title="Продвинутые темы C#"
                            level="Уровень 2"
                            desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, quam!"
                            access={false}
                        />
                        <CourseCard
                            img="/courseCard1.png"
                            title="Разработка веб-приложений на ASP.NET Core"
                            level="Уровень 3"
                            desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, quam!"
                            access={false}
                        />
                        <CourseCard
                            img="/courseCard1.png"
                            title="Работа с базами данных"
                            level="Уровень 4"
                            desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, quam!"
                            access={false}
                        />
                        <CourseCard
                            img="/courseCard1.png"
                            title="Практика и проектная работа"
                            level="Уровень 5"
                            desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, quam!"
                            access={false}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
