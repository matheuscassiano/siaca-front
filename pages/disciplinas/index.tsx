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

export default function SubjectsPage() {
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const [message, setMessage] = useState("");

  const handleClose = (_?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setMessage("");
  };

  useEffect(() => {
    httpRequest({
      method: "GET",
      route: "coordenacao/listas-disciplinas/",
      setLoading: setLoading,
    })
      .then((response) => {
        if (response) {
          setSubjects(
            response.map((subject: { id: number; nome: string }) => ({
              id: subject.id,
              title: subject.nome,
            }))
          );
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const moreMenu = [
    {
      title: "Remover",
      exec: (id: number) => {
        httpRequest({
          method: "DELETE",
          route: `coordenacao/disciplinas/${id}/`,
          setLoading: setLoading,
        })
          .then(() => setSubjects(subjects.filter((res: any) => res.id !== id)))
          .catch((error) => setMessage(error));
      },
    },
  ];

  return (
    <>
      <Head>
        <title>Disciplinas</title>
      </Head>
      <PageContainer>
        <SideMenu />
        <PageContent>
          <section>
            <HeaderTitle>Disciplinas</HeaderTitle>
            <SearchField label="Pesquisa" />
            {loading ? (
              <Loading />
            ) : (
              <List items={subjects} moreMenu={moreMenu} />
            )}
          </section>
          <AddButton
            color="primary"
            aria-label="add"
            onClick={() => router.push("/disciplinas/cadastro")}
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
