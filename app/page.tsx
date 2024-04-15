import Image from "next/image";
import Link from "next/link";
import { Header } from "./ui/landing/header";
import { InfoBlock } from "./ui/landing/infoBlock";
import { Nav } from "./ui/landing/nav";

export default function Home() {
    return (
        <>
            <Nav />
            <Header />
            <InfoBlock
                title="Как происходит обучение?"
                paragraphFirst="Наши методы обучения разработаны таким образом, чтобы вы могли эффективно освоить материал
        и применить полученные знания на практике. Давайте рассмотрим, как будет проходить ваше
        обучение."
                paragraphSecond="После регистрации каждому студенту будет предоставлен личный кабинет, где вы сможете настроить свой профиль и выбрать подходящий курс. Наша платформа предлагает обучение на основе проверенных практикой методик, актуальных индустриальных стандартов и лучших практик в веб-разработке. Вы будете изучать темы, основанные на нашем опыте и экспертизе, а затем применять полученные знания, решая практические задачи в нашем онлайн тренажере."
                isRight={true}
                image="/ph1.png"
            />
            <InfoBlock
                title="Обучение в ProgZona – это удобно и результативно"
                paragraphFirst="Мы верим в доступность образования, поэтому все курсы предоставляются абсолютно бесплатно. Вы сможете ознакомиться с основными понятиями и технологиями без каких-либо ограничений."
                paragraphSecond="Мы стремимся создать индивидуальный подход к каждому студенту, поэтому ваш прогресс будет отслеживаться в личном кабинете. Вы сможете видеть свои достижения, оценку вашего прогресса по каждому курсу и отслеживать свое развитие в области программирования."
                isRight={false}
                image="/ph2.png"
            />
            <div className="w-full">{/* <SliderMain /> */}</div>

            <div className="rounded-xl border-2 border-gray-800 mx-5 bg-[#292c35] mt-10">
                <h2 className="font-mono text-3xl text-slate-100 text-center px-2 sm:px-10 py-3 font-bold mt-5 underline decoration-2 decoration-orange-600 underline-offset-8">
                    Присоединяйтесь к нашей школе программирования и начните
                    свой путь к успешной карьере в IT уже сегодня!
                </h2>

                <div className="flex flex-col lg:flex-row justify-center mt-10 py-10">
                    <Link
                        href="/auth"
                        className="py-3 mb-5 text-center font-mono lg:mb-0 w-full lg:w-56 px-auto mr-10 border-2 border-orange-600 border-solid hover:bg-orange-600 text-orange-500  hover:text-slate-100 text-xl rounded-lg "
                    >
                        Вход
                    </Link>
                    <Link
                        href="/registration"
                        className="py-3 px-auto text-center font-mono w-full lg:w-56 hover:bg-sky-600 hover:text-slate-100 text-xl rounded-lg border-solid border-2 border-sky-600 text-sky-600"
                    >
                        Регистрация
                    </Link>
                </div>
            </div>
        </>
    );
}
