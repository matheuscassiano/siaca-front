import { List } from "@/components/List";
import { Loading } from "@/components/Loading";
import SideMenu from "@/components/SideMenu";
import TimeTable from "@/components/TimeTable";
import { HeaderTitle } from "@/styles/HeaderTitle";
import { PageContainer, PageContent } from "@/styles/Page";
import { Section } from "@/styles/Section";
import httpRequest from "@/utils/requests";
import { Alert, Button, Snackbar } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ClassroomPage() {
  const [loading, setLoading] = useState(true);
  const [offers, setOffers] = useState<any[]>([]);
  const [table, setTable] = useState<any[]>([]);
  const [cards, setCards] = useState([]);
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
      route: "grade/sugestao-ofertas/",
      setLoading: setLoading,
    })
      .then((response) => {
        setCards(
          response.map((res: any) => ({
            id: res.id,
            title: res.disciplina_nome,
            subtitle: `Periodo: ${res.periodo}`,
            description: `Carga Horaria: ${res.disciplina_carga_horaria}`,
          }))
        );

        setOffers(response);
      })
      .catch((error) => setMessage(error));
  }, []);

  function handleSelectOffer(id: number, selected?: boolean) {
    const index = offers.findIndex((_offer) => _offer.id === id);
    offers[index] = { ...offers[index], selected };
    setTable(offers.filter((offer) => offer.selected));
  }

  function matriculate() {
    table.forEach((row) => {
      httpRequest({
        method: "POST",
        route: "grade/matriculas/",
        setLoading: setLoading,
        body: { oferta: row.id },
      })
        .then(() => {
          console.log("Matriculado");
        })
        .catch((error) => {
          if (typeof error === "string") {
            setMessage(error);
          }
        });
    });
  }

  return (
    <>
      <Head>
        <title>Sugestão de Ofertas</title>
      </Head>
      <PageContainer>
        <SideMenu />
        <PageContent>
          <section>
            <HeaderTitle>Sugestão de Ofertas</HeaderTitle>
            {loading ? (
              <Loading />
            ) : (
              <List items={cards} onSelectItem={handleSelectOffer} />
            )}
          </section>
          <br />
          <Section.Container>
            <Section.Title>Calendario semanal</Section.Title>
            <Button onClick={matriculate}>Realizar Matricula</Button>
          </Section.Container>
          <TimeTable offers={table} />
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
