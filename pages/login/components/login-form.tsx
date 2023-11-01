import LargeButton from "@/styles/LargeButton";
import httpRequest from "@/utils/requests";
import { Alert, Snackbar, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import {
  Anchor,
  LoginButtonContainer,
  LoginContent,
  SubTitle,
  Title,
} from "../styles";
import { UserContext } from "@/contexts/UserContext";

export default function LoginForm({
  setForgotPassword,
}: {
  setForgotPassword: (value: boolean) => void;
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const { user, setUser } = useContext(UserContext);

  const router = useRouter();

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setMessage("");
  };

  const handleLogin = async () => {
    httpRequest({
      method: "POST",
      route: "autenticacao/login/",
      body: { username, password },
    })
      .then((token) => {
        localStorage.setItem("access", token.access);
        localStorage.setItem("refresh", token.refresh);
        setUser({ ...user!, token });

        httpRequest({ method: "GET", route: "autenticacao/profile/" }).then(
          (info) => {
            localStorage.setItem("user", JSON.stringify(info));
            setUser({ ...user!, info });
          }
        );
        router.push("/home");
      })
      .catch((error) => {
        if (error && typeof error !== "string") {
          Object.keys(error).forEach((key) =>
            setMessage(`${key}: ${error[key]}`)
          );
        } else {
          setMessage(error);
        }
      });
  };

  const setForm = () => setForgotPassword(true);

  return (
    <>
      <LoginContent>
        <div>
          <Title>Entrar no sistema</Title>
          <SubTitle>Vamos facilitar o gerenciamento Acadêmico</SubTitle>
        </div>
        <TextField
          id="outlined-basic"
          label="Usuário"
          variant="outlined"
          name="user"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Senha"
          variant="outlined"
          name="pass"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <LoginButtonContainer>
          <Anchor onClick={setForm}>Recuperar minha senha</Anchor>
          <LargeButton onClick={handleLogin} type="submit" variant="contained">
            Entrar
          </LargeButton>
          <p>{message}</p>
        </LoginButtonContainer>
      </LoginContent>
      <Snackbar
        open={!!message}
        autoHideDuration={5000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity="error" onClose={handleClose} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
}
