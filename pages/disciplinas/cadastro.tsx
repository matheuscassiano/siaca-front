import SideMenu from "@/components/SideMenu";
import CourseFormContainer, { CourseButtonContainer } from "@/styles/Form";
import { HeaderTitle } from "@/styles/HeaderTitle";
import LargeButton from "@/styles/LargeButton";
import { PageContainer, PageContent } from "@/styles/Page";
import httpRequest from "@/utils/requests";
import {
  Alert,
  Checkbox,
  FormControlLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
} from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function CreateCoursePage() {
  const [nome, setNome] = useState("");
  const [course, setCourse] = useState<number>();
  const [period, setPeriod] = useState("");
  const [hours, setHours] = useState<number>();
  const [description, setDescription] = useState("");
  const [required, setRequired] = useState(true);
  const [message, setMessage] = useState("");

  const [courses, setCourses] = useState<any[]>([]);

  const router = useRouter();

  const handleClose = (_?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setMessage("");
  };

  useEffect(() => {
    httpRequest({ method: "GET", route: "coordenacao/curso/" })
      .then((response) => setCourses(response))
      .catch((error) => setMessage(error));
  }, []);

  const handleCreateCourse = () => {
    httpRequest({
      route: "coordenacao/disciplinas/",
      method: "POST",
      body: {
        nome,
        periodo: period,
        curso: course,
        decricao: description,
        carga_horaria: hours,
        obrigatoria: required,
      },
    })
      .then(() => router.push("/disciplinas"))
      .catch((error) => {
        Object.keys(error).forEach((key) =>
          setMessage(`${key}: ${error[key]}`)
        );
      });
  };

  return (
    <>
      <Head>
        <title>Disciplinas</title>
      </Head>
      <PageContainer>
        <SideMenu />
        <PageContent>
          <HeaderTitle>Cadastrar Disciplina</HeaderTitle>
          <CourseFormContainer>
            <TextField
              label="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <TextField
              label="Período"
              type="number"
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
            />
            <Select
              label="Curso"
              onChange={(e) => setCourse(Number(e.target.value))}
            >
              {courses.map((course) => (
                <MenuItem key={course.id} value={course.id}>
                  {course.nome}
                </MenuItem>
              ))}
            </Select>
            <TextField
              label="Carga Horária"
              value={hours}
              onChange={(e) => setHours(Number(e.target.value))}
            />
            <TextField
              label="Descrição"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  checked={required}
                  onChange={(e) => setRequired(e.target.checked)}
                />
              }
              label="Obrigatória"
            />
          </CourseFormContainer>
          <CourseButtonContainer>
            <LargeButton
              variant="outlined"
              onClick={() => router.push("/disciplinas")}
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
