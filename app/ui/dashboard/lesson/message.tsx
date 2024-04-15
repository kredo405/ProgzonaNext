import Image from "next/image";

const Message = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-[#31343b] mt-5 rounded-lg">
            <div className="flex flex-col">
                <div className="flex items-center text-sm">
                    <div className="px-2 md:px-3 py-2 md:py-3 flex justify-center md:items-center">
                        <Image
                            className="rounded-full"
                            src="/avatar.jpg"
                            alt="avatar"
                            width={50}
                            height={50}
                        />
                    </div>
                    <h5 className="font-mono font-semibold px-2 py-2 text-slate-300">
                        Александр
                    </h5>
                    <span className="px-2 text-slate-400">14.04.2024</span>
                </div>
                <p className="text-slate-300 px-2 md:pl-5 py-2 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure atque, repudiandae, quaerat tenetur voluptatum corrupti
                    sapiente vero exercitationem dicta commodi recusandae
                    impedit eveniet, deserunt est voluptatem qui laborum.
                    Corporis, aliquid.
                </p>
                <div className="md:pl-5">
                    <button className="py-2 px-2 text-orange-600 hover:text-orange-700 text-sm">
                        Ответить
                    </button>
                    <button className="py-2 px-2 text-sky-600 hover:text-sky-700 text-sm">
                        Изменить
                    </button>
                    <button className="py-2 px-2 text-red-600 hover:text-red-700 text-sm">
                        Удалить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Message;
