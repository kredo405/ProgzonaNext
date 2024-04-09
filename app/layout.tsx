import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Главная",
    description:
        "Изучите программирование с нуля на нашем образовательном портале. Мы предлагаем курсы по различным языкам программирования, включая C#, JavaScript, TypeScript и многие другие. Наши курсы разработаны так, чтобы быть доступными для всех, независимо от уровня знаний. Присоединяйтесь к нам и начните свое путешествие в мир программирования сегодня!",
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
