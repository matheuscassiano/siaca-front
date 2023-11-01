import { List } from "@/components/List";
import { Loading } from "@/components/Loading";
import SideMenu from "@/components/SideMenu";
import AddButton from "@/styles/AddButton";
import { HeaderTitle } from "@/styles/HeaderTitle";
import { PageContainer, PageContent } from "@/styles/Page";
import SearchField from "@/styles/SearchField";
import httpRequest from "@/utils/requests";
import { Add } from "@mui/icons-material";
import { Alert, Snackbar } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function CoursePage() {
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const router = useRouter();

  const handleClose = (_?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setMessage("");
  };

  useEffect(() => {
    httpRequest({
      method: "GET",
      route: "coordenacao/curso/",
      setLoading: setLoading,
    })
      .then((response) => {
        setCourses(
          response.map((course: any) => ({
            id: course.id,
            title: course.nome,
            subtitle: `Descrição: ${course.descricao}`,
          }))
        );
      })
      .catch((error) => setMessage(error));
  }, []);

  const moreMenu = [
    {
      title: "Remover",
      exec: (id: number) => {
        httpRequest({
          method: "DELETE",
          route: `coordenacao/curso/${id}/`,
          setLoading: setLoading,
        })
          .then(() => setCourses(courses.filter((res) => res.id !== id)))
          .catch((error) => setMessage(error));
      },
    },
    {
      title: "Curso",
      exec: (id: number) => router.push(`/cursos/${id}`),
    },
  ];

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
            {loading ? (
              <Loading />
            ) : (
              <List items={courses} moreMenu={moreMenu} />
            )}
          </section>
          <AddButton
            className="add-course-buttton"
            color="primary"
            aria-label="add"
            onClick={() => router.push("/cursos/cadastro")}
          >
            <Add />
          </AddButton>
        </PageContent>
      </PageContainer>
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
