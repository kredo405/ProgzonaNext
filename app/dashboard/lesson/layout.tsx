import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StoreProvider from "@/app/StoreProvider";
import HorizontalMenu from "@/app/ui/dashboard/horizontalMenu";
import VerticalMenu from "@/app/ui/dashboard/verticalMenu";
import "./animate.css";

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
            <StoreProvider>
                <body className={inter.className}>
                    <div className="flex flex-col">
                        <VerticalMenu />
                        <div className="relative z-10">
                            <HorizontalMenu />
                        </div>
                        {children}
                    </div>
                </body>
            </StoreProvider>
        </html>
    );
}
