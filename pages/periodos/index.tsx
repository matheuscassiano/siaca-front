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
import { IPeriod } from "../../interfaces/interfaces";

export default function CoursePage() {
  const [periods, setPeriods] = useState<IPeriod[]>([]);
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
      route: "coordenacao/periodo/",
      setLoading: setLoading,
    })
      .then((response) => {
        setPeriods(
          response.map((period: IPeriod) => ({
            id: period.id,
            title: period.id,
            subtitle: `${period.start_date} - ${period.end_date}`,
          }))
        );
      })
      .catch((error) => setMessage(error));
  }, []);

  const moreMenu = [
    {
      title: "Remover",
      exec: (id: string) => {
        httpRequest({
          method: "DELETE",
          route: `coordenacao/periodo/${id}/`,
          setLoading: setLoading,
        })
          .then(() => setPeriods(periods.filter((res) => res.id !== id)))
          .catch((error) => setMessage(error));
      },
    },
  ];

  return (
    <>
      <Head>
        <title>Período</title>
      </Head>
      <PageContainer>
        <SideMenu />
        <PageContent>
          <section>
            <HeaderTitle>Período</HeaderTitle>
            <SearchField label="Pesquisa" />
            {loading ? (
              <Loading />
            ) : (
              <List items={periods} moreMenu={moreMenu} />
            )}
          </section>
          <AddButton
            color="primary"
            aria-label="add"
            onClick={() => router.push("/periodos/cadastro")}
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
