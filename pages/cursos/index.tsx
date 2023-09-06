import { List } from "@/components/List";
import { Loading } from "@/components/Loading";
import SideMenu from "@/components/SideMenu";
import AddButton from "@/styles/AddButton";
import { HeaderTitle } from "@/styles/HeaderTitle";
import { PageContainer, PageContent } from "@/styles/Page";
import SearchField from "@/styles/SearchField";
import { Add } from "@mui/icons-material";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function CoursePage() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const token = localStorage.getItem("access");
        if (!token) {
          console.error("No access token found.");
          return;
        }

        const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        };
        const response = await fetch(
          "http://localhost:8000/coordenacao/curso/",
          { headers }
        );
        if (response.ok) {
          const data = await response.json();
          setCourses(
            data.map(
              (course: {
                nome: string;
                ementa: string;
                descricao: string;
              }) => ({
                title: course.nome,
                // subtitle: `Ementa: ${course.ementa}`,
                subtitle: `Descrição: ${course.descricao}`,
              })
            )
          );
        } else {
          console.error("Failed to fetch courses");
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <>
      <Head>
        <title>Cursos</title>
      </Head>
      <PageContainer>
        <SideMenu />
        <PageContent>
          <section>
            <HeaderTitle>Cursos</HeaderTitle>
            <SearchField label="Pesquisa" />
            {loading ? <Loading /> : <List items={courses} />}
          </section>
          <AddButton color="primary" aria-label="add">
            <Add />
          </AddButton>
        </PageContent>
      </PageContainer>
    </>
  );
}
