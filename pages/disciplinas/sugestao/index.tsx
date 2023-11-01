import { List } from "@/components/List";
import { Loading } from "@/components/Loading";
import SideMenu from "@/components/SideMenu";
import AddButton from "@/styles/AddButton";
import { HeaderTitle } from "@/styles/HeaderTitle";
import { PageContainer, PageContent } from "@/styles/Page";
import SearchField from "@/styles/SearchField";
import httpRequest from "@/utils/requests";
import { Add } from "@mui/icons-material";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function CoursePage() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    httpRequest({
      method: "GET",
      route: "coordenacao/curso/",
      setLoading: setLoading,
    })
      .then((response) => {
        console.log(response);

        // setCourses(
        //   response.map(
        //     (course: { nome: string; ementa: string; descricao: string }) => ({
        //       title: course.nome,
        //       // subtitle: `Ementa: ${course.ementa}`,
        //       subtitle: `Descrição: ${course.descricao}`,
        //     })
        //   )
        // );
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Head>
        <title>Sugestão de Disciplinas</title>
      </Head>
      <PageContainer>
        <SideMenu />
        <PageContent>
          <section>
            <HeaderTitle>Sugestão de Disciplinas</HeaderTitle>
            <SearchField label="Pesquisa" />
            {loading ? <Loading /> : <List items={courses} />}
          </section>
          {/* <AddButton
            color="primary"
            aria-label="add"
            onClick={() => router.push("/cursos/cadastro")}
          >
            <Add />
          </AddButton> */}
        </PageContent>
      </PageContainer>
    </>
  );
}
