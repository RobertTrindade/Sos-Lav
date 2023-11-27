"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import userAuthService from "@/src/services/auth/user.auth.service";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Login = z.object({
  email: z
    .string()
    .nonempty({ message: "E-mail é obrigatorio" })
    .email({ message: "Insira um E-mail válido" }),
  password: z.string().nonempty({ message: "Senha obrigatorio" }),
});

export type LoginDto = z.infer<typeof Login>;

export const useLoginController = () => {
  const [credentialsError, setCredentialsError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginDto>({
    resolver: zodResolver(Login),
  });

  const handleFormSubmit = handleSubmit(async (infos) => {
    try {
      setLoading(true);
      const res = (await userAuthService.login(infos)) as any;
      if (!res) {
        router.push("/")
      }

      if (res.error) {
        setCredentialsError("E-mail não encontrado na base de dados");
      }
      setLoading(false);
    } catch (error) {
      console.log({ error });
    }
  });

  return { handleFormSubmit, register, errors, credentialsError, loading };
};
