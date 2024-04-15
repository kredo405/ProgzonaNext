import CodeHighlight from "@/app/ui/dashboard/lesson/codeHightLight";
import Image from "next/image";
import { Nav } from "../ui/landing/nav";

const Article = () => {
    return (
        <>
            <Nav />
            <div className="mt-16 px-3 md:px-32 lg:px-44">
                <h1 className="text-3xl font-mono font-bold text-slate-100 text-center pb-10">
                    Изучение алгоритмов: Путь к глубокому пониманию
                    программирования
                </h1>
                <p className="text-slate-200 my-3">
                    Программирование - это не только овладение конкретными
                    языками программирования, но и о понимании основных
                    алгоритмов и структур данных. В этой статье мы рассмотрим,
                    почему изучение алгоритмов является ключевым элементом в
                    формировании навыков программирования и какие выгоды это
                    может принести для вашей карьеры в IT-индустрии.
                </p>
                <h2 className="text-xl font-mono font-bold text-slate-100 text-center">
                    Зачем изучать алгоритмы?
                </h2>
                <p className="text-slate-200 my-3">
                    Изучение алгоритмов позволяет разработчикам научиться решать
                    разнообразные задачи более эффективно и элегантно. Понимание
                    основных алгоритмических концепций помогает в создании
                    оптимизированных и масштабируемых приложений.
                </p>
                <div className="flex justify-center py-5">
                    <Image
                        src="/gif1.gif"
                        alt="article"
                        width={500}
                        height={500}
                        priority
                    />
                </div>
                <h2 className="text-xl font-mono font-bold text-slate-100 text-center">
                    Разработка мышления
                </h2>
                <p className="text-slate-200 my-3">
                    Изучение алгоритмов тренирует ваше мышление. Решение задач
                    на алгоритмы требует анализа проблемы, поиска оптимальных
                    решений и оценки их эффективности. Этот процесс помогает
                    развивать аналитические навыки, которые пригодятся не только
                    в программировании, но и в решении различных повседневных
                    задач.
                </p>
                <h2 className="text-xl font-mono font-bold text-slate-100 text-center">
                    Примеры с кодом
                </h2>
                <p className="text-slate-200 my-3">
                    Давайте рассмотрим несколько примеров алгоритмов на языке
                    Python:
                </p>
                <h3 className="text-lg font-mono font-bold text-slate-100">
                    1. Алгоритм сортировки пузырьком:
                </h3>
                <div className="py-2">
                    <CodeHighlight
                        code={`def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]

# Пример использования
arr = [64, 34, 25, 12, 22, 11, 90]
bubble_sort(arr)
print("Отсортированный массив:")
for i in range(len(arr)):
    print("%d" % arr[i], end=" ")
`}
                    />
                </div>
                <h3 className="text-lg font-mono font-bold text-slate-100">
                    2. Бинарный поиск в отсортированном массиве:
                </h3>
                <div className="py-2">
                    <CodeHighlight
                        code={`def binary_search(arr, x):
    low = 0
    high = len(arr) - 1
    mid = 0

    while low <= high:
        mid = (high + low) // 2
        if arr[mid] < x:
            low = mid + 1
        elif arr[mid] > x:
            high = mid - 1
        else:
            return mid

    return -1

# Пример использования
arr = [2, 3, 4, 10, 40]
x = 10
result = binary_search(arr, x)
if result != -1:
    print("Элемент найден в индексе", str(result))
else:
    print("Элемент не найден")

`}
                    />
                </div>
                <h2 className="text-xl font-mono font-bold text-slate-100 text-center">
                    Заключение
                </h2>
                <p className="text-slate-200 my-3">
                    Изучение алгоритмов играет важную роль в формировании
                    профессиональных навыков программиста. Это не только
                    улучшает вашу квалификацию, но и открывает новые возможности
                    для карьерного роста в сфере информационных технологий.
                    Поэтому не откладывайте, приступайте к изучению алгоритмов
                    уже сегодня и станьте настоящим мастером программирования!
                </p>
            </div>
        </>
    );
};

export default Article;
