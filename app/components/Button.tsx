"use client";

import { IconType } from "react-icons";

interface ButtonProps {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    outline?: boolean;
    small?: boolean;
    icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    disabled,
    outline,
    small,
    icon: Icon,
}) => {
    return (
        <div
            className={`
            cursor-pointer
            relative
            disabled: opacity-70 
            disabled:cursor-not-allowed
            rounded-lg
            hover:opacity-80 
            transition
            w-full
            text-center

            ${
                outline
                    ? "bg-white text-black border-black"
                    : "bg-rose-500 text-white border-rose-500"
            }
            ${
                small
                    ? "text-sm py-1 font-light border-[1px]"
                    : "text-md py-3 font-semibold border-2"
            }
        `}
        >
            {Icon && (
                <Icon
                    size={24}
                    className="
                absolute
                left-4 top-3
            "
                />
            )}
            {label}
        </div>
    );
};

export default Button;
