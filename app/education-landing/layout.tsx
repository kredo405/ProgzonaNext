import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Обучение",
    description: `Изучайте программирование на JavaScript и C# с нами! Наша платформа предлагает обширные курсы по веб-разработке,
     игровому программированию, а также приложениям на .NET. Начните свой путь в мире программирования с нашими курсами, подходящими
      для всех уровней навыков - от начинающих до опытных разработчиков.`,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
