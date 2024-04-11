import Link from "next/link";
import Image from "next/image";

interface CourseCardProps {
    img: string;
    title: string;
    desc: string;
    level: string;
    access: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({
    img,
    title,
    desc,
    level,
    access,
}) => {
    return (
        <article
            className="w-full md:w-64 lg:w-80 mx-3 mt-3 shadow-lg  rounded-md duration-300 hover:bg-gray-900 bg-gray-800" // Dynamic height
        >
            <Link href="/dashboard/lesson">
                <div className="flex flex-col justify-between">
                    <div className="relative">
                        <Image
                            src={img}
                            alt={title}
                            className="rounded-t-md pb-4" // Add padding for content below
                            layout="responsive"
                            width={300}
                            height={200}
                        />
                    </div>
                    <div className="px-2 flex flex-col justify-between h-full">
                        <div className="flex items-center justify-center h-[20px] py-5 text-gray-100 text-center">
                            <span className="text-orange-500 px-3">
                                {level}
                            </span>
                        </div>
                        <div className="h-[150px]">
                            <h3 className="text-md text-gray-100 text-center">
                                {title}
                            </h3>
                            <p className="text-gray-300 text-sm mt-1">{desc}</p>
                        </div>
                        <div className="flex justify-center items-center w-full h-[70px]">
                            <span
                                className={
                                    access ? "text-green-500" : "text-red-500"
                                }
                            >
                                {access ? "Доступен" : "Не доступен"}
                            </span>
                        </div>
                    </div>
                </div>
            </Link>
        </article>
    );
};

export default CourseCard;
