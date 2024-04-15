import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Задачи | ProgZona",
    description: `Оттачивайте свои навыки программирования с набором практических задач.
     Наша страница Задачи предоставляет разнообразные упражнения различной сложности для улучшения вашего кодинга
      и понимания ключевых концепций в программировании. Примите вызов, решайте задачи, повышайте свои компетенции
       и продвигайтесь в учебном плане. Подходит для любого уровня знаний.`,
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
