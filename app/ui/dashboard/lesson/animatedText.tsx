import React, { useEffect, useState } from "react";

interface AnimatedTextProps {
    text: string;
    buttons: string[];
    onButtonClick: (buttonText: string) => void;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
    text,
    buttons,
    onButtonClick,
}) => {
    const [visibleText, setVisibleText] = useState<string>("");
    const [counter, setCounter] = useState<number>(0);
    const [animationComplete, setAnimationComplete] = useState<boolean>(false);

    useEffect(() => {
        setCounter(0); // Сбрасываем счетчик при изменении текста
        setVisibleText("");
        setAnimationComplete(false); // Сбрасываем видимый текст при изменении текста
    }, [text]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (counter < text.length) {
                setVisibleText((prevText) => prevText + text[counter]);
                setCounter((prevCounter) => prevCounter + 1);
            } else {
                clearInterval(intervalId);
                setAnimationComplete(true); // Устанавливаем состояние завершения анимации текста
            }
        }, 20);

        return () => clearInterval(intervalId);
    }, [text, counter]);

    return (
        <div
            className="text-slate-200 font-mono antialiased leading-6 md:px-32"
            id="animatedText"
        >
            {visibleText}
            <div className="mt-10 flex flex-col items-center justify-center">
                {animationComplete && // Показываем кнопки только после завершения анимации текста
                    buttons.map((buttonText, index) => (
                        <button
                            className="hover:bg-orange-600 w-full md:w-[400px] border-2 border-orange-600 border-solid hover:text-slate-200 font-mono px-5 py-3 rounded-lg text-orange-500 m-3 md:mx-10"
                            key={index}
                            onClick={() => onButtonClick(buttonText)}
                        >
                            {buttonText}
                        </button>
                    ))}
            </div>
        </div>
    );
};

export default AnimatedText;
