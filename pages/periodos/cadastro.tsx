import SideMenu from "@/components/SideMenu";
import { HeaderTitle } from "@/styles/HeaderTitle";
import LargeButton from "@/styles/LargeButton";
import { PageContainer, PageContent } from "@/styles/Page";
import httpRequest from "@/utils/requests";
import { Alert, FormLabel, InputLabel, Snackbar, TextField } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import CourseFormContainer, { CourseButtonContainer } from "@/styles/Form";
import { Label } from "@mui/icons-material";

export default function CreateCoursePage() {
  const [id, setId] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
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

  const handleCreateCourse = () => {
    httpRequest({
      route: "coordenacao/periodo/",
      method: "POST",
      body: { id, start_date: startDate, end_date: endDate },
    })
      .then(() => router.push("/periodos"))
      .catch((error) => {
        Object.keys(error).forEach((key) =>
          setMessage(`${key}: ${error[key]}`)
        );
      });
  };

  return (
    <>
      <Head>
        <title>Periodos</title>
      </Head>
      <PageContainer>
        <SideMenu />
        <PageContent>
          <HeaderTitle>Cadastrar Periodo</HeaderTitle>
          <CourseFormContainer>
            <TextField
              label="Período"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <InputLabel>Data Inicial</InputLabel>
            <TextField
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <InputLabel>Data Final</InputLabel>
            <TextField
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </CourseFormContainer>
          <CourseButtonContainer>
            <LargeButton
              variant="outlined"
              onClick={() => router.push("/periodos")}
            >
              Cancelar
            </LargeButton>
            <LargeButton variant="contained" onClick={handleCreateCourse}>
              Salvar
            </LargeButton>
          </CourseButtonContainer>
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
