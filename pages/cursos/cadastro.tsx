import SideMenu from "@/components/SideMenu";
import { HeaderTitle } from "@/styles/HeaderTitle";
import LargeButton from "@/styles/LargeButton";
import { PageContainer, PageContent } from "@/styles/Page";
import { TextField } from "@mui/material";
import Head from "next/head";
import { useState } from "react";
import { CourseButtonContainer, CourseFormContainer } from "./styles";
import { useRouter } from "next/router";

export default function CoursePage() {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [ementa, setEmenta] = useState("");
  const [periodos, setPeriodos] = useState("");

  const router = useRouter();

  const handleCreateCourse = async () => {
    try {
      const response = await fetch("http://localhost:8000/coordenacao/curso/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome, descricao, ementa, periodos }),
      });

      const data = await response.json();

      if (response.status === 201) {
        // setMessage(data.message);
        router.push("/cursos");
      } else {
        // setMessage(data.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <>
      <Head>
        <title>Cursos</title>
      </Head>
      <PageContainer>
        <SideMenu />
        <PageContent>
          <HeaderTitle>Cadastrar Curso</HeaderTitle>
          <CourseFormContainer>
            <TextField
              label="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <TextField
              label="Descrição"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
            {/* <TextField
              label="Ementa"
              value={ementa}
              onChange={(e) => setEmenta(e.target.value)}
            /> */}
            <TextField
              label="Períodos"
              type="number"
              value={periodos}
              onChange={(e) => setPeriodos(e.target.value)}
            />
          </CourseFormContainer>
          <CourseButtonContainer>
            <LargeButton variant="outlined">Cancelar</LargeButton>
            <LargeButton variant="contained" onClick={handleCreateCourse}>
              Salvar
            </LargeButton>
          </CourseButtonContainer>
        </PageContent>
      </PageContainer>
    </>
  );
}
