import Image from "next/image";

const Message = () => {
    return (
        <div className="flex justify-between items-start md:items-center bg-[#31343b] mt-5 rounded-lg">
            <div className="px-2 md:px-3 py-2 md:py-3 flex justify-center md:items-center">
                <Image
                    className="rounded-full"
                    src="/avatar.jpg"
                    alt="avatar"
                    width={100}
                    height={100}
                />
            </div>
            <div className="flex flex-col">
                <h5 className="font-mono font-semibold px-2 py-2 text-slate-100">
                    Александр
                </h5>
                <p className="font-mono text-slate-200 px-2 py-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure atque, repudiandae, quaerat tenetur voluptatum corrupti
                    sapiente vero exercitationem dicta commodi recusandae
                    impedit eveniet, deserunt est voluptatem qui laborum.
                    Corporis, aliquid.
                </p>
            </div>
        </div>
    );
};

export default Message;
