import { Nav } from "../ui/landing/nav";

const EducationLanding = () => {
    return (
        <>
            <Nav />
            <div>
                <h1 className=" flex font-mono text-3xl md:text-5xl text-slate-100 text-center px-3 py-3 font-bold">
                    Как
                    <span className="text-orange-500"> проходит </span>
                    обучение
                </h1>
            </div>
        </>
    );
};

export default EducationLanding;
