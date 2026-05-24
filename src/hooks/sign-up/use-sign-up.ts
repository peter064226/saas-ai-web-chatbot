"use client";
import { toast } from "sonner";
import {
  UserRegistrationProps,
  UserRegistrationSchema,
} from "@/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSignUp } from "@clerk/nextjs/legacy";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { onCompleteUserRegistration } from "@/actions/auth";

export const useSignUpForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { signUp, isLoaded, setActive } = useSignUp();
  const router = useRouter();
  const methods = useForm<UserRegistrationProps>({
    resolver: zodResolver(UserRegistrationSchema),
    defaultValues: {
      type: "owner",
      fullname: "",
      email: "",
      confirmEmail: "",
      password: "",
      confirmPassword: "",
      otp: "",
    },
    mode: "onChange",
  });

  const onGenerateOTP = async (
    email: string,
    password: string,
    onNext: React.Dispatch<React.SetStateAction<number>>,
  ) => {
    if (!isLoaded) return;
    setLoading(true);

    try {
      await signUp.create({
        emailAddress: email,
        password: password,
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      setLoading(false);
      onNext((prev) => prev + 1);
    } catch (error: any) {
      setLoading(false);
      toast("Error", {
        description: error.errors[0].longMessage,
      });
    }
  };

  const onHandleSubmit = methods.handleSubmit(
    async (values: UserRegistrationProps) => {
      if (!isLoaded) return;

      try {
        setLoading(true);
        const completeSignUp = await signUp.attemptEmailAddressVerification({
          code: values.otp,
        });

        if (completeSignUp.status !== "complete") {
          return { message: "Something went wrong!" };
        }

        if (completeSignUp.status == "complete") {
          if (!signUp.createdUserId) return;

          const registered = await onCompleteUserRegistration(
            values.fullname,
            signUp.createdUserId,
            values.type,
          );

          if (registered?.status == 200 && registered.user) {
            await setActive({
              session: completeSignUp.createdSessionId,
            });
            router.push("/dashboard");
          }

          if (registered?.status == 400) {
            toast("Error", {
              description: "Something went wrong!",
            });
          }
        }
      } catch (error: any) {
        toast("Error", {
          description: error.errors[0].longMessage,
        });
      } finally {
        setLoading(false);
      }
    },
  );
  return {
    methods,
    onHandleSubmit,
    onGenerateOTP,
    loading,
  };
};
