import LargeButton from "@/styles/LargeButton";
import { TextField } from "@mui/material";
import { useRouter } from "next/router";
import {
    Anchor,
    LoginButtonContainer,
    LoginContent,
    SubTitle,
    Title,
} from "../styles";

export default function LoginForm({
  setForgotPassword,
}: {
  setForgotPassword: (value: boolean) => void;
}) {
  const router = useRouter();

  const setForm = () => setForgotPassword(true);

  const handleClick = (to: string) => {
    router.push(to);
  };

  return (
    <LoginContent>
      <div>
        <Title>Entrar no sistema</Title>
        <SubTitle>Vamos facilitar o gerenciamento academico</SubTitle>
      </div>
      <TextField id="outlined-basic" label="CPF" variant="outlined" />
      <TextField id="outlined-basic" label="Senha" variant="outlined" type="password"/>
      <LoginButtonContainer>
        <Anchor onClick={setForm}>Recuperar minha senha</Anchor>
        <LargeButton onClick={() => handleClick("/home")} variant="contained">
          Entrar
        </LargeButton>
      </LoginButtonContainer>
    </LoginContent>
  );
}
