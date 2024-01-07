import React from 'react';
import cn from 'classnames';

type Item = {
    name: string;
    active: boolean;
};

type Props = {
    items: Item[];
    progress: number;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const HorizontalStepper: React.FC<Props> = ({ items, progress, onClick = () => { } }: Props) => {
    const totalItems = items.length;
    const itemWidth = totalItems > 0 ? 100 / totalItems : 100;

    return (
        <div className="relative">
            <div className="h-100 items-center">
                <div className="">
                    <div className="relative w-full">
                        <span className="h-0.5 w-full absolute top-1.5 bg-gray-light4 overflow-hidden transition-all duration-250 ease-out">
                            <span
                                className="line absolute top-0 left-0 w-full h-full bg-black transition-all duration-250 ease-out"
                                style={{
                                    transform: `translate(-${progress * 100}%, 0%)`,
                                    willChange: "transform",
                                }}
                            ></span>
                        </span>
                        <ul className="flex flex-row justify-between justify-evenly relative h-fit">
                            {items.map((item, idx) => (
                                <li
                                    key={idx}
                                    style={{ width: `${itemWidth}%` }}
                                    className='relative w-full'
                                >
                                    <button
                                        data-link={`#${item.name}`}
                                        onClick={onClick}
                                        className='absolute top-0'
                                    >
                                        <span
                                            className={cn(
                                                "flex items-center align-items-center text-left text-xs transition-all duration-250 ease-out gap-1",
                                                {
                                                    "flex-col": idx % 2 === 0,
                                                },
                                                {
                                                    "flex-col-reverse mt-[-1.5em]": idx % 2 !== 0,
                                                }
                                            )}
                                        >
                                            <span
                                                className={cn(
                                                    "rounded-[50%] block h-3 w-3 transition-all ring-2 ring-white duration-250 ease-out overflow-show",
                                                    {
                                                        "bg-white border-2 border-gray-light4": !item.active,
                                                    },
                                                    {
                                                        "bg-black": item.active,
                                                    }
                                                )}
                                            ></span>
                                            <span className={
                                                cn(
                                                    'h-4 w-auto overflow-x-show text-center',
                                                    {
                                                        "h-8 flex items-end": idx % 2 !== 0
                                                    }
                                                )
                                            }>{item.name}</span>
                                        </span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

