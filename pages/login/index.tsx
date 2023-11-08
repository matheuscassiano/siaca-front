import Head from "next/head";
import { useState } from "react";
import ForgotPasswordForm from "./components/forgot-password-form";
import LoginForm from "./components/login-form";
import { LoginContainer, LoginCover, PageContainer, Title } from "./styles";

export default function LoginPage() {
  const [forgotPassword, setForgotPassword] = useState(false);
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <PageContainer>
        <LoginContainer>
          <Title>Sistema Acadêmico</Title>
          {forgotPassword ? (
            <ForgotPasswordForm setForgotPassword={setForgotPassword} />
          ) : (
            <LoginForm setForgotPassword={setForgotPassword} />
          )}
        </LoginContainer>
        <LoginCover src="/images/login-cover.avif" />
      </PageContainer>
    </>
  );
}
