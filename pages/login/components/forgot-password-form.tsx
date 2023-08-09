import LargeButton from "@/styles/LargeButton";
import { TextField } from "@mui/material";
import {
  Anchor,
  LoginButtonContainer,
  LoginContent,
  SubTitle,
  Title,
} from "../styles";

export default function ForgotPasswordForm({
  setForgotPassword,
}: {
  setForgotPassword: (value: boolean) => void;
}) {
  const setForm = () => setForgotPassword(false);

  return (
    <LoginContent>
      <div>
        <Title>Recuperar minha senha</Title>
        <SubTitle>Vamos te ajudar a recuperar sua senha</SubTitle>
      </div>
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        type="email"
        required
      />
      <LoginButtonContainer>
        <Anchor onClick={setForm}>Realizar Login</Anchor>
        <LargeButton onClick={setForm} variant="contained">
          Resetar Senha
        </LargeButton>
      </LoginButtonContainer>
    </LoginContent>
  );
}
