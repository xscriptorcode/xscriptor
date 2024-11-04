import { useState } from 'react'

export default function InteractivePhrase2() {
    const [isVisible1, setIsVisible1] = useState(false)
    const [isVisible2, setIsVisible2] = useState(false)
    const [isVisible3, setIsVisible3] = useState(false)
    const [isVisible4, setIsVisible4] = useState(false)

    return (
        <div className="p-4">
            <style jsx global>{`
                @keyframes draw {
                    to {
                        stroke-dashoffset: 0;
                    }
                }
                .underline-effect {
                    position: relative;
                    cursor: pointer;
                }
                .underline-effect::after {
                    content: '';
                    position: absolute;
                    bottom: -5px;
                    left: 0;
                    height: 4px;
                    width: 100%;
                    background: repeating-linear-gradient(
                        45deg,
                        transparent,
                        transparent 2px,
                        currentColor 2px,
                        currentColor 4px
                    );
                    opacity: 1;
                    transition: opacity 0.3s;
                }
                .underline-effect:hover::after,
                .underline-effect:focus::after {
                    opacity: 0;
                }
                .button-effect {
                    display: inline-block;
                    padding: 0.0001em 0.2em;
                    border: 2px dashed currentColor;
                    border-radius: 9999px;
                    background: none;
                    cursor: pointer;
                    transition: background 0.3s, color 0.3s;
                }
                .button-effect:hover {
                    background: currentColor;
                    color: white;
                }
            `}</style>
            <h1 className="text-2xl md:text-4xl lg:text-5xl leading-normal md:leading-normal lg:leading-normal">
                <span 
                    className="underline-effect text-primary transition-colors duration-300"
                    onClick={() => setIsVisible1(!isVisible1)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setIsVisible1(!isVisible1)}
                >
                    Las palabras
                </span>{" "}
                <span 
                    className={`transition-all duration-300 ${
                        isVisible1 ? 'blur-none' : 'blur-[6px]'
                    }`}
                >
                    son el eco de
                </span>{" "}
                <span 
                    className="button-effect text-primary transition-colors duration-300"
                    onClick={() => setIsVisible2(!isVisible2)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setIsVisible2(!isVisible2)}
                >
                    nuestros pensamientos,
                </span>{" "}
                <span 
                    className={`transition-all duration-300 ${
                        isVisible2 ? 'blur-none' : 'blur-[6px]'
                    }`}
                >
                    y cada frase
                </span>{" "}
                <span 
                    className="underline-effect text-primary transition-colors duration-300"
                    onClick={() => setIsVisible1(!isVisible1)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setIsVisible1(!isVisible1)}
                >
                    escrita
                </span>{" "}
                <span 
                    className={`transition-all duration-300 ${
                        isVisible1 ? 'blur-none' : 'blur-[6px]'
                    }`}
                >
                    es un trazo
                </span>{" "}
                <span 
                    className="button-effect text-primary transition-colors duration-300"
                    onClick={() => setIsVisible2(!isVisible2)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setIsVisible2(!isVisible2)}
                >
                    en el lienzo
                </span>{" "}
                <span 
                    className={`transition-all duration-300 ${
                        isVisible2 ? 'blur-none' : 'blur-[6px]'
                    }`}
                >
                    de nuestras almas.
                </span>
                <br />
                <span 
                    className="underline-effect text-primary transition-colors duration-300"
                    onClick={() => setIsVisible3(!isVisible3)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setIsVisible3(!isVisible3)}
                >
                    Las pinturas
                </span>{" "}
                <span 
                    className={`transition-all duration-300 ${
                        isVisible3 ? 'blur-none' : 'blur-[6px]'
                    }`}
                >
                    son los silencios
                </span>{" "}
                <span 
                    className="button-effect text-primary transition-colors duration-300"
                    onClick={() => setIsVisible4(!isVisible4)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setIsVisible4(!isVisible4)}
                >
                    llenos de color,
                </span>{" "}
                <span 
                    className={`transition-all duration-300 ${
                        isVisible4 ? 'blur-none' : 'blur-[6px]'
                    }`}
                >
                    donde el corazón
                </span>{" "}
                <span 
                    className="underline-effect text-primary transition-colors duration-300"
                    onClick={() => setIsVisible3(!isVisible3)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setIsVisible3(!isVisible3)}
                >
                    expresa lo que
                </span>{" "}
                <span 
                    className={`transition-all duration-300 ${
                        isVisible3 ? 'blur-none' : 'blur-[6px]'
                    }`}
                >
                    las palabras no pueden
                </span>{" "}
                <span 
                    className="button-effect text-primary transition-colors duration-300"
                    onClick={() => setIsVisible4(!isVisible4)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setIsVisible4(!isVisible4)}
                >
                    explicar.
                </span>
            </h1>
        </div>
    )
}
