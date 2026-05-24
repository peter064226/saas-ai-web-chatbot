import SignInFormProvider from "@/components/forms/sign-in/form-provider";
import LoginForm from "@/components/forms/sign-in/login-form";

const SignInPage = () => {
  return (
    <div className="flex-1 py-36 md:px-16 w-full">
      <div className="flex flex-col h-full gap-3">
        <SignInFormProvider>
          <div className="flex flex-col gap-3">
            <LoginForm />
          </div>
        </SignInFormProvider>
      </div>
    </div>
  );
};

export default SignInPage;
