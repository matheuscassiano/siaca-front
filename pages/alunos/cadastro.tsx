import SideMenu from "@/components/SideMenu";
import { HeaderTitle } from "@/styles/HeaderTitle";
import { PageContainer, PageContent } from "@/styles/Page";
import { TextField } from "@mui/material";
import Head from "next/head";
import { StudentButtonContainer, StudentFormContainer } from "./styles";
import LargeButton from "@/styles/LargeButton";

export default function StudentsPage() {
  return (
    <>
      <Head>
        <title>Alunos</title>
      </Head>
      <PageContainer>
        <SideMenu />
        <PageContent>
          <HeaderTitle>Cadastrar Aluno</HeaderTitle>
          <StudentFormContainer>
            <TextField label="Nome" />
            <TextField label="Email" />
            <TextField label="Telefone" />
            <TextField label="CPF" />
            <TextField label="Curso" />
            <TextField label="Período de Ingresso" />
            <TextField label="Endereço" />
            <TextField label="Bairro" />
            <TextField label="Cidade" />
            <TextField label="Estado" />
          </StudentFormContainer>
          <StudentButtonContainer>
            <LargeButton variant="outlined">Cancelar</LargeButton>
            <LargeButton variant="contained">Salvar</LargeButton>
          </StudentButtonContainer>
        </PageContent>
      </PageContainer>
    </>
  );
}
