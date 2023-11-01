import { List } from "@/components/List";
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

export default function StudentsPage() {
  const [registration, setRegistration] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const router = useRouter();

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setMessage("");
  };

  useEffect(() => {
    httpRequest({
      method: "GET",
      route: "grade/list-matriculas/",
      setLoading: setLoading,
    })
      .then((response) => {
        setRegistration(
          response.map(
            (course: {
              id: number;
              nome: string;
              ementa: string;
              descricao: string;
            }) => ({
              id: course.id,
              title: course.nome,
              subtitle: `Descrição: ${course.descricao}`,
            })
          )
        );
      })
      .catch((error) => setMessage(error));
  }, []);

  return (
    <>
      <Head>
        <title>Matriculas</title>
      </Head>
      <PageContainer>
        <SideMenu />
        <PageContent>
          <section>
            <HeaderTitle>Matriculas</HeaderTitle>
            <SearchField label="Pesquisa" />
            <List items={registration} />
          </section>
          <AddButton
            color="primary"
            aria-label="add"
            onClick={() => router.push("/matriculas/cadastro")}
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
