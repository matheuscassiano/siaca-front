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
        <title>Salas</title>
      </Head>
      <PageContainer>
        <SideMenu />
        <PageContent>
          <HeaderTitle>Cadastrar Sala</HeaderTitle>
          <CourseFormContainer>
            <TextField label="Nome" />
            <TextField label="Curso" />
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
