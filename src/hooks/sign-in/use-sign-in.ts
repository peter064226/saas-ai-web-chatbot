import { toast } from "sonner";
import { useSignIn } from "@clerk/nextjs/legacy";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { UserLoginSchema, UserLoginProps } from "@/schemas/auth.schema";

export const useSignInForm = () => {
  const { isLoaded, signIn, setActive } = useSignIn();
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const methods = useForm<UserLoginProps>({
    resolver: zodResolver(UserLoginSchema),
    mode: "onChange",
  });

  const onHandleSubmit = methods.handleSubmit(
    async (values: UserLoginProps) => {
      if (!isLoaded) return;

      try {
        setLoading(true);
        const result = await signIn.create({
          identifier: values.email,
          password: values.password,
        });

        if (result.status === "complete") {
          await setActive({ session: result.createdSessionId });
          toast.success("Success", {
            description: "Welcome back!",
          });
          router.push("/dashboard");
        }
      } catch (error: any) {
        const code = error?.errors?.[0]?.code;
        if (code === "form_password_incorrect") {
          toast.error("Error", {
            description: "Email or password is incorrect, try again",
          });
        } else {
          toast.error("Error", {
            description: "Something went wrong, please try again",
          });
        }
      } finally {
        setLoading(false);
      }
    },
  );

  return {
    methods,
    onHandleSubmit,
    loading,
  };
};
