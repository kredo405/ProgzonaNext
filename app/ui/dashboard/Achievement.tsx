import React from "react";
import Image from "next/image";

interface AchievementProps {
    image: string;
    title: string;
    desc: string;
}

const Achievement: React.FC<AchievementProps> = ({ image, title, desc }) => {
    return (
        <div className="flex p-4 w-[400px] hover:bg-[#33394c] rounded-xl">
            <div className="w-5/12 flex justify-center items-center">
                <Image
                    className="w-[100px] h-[100px] border-2 border-solid border-green-400 rounded-full"
                    src={image}
                    alt="достижение"
                    width={100}
                    height={100}
                />
            </div>
            <div className="flex flex-col px-3 w-7/12">
                <h2 className="text-3xl font-bold font-mono text-orange-500">
                    {title}
                </h2>
                <p className="text-slate-300 mt-5 font-mono">{desc}</p>
            </div>
        </div>
    );
};

export default Achievement;
