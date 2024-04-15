import { Tag } from "antd";
import Link from "next/link";

export default function Task() {
    return (
        // <div className="w-[400px] bg-[#2a2e3b] rounded-2xl flex flex-col items-center h-[40vh] border-2 border-solid border-slate-800">
        //     <div className="flex justify-araound ">
        //         <svg
        //             xmlns="http://www.w3.org/2000/svg"
        //             viewBox="0 0 24 24"
        //             fill="currentColor"
        //             className="w-10 h-10 text-orange-500"
        //         >
        //             <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
        //             <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
        //             <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
        //         </svg>
        //         <div className="flex flex-col px-8">
        //             <h3 className="text-xl text-slate-300 font-bold">
        //                 Напишите программу
        //             </h3>
        //             <span className="text-slate-300 text-xs">
        //                 Уровень: <span className="text-orange-600">Легко</span>
        //             </span>
        //             <div>
        //                 <span className="text-slate-300 text-xs">
        //                     Язык:{" "}
        //                     <span className="text-orange-600 text-xs">
        //                         JavaScript
        //                     </span>{" "}
        //                 </span>
        //                 <span className="text-orange-600 text-xs">
        //                     Не решено
        //                 </span>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="w-64 p-4 py-6 bg-[#2a2e3b] hover:bg-[#31374c] cursor-pointer shadow-lg rounded-2xl ">
            <Link
                href="/dashboard/task"
                className="flex flex-col items-center justify-center"
            >
                <div className="relative w-16 h-16 bg-emerald-500 rounded-full flex justify-center items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-14 h-14 text-orange-500"
                    >
                        <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                        <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                        <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
                    </svg>
                </div>
                <p className="mt-4 mb-4 text-lg font-medium text-slate-200 text-center">
                    Напишите программу
                </p>
                <p className="px-2 text-xs text-center text-slate-300">
                    Напишите программу на JavaScript Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Similique, nihil!
                </p>
                <div className="mt-6 flex justify-around">
                    <Tag color="#f50">JavaScript</Tag>
                    <Tag color="#2db7f5">Легко</Tag>
                    <Tag color="#87d068">Не решена</Tag>
                </div>
            </Link>
        </div>
    );
}
