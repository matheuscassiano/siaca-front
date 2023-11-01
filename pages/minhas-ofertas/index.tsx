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
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Alert, Snackbar } from "@mui/material";

export default function ClassroomPage() {
  const [loading, setLoading] = useState(true);
  const [classrooms, setClassroms] = useState<any[]>([]);
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
      route: "grade/minhas-aulas/",
      setLoading: setLoading,
    })
      .then((response) => {
        setClassroms(
          response.map((res: any) => ({
            id: res.id,
            title: `ID: ${res.id}`,
            subtitle: `Periodo: ${res.periodo}`,
            description: `Inicio: ${res.aula_hora_inicio}; Fim: ${res.aula_hora_fim}`,
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
          route: `grade/ofertas/${id}/`,
          setLoading: setLoading,
        })
          .then(() => setClassroms(classrooms.filter((res) => res.id !== id)))
          .catch((error) => setMessage(error));
      },
    },
  ];

  return (
    <>
      <Head>
        <title>Ofertas</title>
      </Head>
      <PageContainer>
        <SideMenu />
        <PageContent>
          <section>
            <HeaderTitle>Ofertas</HeaderTitle>
            <SearchField label="Pesquisa" />
            {loading ? (
              <Loading />
            ) : (
              <List items={classrooms} moreMenu={moreMenu} />
            )}
          </section>
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
