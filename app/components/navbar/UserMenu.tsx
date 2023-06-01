"use client";

import React, { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import { useRouter } from "next/navigation";
import useRegisterModal from "@/app/hooks/useRegisterModal";

import useLoginModal from "@/app/hooks/useLoginModal";

const UserMenu = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();

    // const currentUser = {
    //     name: "smith",
    // };

    const currentUser = null;

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);

    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div
                    onClick={() => {}}
                    className="
                hidden
                md:block
                text-sm
                font-semibold
                py-3
                px-4
                rounded-full
                hover:bg-neutral-100
                transition
                cursor-pointer
                "
                >
                    Airbnb your home
                </div>
                <div
                    onClick={toggleOpen}
                    className="
                    p-4
                    md:py-2
                    md:px-2
                    border-[1px]
                    flex
                    flex-row
                    items-center
                    gap-3
                    rounded-full
                    cursor-pointer
                    hover:shadow-md 
                    transition
                    "
                >
                    <AiOutlineMenu />
                    <div className="hidden md:block">
                        <Avatar />
                    </div>
                </div>
            </div>
            {isOpen && (
                <div
                    className="absolute top-14 text-sm rounded-xl shadow-md w-[40vw] 
                md:w-3/4 bg-white overflow-hidden right-0"
                >
                    <div className="py-2 cursor-pointer">
                        {currentUser ? (
                            <>
                                <MenuItem
                                    onClick={() => router.push("/trips")}
                                    label="My trips"
                                />
                                <MenuItem
                                    onClick={() => router.push("/favorites")}
                                    label="My favorites"
                                />
                                <MenuItem
                                    onClick={() => router.push("/reservations")}
                                    label="My reservations"
                                />
                                <MenuItem
                                    onClick={() => router.push("/properties")}
                                    label="My properties"
                                />
                                <MenuItem
                                    onClick={() => router.push("/properties")}
                                    label="Airbnb your home"
                                />
                                <hr />
                                <MenuItem
                                    onClick={() => router.push("/properties")}
                                    label="Logout"
                                />
                            </>
                        ) : (
                            <>
                                <MenuItem
                                    onClick={loginModal.onOpen}
                                    label="Login"
                                />
                                <MenuItem
                                    onClick={registerModal.onOpen}
                                    label="Sign up"
                                />
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserMenu;
