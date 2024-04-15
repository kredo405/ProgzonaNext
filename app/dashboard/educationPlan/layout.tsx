import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Программа обучения | ProgZona",
    description: `Исследуйте нашу гибкую Программу Обучения, созданную для максимизации вашего потенциала.
     Находите курсы, планируйте учебу и достигайте новых высот в своей карьере с индивидуализированным подходом к образованию.`,
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
