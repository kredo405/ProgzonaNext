"use client";

import Image from "next/image";
import Link from "next/link";

const posts = [
    {
        id: 1,
        title: "Boost your conversion rate",
        href: "#",
        description:
            "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
        date: "Mar 16, 2020",
        datetime: "2020-03-16",
        category: { title: "Marketing", href: "#" },
        author: {
            name: "Michael Foster",
            role: "Co-Founder / CTO",
            href: "#",
            imageUrl:
                "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
    },
];

export default function BlogCard() {
    return (
        <Link
            href="/dashboard/article"
            className="w-full lg:w-5/12 mx-auto lg:mx-0 bg-[#2a2e3a] hover:bg-[#212633] cursor-pointer rounded-2xl p-4 flex flex-col"
        >
            <div>
                <span className="text-slate-300">10.04.2024</span>
            </div>
            <h1 className="text-xl md:text-3xl text-slate-100 font-bold">
                Основные инструменты и шаги для начинающих
            </h1>
            <div>
                <p className="text-slate-200 py-3">
                    В этой статье мы рассмотрим основные аспекты веб-разработки
                    для тех, кто только начинает свой путь в этой области. Мы
                    расскажем о необходимых инструментах, языках
                    программирования и практических шагах, которые помогут вам
                    начать создавать свои первые веб-приложения или сайты.{" "}
                </p>
            </div>
        </Link>
    );
}
