import LargeButton from "@/styles/LargeButton";
import { TextField } from "@mui/material";
import {
  Anchor,
  LoginButtonContainer,
  LoginContent,
  SubTitle,
  Title,
} from "../styles";
import { useState } from "react";

export default function ForgotPasswordForm({
  setForgotPassword,
}: {
  setForgotPassword: (value: boolean) => void;
}) {
  const setForm = () => setForgotPassword(false);
  const [email, setEmail] = useState("");

  const handleForgotPassword = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/autenticacao/request-password-reset/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      if (response.status === 200) {
        setForm();
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <LoginContent>
      <div>
        <Title>Recuperar minha senha</Title>
        <SubTitle>Vamos te ajudar a recuperar sua senha</SubTitle>
      </div>
      <TextField
        required
        id="outlined-basic"
        label="Email"
        variant="outlined"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <LoginButtonContainer>
        <Anchor onClick={setForm}>Realizar Login</Anchor>
        <LargeButton onClick={handleForgotPassword} variant="contained">
          Resetar Senha
        </LargeButton>
      </LoginButtonContainer>
    </LoginContent>
  );
}
