import SideMenu from "@/components/SideMenu";
import { UserContext } from "@/contexts/UserContext";
import { ICleanUser, IUser } from "@/interfaces/UserInterface";
import CourseFormContainer, { CourseButtonContainer } from "@/styles/Form";
import { HeaderTitle } from "@/styles/HeaderTitle";
import LargeButton from "@/styles/LargeButton";
import { PageContainer, PageContent } from "@/styles/Page";
import httpRequest from "@/utils/requests";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField } from "@mui/material";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  first_name: z
    .string()
    .min(2, "O primeiro nome deve ter ao menus 20 caracteres")
    .optional(),
  last_name: z
    .string()
    .min(20, "O sobrenome nome deve ter ao menus 20 caracteres")
    .optional(),
  username: z
    .string()
    .min(3, "O nome de usuário deve ter ao menus 3 caracteres")
    .optional(),
  email: z.string().email().optional(),
  telefone: z
    .string()
    .min(8, "O telefone deve ter ao menus 8 dígtos")
    .max(12, "O telefone deve ter ao menus 12 dígtos")
    .optional(),
  cpf: z.string().min(11, "o CPF deve ter ao menus 11 caracteres").optional(),
  estado: z.string().optional(),
  cidade: z.string().optional(),
  bairro: z.string().optional(),
  endereco: z
    .string()
    .min(20, "A descrição deve ter ao menus 20 caracteres")
    .optional(),
});

type FormProps = z.infer<typeof schema>;

export default function CoursePage() {
  const { user, setUser } = useContext(UserContext);

  const [id, setId] = useState();
  const [name, setName] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [document, setDocument] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");

  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    setTimeout(() => {
      const localUser = localStorage.getItem("user");
      const user = JSON.parse(localUser || "");
      if (user) {
        setId(user.user_id);
        setName(user.user_username);
        setDocument(user.user_cpf);
        setState(user.user_estado);
        setCity(user.user_cidade);
        setAddress(user.user_endereco);
        setEmail(user.user_email);
      }
    }, 500);
  }, []);

  const handleEditUser = () => {
    httpRequest({
      route: `api/usuario/${id}/`,
      method: "PUT",
      body: {
        username: name,
        cpf: document,
        estado: state,
        cidade: city,
        endereco: address,
        email: email,
      },
    })
      .then((res: ICleanUser) => {
        console.log(user);
        const newUser: IUser = {
          ...user?.info!,
          user_id: id,
          user_username: res.username || name,
          user_cpf: res.cpf || document,
          user_estado: res.estado || state,
          user_cidade: res.cidade || city,
          user_endereco: res.endereco || address,
          user_email: res.email || email,
        };

        setUser({ ...user!, info: newUser });
        localStorage.setItem("user", JSON.stringify(newUser));
      })
      .catch((error) => {
        Object.keys(error).forEach((key) =>
          setMessage(`${key}: ${error[key]}`)
        );
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    mode: "all",
    resolver: zodResolver(schema),
  });

  return (
    <>
      <Head>
        <title>Perfil</title>
      </Head>
      <PageContainer>
        <SideMenu />
        <PageContent>
          <HeaderTitle>Perfil</HeaderTitle>
          <CourseFormContainer>
            <TextField
              label="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <TextField
              label="CPF"
              value={document}
              onChange={(e) => setDocument(e.target.value)}
              required
            />

            <TextField
              label="Estado"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
            />

            <TextField
              label="Cidade"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />

            <TextField
              label="Endereço"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />

            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </CourseFormContainer>
          <CourseButtonContainer>
            <LargeButton variant="contained" onClick={handleEditUser}>
              Salvar
            </LargeButton>
          </CourseButtonContainer>
        </PageContent>
      </PageContainer>
    </>
  );
}
