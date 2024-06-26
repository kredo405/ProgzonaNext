"use client";

import { useAppSelector, useAppDispatch, useAppStore } from "@/lib/hooks";
import { setShow } from "@/lib/store/slices/verticalMenuSlice";
import TopicsBar from "@/app/ui/dashboard/lesson/topicsBar";
import CodeHighlight from "@/app/ui/dashboard/lesson/codeHightLight";
import EditorCode from "@/app/ui/dashboard/lesson/editorCode";
import Discusions from "@/app/ui/dashboard/lesson/discusions";
import DialogLeson from "@/app/ui/dashboard/lesson/dialogLesson";
import DidYouKnow from "@/app/ui/dashboard/lesson/didYouKnow";
import NextLessonButton from "@/app/ui/dashboard/lesson/nextLessonButton";
import Image from "next/image";

const Lesson = () => {
    const store = useAppStore();
    const dispatch = useAppDispatch();
    const state = useAppSelector((state) => state.lessonSlice);

    const task = {
        task: "Напишите программу, которая приветствует пользователя",
        description:
            "Вам необходимо создать программу, которая приветствует пользователя в зависимости от его возраста. Если пользователь младше 18 лет, программа должна выводить сообщение 'Привет, ребенок!', а если пользователь 18 лет или старше, то сообщение должно быть 'Привет, взрослый!'.",
    };

    return (
        <>
            <div
                className="w-full px-2 md:pl-[85px] py-6"
                onClick={() => dispatch(setShow(false))}
            >
                <div className="mt-14">
                    <div className="flex">
                        <div className=" z-30">
                            <TopicsBar />
                        </div>
                        <div className="w-full px-2 z-0">
                            {state.finishDialog ? (
                                <>
                                    <div className="mt-10 z-10">
                                        <div className="flex justify-center  py-5">
                                            <h2 className="text-slate-100 text-4xl text-center font-mono font-bold border-b-2 border-orange-600 py-3 px-5 border-solid">
                                                История C#:
                                            </h2>
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="text-slate-300 px-2 lg:px-32">
                                                <p className="font-mono py-2">
                                                    Язык программирования C# был
                                                    разработан инженерами
                                                    компании Microsoft в период
                                                    с 1998 по 2001 год. Группу
                                                    разработчиков руководил
                                                    Андерс Хейлсберг, который до
                                                    этого занимался созданием
                                                    компилятора для языка Pascal
                                                    в фирме Borland и участвовал
                                                    в разработке интегрированной
                                                    среды разработки Delphi.
                                                    Появление языка C# произошло
                                                    после языков
                                                    программирования C++ и Java,
                                                    причем разработчики C# учли
                                                    богатый опыт использования
                                                    этих языков.
                                                </p>
                                                <div className="flex justify-center py-5">
                                                    <Image
                                                        src="/gif.gif"
                                                        alt="gif"
                                                        width={400}
                                                        height={200}
                                                    />
                                                </div>
                                                <p className="font-mono py-2">
                                                    Для понимания роли и места
                                                    языка C# на современном
                                                    рынке программных технологий
                                                    полезно начать с изучения
                                                    языка программирования C,
                                                    который в свое время сыграл
                                                    значительную роль в развитии
                                                    программных технологий.
                                                    Обычно генеалогию языка C#
                                                    выводят из языка C, и мы
                                                    тоже придерживаемся этого
                                                    подхода.
                                                </p>

                                                <p className="font-mono py-2">
                                                    Язык программирования C
                                                    появился в 1972 году и был
                                                    разработан Денисом Ритчи.
                                                    Постепенно язык C приобретал
                                                    популярность и стал одним из
                                                    самых востребованных языков
                                                    программирования благодаря
                                                    своему лаконичному и
                                                    простому синтаксису, а также
                                                    благодаря своей удачной и
                                                    живучей концепции. Поэтому
                                                    при создании нового языка,
                                                    который поддерживал бы
                                                    парадигму
                                                    объектно-ориентированного
                                                    программирования (ООП),
                                                    выбор естественным образом
                                                    пал на язык C. Язык
                                                    программирования C++,
                                                    появившийся в 1983 году, был
                                                    расширенной версией языка C,
                                                    адаптированной для написания
                                                    программ с использованием
                                                    классов, объектов и
                                                    сопутствующих технологий.
                                                    При создании языка
                                                    программирования Java также
                                                    использовался язык C++ как
                                                    отправная точка. Идеология
                                                    языка Java отличается от
                                                    идеологии языка C++, однако
                                                    базовые управляющие
                                                    инструкции и операторы в
                                                    обоих языках схожи.
                                                </p>
                                                <div className="flex justify-center py-5">
                                                    <Image
                                                        src="/gif1.gif"
                                                        alt="gif"
                                                        width={400}
                                                        height={400}
                                                    />
                                                </div>
                                                <p className="font-mono py-2">
                                                    Неудивительно, что при
                                                    разработке языка
                                                    программирования C# была
                                                    сохранена традиция: во
                                                    многих аспектах его
                                                    синтаксис будет знаком тем,
                                                    кто уже имеет опыт
                                                    программирования на C++ и
                                                    Java. Однако, это лишь
                                                    внешнее сходство. Сам язык
                                                    C# существенно отличается от
                                                    своих предшественников,
                                                    поэтому не следует
                                                    расслабляться. Базовые
                                                    синтаксические конструкции в
                                                    C# имеют свои собственные
                                                    особенности, которые важно
                                                    учитывать.
                                                </p>
                                                <DidYouKnow text="C# поддерживает концепцию “LINQ” (Language Integrated Query), которая добавляет мощные возможности запросов к языку. LINQ позволяет разработчикам писать запросы прямо в C#, что упрощает работу с коллекциями данных. Это одна из особенностей C#, которая отличает его от многих других языков программирования." />
                                                <div className="flex justify-center mt-5">
                                                    <h4 className="text-slate-200 text-xl font-semibold">
                                                        Особенности языка С#
                                                    </h4>
                                                </div>
                                                <p className="font-mono py-2">
                                                    Язык программирования C#
                                                    обладает рядом преимуществ:
                                                    он прост в использовании,
                                                    эстетичен, эффективен и
                                                    гибок. С помощью программ на
                                                    C# можно решать различные
                                                    задачи, начиная от небольших
                                                    консольных приложений и
                                                    заканчивая программами с
                                                    графическим интерфейсом. Код
                                                    на C# обычно лаконичен и
                                                    понятен (хотя многое зависит
                                                    от навыков программиста),
                                                    что делает его особенно
                                                    привлекательным. В этом
                                                    отношении C# практически не
                                                    имеет конкурентов.
                                                </p>
                                                <p className="font-mono py-2">
                                                    Кроме того, важно отметить,
                                                    что C# поддерживается
                                                    компанией Microsoft, что
                                                    делает его идеальным выбором
                                                    для разработки программ под
                                                    управлением операционной
                                                    системы Windows. Он также
                                                    является ключевой частью
                                                    технологии .NET Framework,
                                                    которая включает в себя
                                                    среду исполнения CLR (Common
                                                    Language Runtime) и
                                                    библиотеку классов,
                                                    используемую при
                                                    программировании на C#.
                                                </p>
                                                <p className="font-mono py-2">
                                                    При компиляции программного
                                                    кода на языке C# создается
                                                    промежуточный код, который
                                                    реализован на языке MSIL
                                                    (Microsoft Intermediate
                                                    Language). Этот
                                                    промежуточный код
                                                    выполняется с помощью
                                                    системы CLR (Common Language
                                                    Runtime). CLR запускает
                                                    JIT-компилятор (Just In
                                                    Time), который переводит
                                                    промежуточный код в
                                                    исполняемые инструкции.
                                                </p>
                                                <p className="font-mono py-2">
                                                    Такая сложная схема
                                                    компиляции программ с
                                                    использованием
                                                    промежуточного кода имеет
                                                    важное значение. Технология
                                                    .NET Framework направлена на
                                                    совместное использование
                                                    программных кодов,
                                                    написанных на разных языках
                                                    программирования. Это
                                                    достигается за счет того,
                                                    что программные коды на
                                                    различных языках переводятся
                                                    в промежуточный код на общем
                                                    универсальном языке, то есть
                                                    языке MSIL. Весь этот
                                                    процесс представляет интерес
                                                    с познавательной точки
                                                    зрения, однако более важными
                                                    являются особенности самого
                                                    языка C#.
                                                </p>
                                                <p className="font-mono py-2">
                                                    Прежде всего, следует
                                                    отметить, что язык C#
                                                    полностью
                                                    объектно-ориентированный.
                                                    Это означает, что даже самая
                                                    маленькая программа на C#
                                                    должна содержать описание
                                                    хотя бы одного класса.
                                                </p>
                                                <div className="flex justify-center py-5">
                                                    <Image
                                                        src="/Dmyf.gif"
                                                        alt="gif"
                                                        width={400}
                                                        height={400}
                                                    />
                                                </div>
                                                <p className="font-mono py-2">
                                                    Есть в языке С# и
                                                    классические механизмы,
                                                    характерные для большинства
                                                    языков, поддерживающих
                                                    парадигму ООП. Мы
                                                    познакомимся с тем, как на
                                                    основе классов и объектов в
                                                    языке С# реализуется
                                                    инкапсуляция, узнаем, что
                                                    такое наследование и как в
                                                    С# используется полиморфизм.
                                                    Будет много других тем и
                                                    вопросов, которые мы изучим.
                                                    Например, мы узнаем (во
                                                    второй части книги), как в
                                                    С# создаются приложения с
                                                    графическим интерфейсом, и
                                                    познакомимся с основными
                                                    подходами, используемыми при
                                                    создании многопоточных
                                                    приложений. Но обо всем этом
                                                    - по порядку, тема за темой.
                                                </p>
                                                <div className="px-2 lg:px-56">
                                                    <CodeHighlight
                                                        code={`Console.WriteLine("Hello. My name is Aleksandr.");`}
                                                    />
                                                </div>
                                                <div>
                                                    <div className="flex justify-center py-5">
                                                        <h2 className="text-slate-100 text-4xl font-mono font-bold border-b-2 border-orange-600 py-3 px-5 border-solid">
                                                            Задание
                                                        </h2>
                                                    </div>
                                                </div>
                                                <div className="flex justify-center mt-5">
                                                    <EditorCode
                                                        task={task.task}
                                                        description={
                                                            task.description
                                                        }
                                                    />
                                                </div>

                                                <div className="flex justify-end py-10">
                                                    <NextLessonButton />
                                                </div>
                                            </div>
                                        </div>
                                        <Discusions />
                                    </div>
                                </>
                            ) : (
                                <DialogLeson />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Lesson;
