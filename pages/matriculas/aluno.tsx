import { List } from "@/components/List";
import SideMenu from "@/components/SideMenu";
import TimeTable from "@/components/TimeTable";
import { HeaderTitle } from "@/styles/HeaderTitle";
import { PageContainer, PageContent } from "@/styles/Page";
import { Section } from "@/styles/Section";
import httpRequest from "@/utils/requests";
import { Alert, Snackbar } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function StudentsPage() {
  const [registration, setRegistration] = useState([]);
  const [cards, setCards] = useState([]);
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
      route: "grade/minhas-matriculas/",
      setLoading: setLoading,
    })
      .then((response) => {
        setRegistration(response);
        setCards(
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
            <List items={cards} />
          </section>
          <Section.Container>
            <Section.Title>Calendario semanal</Section.Title>
          </Section.Container>
          <TimeTable offers={registration} />
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
