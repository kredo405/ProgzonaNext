import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Панель управления | ProgZona",
    description: `Добро пожаловать в панель управления! Получите полный контроль над вашим проектом с помощью нашей интуитивно понятной панели управления.
         Отслеживайте ключевые метрики, управляйте пользователями, настраивайте настройки и многое другое - все это доступно в нашей мощной 
         и удобной панели управления.`,
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
