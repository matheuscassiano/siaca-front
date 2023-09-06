import SideMenu from "@/components/SideMenu";
import { HeaderTitle } from "@/styles/HeaderTitle";
import LargeButton from "@/styles/LargeButton";
import { PageContainer, PageContent } from "@/styles/Page";
import { TextField } from "@mui/material";
import Head from "next/head";
import { CourseButtonContainer, CourseFormContainer } from "./styles";

export default function CoursePage() {
  return (
    <>
      <Head>
        <title>Disciplinas</title>
      </Head>
      <PageContainer>
        <SideMenu />
        <PageContent>
          <HeaderTitle>Cadastrar Disciplina</HeaderTitle>
          <CourseFormContainer>
            <TextField label="Nome" />
            <TextField label="Curso" />
            <TextField label="Período" />
            <TextField label="Carga Horária" />
          </CourseFormContainer>
          <CourseButtonContainer>
            <LargeButton variant="outlined">Cancelar</LargeButton>
            <LargeButton variant="contained">Salvar</LargeButton>
          </CourseButtonContainer>
        </PageContent>
      </PageContainer>
    </>
  );
}
