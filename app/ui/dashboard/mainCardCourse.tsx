import Image from "next/image";

export default function MainCardCourse() {
    return (
        <div className="mt-10 flex flex-col-reverse lg:flex-row px-2 lg:px-10 pb-10 bg-[#292c35] rounded-2xl mx-4">
            <div className="w-full lg:w-4/12 flex flex-col justify-center items-center mt-5">
                <div>
                    <Image
                        src="/courseCard1.png"
                        alt="course"
                        width={300}
                        height={300}
                    />
                </div>
                <div className="mt-5 flex justify-center">
                    <button className="bg-orange-600 text-slate-200 font-mono rounded-lg w-[300px] py-4">
                        Продолжить учиться
                    </button>
                </div>
            </div>
            <div className="lg:ml-10 mt-5 w-full lg:w-8/12">
                <h2 className="text-2xl lg:text-3xl text-slate-100 font-mono font-bold">
                    Основы программирования на C#
                </h2>
                <div className="flex items-center h-[20px] py-5 text-gray-100 text-center">
                    <span className="text-orange-500">Уровень 1</span>
                </div>
                <p className="text-gray-300 text-sm mt-1">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ipsam iure quam architecto ducimus natus officia atque
                    aspernatur autem beatae, minima porro nobis id, sapiente
                    similique! Quod cum eius illo molestias!
                </p>
            </div>
        </div>
    );
}
