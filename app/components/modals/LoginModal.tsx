"use client";

import axios from "axios";
import { useCallback, useState } from "react";
import Modal from "./Modal";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useLoginModal from "@/app/hooks/useLoginModal";
import Button from "../Button";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import Input from "../inputs/Input";
import Heading from "../Heading";

const LoginModal = () => {
    const [isLoading, setIsLoading] = useState(false);
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();

    console.log(loginModal.isOpen);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        axios
            .post("/api/login", data)
            .then(() => {
                registerModal.onClose();
            })
            .catch((err) => console.log(err))
            .finally(() => setIsLoading(false));
    };

    const onToggle = useCallback(() => {
        loginModal.onClose();
        registerModal.onOpen();
    }, [registerModal, loginModal]);

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading title="Welcome to Airbnb" subtitle="Create an account" />
            <Input
                id="email"
                label="Email"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />

            <Input
                id="password"
                label="Password"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
        </div>
    );

    const footerContent = (
        <div className="flex flex-col gap-4 mt-3">
            <hr />
            <Button
                outline
                label="Continue with Github"
                icon={FcGoogle}
                onClick={() => {}}
            />
            <Button
                outline
                label="Continue with Github"
                icon={AiFillGithub}
                onClick={() => {}}
            />
            <p
                className="text-neutral-500
            
            text-center mt-4 font-light "
            >
                Already have an account?
                <span
                    onClick={onToggle}
                    className="
                        ml-2
                        text-neutral-800
                        cursor-pointer
                        hover:underline
                    "
                >
                    Log in
                </span>
            </p>
        </div>
    );
    return (
        <Modal
            disabled={isLoading}
            isOpen={loginModal.isOpen}
            title="Login"
            actionLabel="Continue"
            onClose={loginModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
        />
    );
};

export default LoginModal;
