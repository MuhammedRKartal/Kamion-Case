"use client";

import { Input } from "@/components/Input/input";
import { Button } from "@/components/button";
import { login } from "@/redux/actions/authActions";
import { yupResolver } from "@hookform/resolvers/yup";
import { string, object } from "yup";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React from "react";
import { Resolver, SubmitHandler, useForm } from "react-hook-form";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faLock } from "@fortawesome/free-solid-svg-icons/faLock";
import { Image } from "@/components/image";
import { useRouter } from "next/navigation";

export type LoginFormType = {
  email: string;
  password: string;
};

interface PropsType {
  className?: string;
}

export default function LoginForm(props: PropsType) {
  const { className } = props;

  const dispatch = useAppDispatch();
  const router = useRouter();
  const isAuthenticated = useAppSelector(state => state?.auth?.isAuthenticated ?? false);

  if (isAuthenticated) {
    router.push("/");
  }

  const loginValidationSchema = object().shape({
    email: string().email("Please enter a valid e-mail.").required("This field is required."),
    password: string().min(6, "Min 6 characters.").required("This field is required."),
  });

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>({
    resolver: yupResolver(loginValidationSchema) as Resolver<LoginFormType, any>,
  });

  const watchFields = watch();

  const onSubmit: SubmitHandler<LoginFormType> = async data => {
    const formData = data;

    dispatch(login(formData));
  };

  return (
    <div className={className}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 items-end">
        <Input
          labelStyle="floating"
          label="Email Address"
          error={errors.email}
          icon={faEnvelope}
          {...register("email")}
        />
        <Input
          labelStyle="floating"
          label="Password"
          type="password"
          {...register("password")}
          icon={faLock}
          error={errors.password}
        />
        <Button
          className="rounded-[10px] w-fit border-primary-400 bg-primary-400 hover:border-primary-300 hover:bg-primary-300 gap-3"
          disabled={!watchFields.email || !watchFields.password}
          type="submit"
        >
          Login
          <Image
            src={"/assets/svg/arrow-right.svg"}
            alt="arrow-right"
            width={15}
            height={12}
          ></Image>
        </Button>
      </form>
    </div>
  );
}