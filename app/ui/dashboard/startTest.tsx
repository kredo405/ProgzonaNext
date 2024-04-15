"use client";

import { useState } from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import { useAppSelector, useAppDispatch, useAppStore } from "@/lib/hooks";
import { setFinishTest } from "@/lib/store/slices/educationSlice";
import { setUserLevel } from "@/lib/store/slices/educationSlice";

interface Question {
    id: number;
    question: string;
    options: string[];
    correctAnswer: string;
}

export default function StartTest() {
    // Состояние для хранения ответов на вопросы
    const [answers, setAnswers] = useState<{ [key: number]: string }>({});
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [questions, setQuestions] = useState<Question[]>([]);
    const [finished, setFinished] = useState<boolean>(false);
    const [percentCorrectAnswers, setPercentCorrectAnswers] =
        useState<number>(0);

    const dispatch = useAppDispatch();
    const state = useAppSelector((state) => state.education);

    const questionsJs: Question[] = useMemo(
        () => [
            {
                id: 1,
                question: "Как объявить переменную в JavaScript?",
                options: [
                    "let varName = value;",
                    "variable varName = value;",
                    "var varName = value;",
                ],
                correctAnswer: "var varName = value;",
            },
            {
                id: 2,
                question: "Что такое JSX?",
                options: [
                    "JavaScript XML",
                    "JavaScript Framework",
                    "JavaScript Extension",
                ],
                correctAnswer: "JavaScript XML",
            },
            {
                id: 3,
                question: "Что такое замыкание (closure) в JavaScript?",
                options: [
                    "Это способность функции запоминать свое окружение во время определения.",
                    "Это способность функции изменять глобальные переменные.",
                    "Это способность функции создавать новые объекты.",
                ],
                correctAnswer:
                    "Это способность функции запоминать свое окружение во время определения.",
            },
            {
                id: 4,
                question: "Что такое прототип в JavaScript?",
                options: [
                    "Это метод объекта.",
                    "Это свойство объекта.",
                    "Это объект, на который ссылается другой объект для наследования свойств.",
                ],
                correctAnswer:
                    "Это объект, на который ссылается другой объект для наследования свойств.",
            },
            // Добавьте остальные вопросы здесь
        ],
        []
    );

    const questionsCsharp: Question[] = useMemo(
        () => [
            {
                id: 1,
                question: "Что такое класс в C#?",
                options: [
                    "Это функция для создания объектов.",
                    "Это структура данных для хранения информации.",
                    "Это шаблон для создания объектов с определенными свойствами и методами.",
                ],
                correctAnswer:
                    "Это шаблон для создания объектов с определенными свойствами и методами.",
            },
            {
                id: 2,
                question: "Что такое пространство имен (namespace) в C#?",
                options: [
                    "Это место, где хранятся исходные файлы программы.",
                    "Это специальная область памяти для хранения переменных.",
                    "Это логическая группировка классов и других типов данных.",
                ],
                correctAnswer:
                    "Это логическая группировка классов и других типов данных.",
            },
            {
                id: 3,
                question: "Как объявить переменную в C#?",
                options: [
                    "int variableName = value;",
                    "variable variableName = value;",
                    "var variableName = value;",
                ],
                correctAnswer: "int variableName = value;",
            },
            {
                id: 4,
                question: "Что такое конструктор класса в C#?",
                options: [
                    "Это метод, который возвращает значение.",
                    "Это метод, который вызывается при создании объекта класса.",
                    "Это метод, который используется для удаления объекта из памяти.",
                ],
                correctAnswer:
                    "Это метод, который вызывается при создании объекта класса.",
            },
            {
                id: 5,
                question: "Что такое ключевое слово 'this' в C#?",
                options: [
                    "Это ключевое слово для создания нового объекта.",
                    "Это ключевое слово для обращения к текущему объекту.",
                    "Это ключевое слово для определения условия.",
                ],
                correctAnswer:
                    "Это ключевое слово для обращения к текущему объекту.",
            },
            // Добавьте остальные вопросы здесь
        ],
        []
    );

    const handleAnswer = (answer: string) => {
        const updatedAnswers = { ...answers, [currentQuestion]: answer };
        setAnswers(updatedAnswers);

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            // Подсчет процента правильных ответов
            const correctCount = Object.values(updatedAnswers).reduce(
                (count, currentAnswer, index) => {
                    return currentAnswer === questions[index].correctAnswer
                        ? count + 1
                        : count;
                },
                0
            );
            const percentCorrect = (correctCount / questions.length) * 100;

            console.log("Тест завершен.");
            console.log("Правильных ответов:", correctCount);
            console.log(
                "Процент правильных ответов:",
                percentCorrect.toFixed(2) + "%"
            );
            setPercentCorrectAnswers(percentCorrect);
            setFinished(true);
        }
    };

    useEffect(() => {
        if (state.courseId === 1) {
            setQuestions(questionsJs);
        } else if (state.courseId === 2) {
            setQuestions(questionsCsharp);
        }
    }, [state.courseId, questionsJs, questionsCsharp]);

    return (
        <div className="mt-16 ">
            {finished ? (
                <div className="flex flex-col justify-center items-center px-2 md:px-10 lg:px-44">
                    <h1 className="text-orange-600 font-mono font-bold text-xl lg:text-3xl py-5">
                        Тест завершен
                    </h1>
                    <p className="text-slate-100 font-mono py-5">
                        Правильных ответов:{" "}
                        <span className="text-orange-600">
                            {percentCorrectAnswers.toFixed(0)}%
                        </span>
                    </p>
                    {percentCorrectAnswers >= 70 ? (
                        <p className="text-slate-100 font-mono">
                            Отлично справились! Ваш уровень знаний позволяет вам
                            получить доступ ко всем нашим курсам. Теперь вы
                            можете выбрать те области, которые вас интересуют, и
                            начать изучение ваших любимых технологий.
                        </p>
                    ) : (
                        <p className="text-slate-100 font-mono">
                            Вам еще есть над чем поработать, не переживайте! В
                            данный момент доступен курс по основам, который
                            поможет вам закрепить базовые знания и подготовиться
                            к более продвинутым темам. Не стесняйтесь обращаться
                            к нашим курсам и ресурсам для дальнейшего обучения.
                            Регулярная практика и изучение новых концепций
                            помогут вам достичь успеха в программировании.
                        </p>
                    )}

                    <div className="flex justify-center">
                        <button
                            onClick={() => {
                                dispatch(setFinishTest(true));
                                dispatch(
                                    setUserLevel(
                                        percentCorrectAnswers >= 70
                                            ? "опытный"
                                            : "новичок"
                                    )
                                );
                            }}
                            className="px-10 py-3 hover:bg-orange-600 hover:text-slate-200 text-orange-500 border-solid border-2 border-orange-600 font-mono rounded-lg mt-5"
                        >
                            Перейти к курсам
                        </button>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col justify-center items-center px-2 md:px-10 lg:px-44">
                    <h1 className="text-slate-100 font-mono font-bold text-xl lg:text-3xl">
                        {state.courseId === 1
                            ? "Тест по JavaScript"
                            : "Тест по C#"}
                    </h1>
                    <p className="text-slate-100 font-mono">
                        Вопрос {currentQuestion + 1} из {questions.length}
                    </p>
                    {questions[currentQuestion] && (
                        <p className="text-slate-100 font-mono text-center">
                            {questions[currentQuestion].question}
                        </p>
                    )}
                    {questions[currentQuestion] && (
                        <ul>
                            {questions[currentQuestion].options.map(
                                (option, index) => (
                                    <li key={index}>
                                        <button
                                            className="hover:text-slate-200 font-mono w-full lg:w-96 px-2 py-2 border-2 border-orange-600 text-orange-500 hover:bg-orange-600 text-center my-3 rounded-xl "
                                            onClick={() => handleAnswer(option)}
                                        >
                                            {option}
                                        </button>
                                    </li>
                                )
                            )}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
}
