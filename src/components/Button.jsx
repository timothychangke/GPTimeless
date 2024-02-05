import { AiOutlineAudio } from 'react-icons/ai';
import { AiFillAudio } from 'react-icons/ai';
import { useState } from 'react';

const Button = ({ children, onClick, listening }) => {
    return (
        <div className="grid min-h-[50px] place-content-center bg-[#343541] p-10">
            <button
                onClick={onClick}
                className="group relative px-4 py-2 font-medium text-slate-100 transition-colors duration-[400ms] hover:text-indigo-300"
            >
                <div className="flex space-x-1 content-center">
                    {listening ? (
                        <AiFillAudio className="size-5" />
                    ) : (
                        <AiOutlineAudio className="size-5" />
                    )}

                    <span>{children}</span>
                </div>

                {/* TOP */}
                <span className="absolute left-0 top-0 h-[2px] w-0 bg-indigo-300 transition-all duration-100 group-hover:w-full" />

                {/* RIGHT */}
                <span className="absolute right-0 top-0 h-0 w-[2px] bg-indigo-300 transition-all delay-100 duration-100 group-hover:h-full" />

                {/* BOTTOM */}
                <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-indigo-300 transition-all delay-200 duration-100 group-hover:w-full" />

                {/* LEFT */}
                <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-indigo-300 transition-all delay-300 duration-100 group-hover:h-full" />
            </button>
        </div>
    );
};

export default Button;
