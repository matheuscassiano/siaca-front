import SideMenu from "@/components/SideMenu";
import CourseFormContainer, { CourseButtonContainer } from "@/styles/Form";
import { HeaderTitle } from "@/styles/HeaderTitle";
import LargeButton from "@/styles/LargeButton";
import { PageContainer, PageContent } from "@/styles/Page";
import httpRequest from "@/utils/requests";
import {
  Alert,
  Checkbox,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  Snackbar,
  TextField,
} from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IPeriod } from "../../interfaces/interfaces";

export default function CreateClassroomPage() {
  const [description, setDescription] = useState("");
  const [days, setDays] = useState<number[]>([]);
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [period, setPeriod] = useState<number>();
  const [subject, setSubject] = useState<number>();
  const [course, setCourse] = useState<number>();
  const [classroom, setClassroom] = useState<number>();
  const [professor, setProfessor] = useState<number>();
  const [message, setMessage] = useState("");

  const [periods, setPeriods] = useState<IPeriod[]>([]);
  const [subjects, setSubjects] = useState([]);
  const [courses, setCourses] = useState<any[]>([]);
  const [classrooms, setClassrooms] = useState<any[]>([]);

  const router = useRouter();

  const handleClose = (_?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setMessage("");
  };

  useEffect(() => {
    httpRequest({ method: "GET", route: "coordenacao/periodo/" })
      .then((response) => setPeriods(response))
      .catch((error) => setMessage(error));

    httpRequest({ method: "GET", route: "coordenacao/listas-disciplinas/" })
      .then((response) => setSubjects(response))
      .catch((error) => setMessage(error));

    httpRequest({ method: "GET", route: "coordenacao/curso/" })
      .then((response) => setCourses(response))
      .catch((error) => setMessage(error));

    httpRequest({ method: "GET", route: "coordenacao/listar-salas/" })
      .then((response) => setClassrooms(response))
      .catch((error) => setMessage(error));
  }, []);

  const daysList = [
    {
      value: 0,
      label: "Segunda",
    },
    {
      value: 1,
      label: "Terça",
    },
    {
      value: 2,
      label: "Quarta",
    },
    {
      value: 3,
      label: "Quinta",
    },
    {
      value: 4,
      label: "Sexta",
    },
    {
      value: 5,
      label: "Sábado",
    },
    {
      value: 6,
      label: "Domingo",
    },
  ];

  const handleCreateOffer = () => {
    httpRequest({
      route: "grade/ofertas/",
      method: "POST",
      body: {
        descricao: description,
        aula_dias: days.join(""),
        aula_hora_inicio: start,
        aula_hora_fim: end,
        periodo: period,
        disciplina: subject,
        curso: course,
        sala: classroom,
        professor: professor,
      },
    })
      .then(() => router.push("/ofertas"))
      .catch((error) => {
        Object.keys(error).forEach((key) =>
          setMessage(`${key}: ${error[key]}`)
        );
      });
  };

  return (
    <>
      <Head>
        <title>Ofertas</title>
      </Head>
      <PageContainer>
        <SideMenu />
        <PageContent>
          <HeaderTitle>Cadastrar Oferta</HeaderTitle>
          <CourseFormContainer>
            <TextField
              label="Descrição"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <Select
              multiple
              value={days}
              onChange={(e) => setDays(e.target.value as number[])}
              input={<OutlinedInput label="Tag" />}
              renderValue={(selected) =>
                selected.map((day) => daysList[day].label).join(", ")
              }
            >
              {daysList.map((day) => (
                <MenuItem key={day.value} value={day.value}>
                  <Checkbox checked={days.indexOf(day.value) > -1} />
                  <ListItemText primary={day.label} />
                </MenuItem>
              ))}
            </Select>

            <InputLabel>Hora de Início</InputLabel>
            <TextField
              type="time"
              value={start}
              onChange={(e) => setStart(e.target.value)}
            />
            <InputLabel>Hora de Termino</InputLabel>
            <TextField
              type="time"
              value={end}
              onChange={(e) => setEnd(e.target.value)}
            />

            <InputLabel>Período</InputLabel>
            <Select
              label="Período"
              onChange={(e) => setPeriod(Number(e.target.value))}
            >
              {periods.map((period) => (
                <MenuItem key={period.id} value={period.id}>
                  {period.id}
                </MenuItem>
              ))}
            </Select>

            <InputLabel>Disciplina</InputLabel>
            <Select onChange={(e) => setSubject(Number(e.target.value))}>
              {subjects.map((subject: any) => (
                <MenuItem key={subject.id} value={subject.id}>
                  {subject.nome}
                </MenuItem>
              ))}
            </Select>

            <InputLabel>Curso</InputLabel>
            <Select onChange={(e) => setCourse(Number(e.target.value))}>
              {courses.map((course) => (
                <MenuItem key={course.id} value={course.id}>
                  {course.nome}
                </MenuItem>
              ))}
            </Select>

            <InputLabel>Sala</InputLabel>
            <Select onChange={(e) => setClassroom(Number(e.target.value))}>
              {classrooms.map((classroom) => (
                <MenuItem key={classroom.id} value={classroom.id}>
                  {classroom.descricao}
                </MenuItem>
              ))}
            </Select>

            <TextField
              label="Professor"
              type="number"
              value={professor}
              onChange={(e) => setProfessor(Number(e.target.value))}
            />
          </CourseFormContainer>
          <CourseButtonContainer>
            <LargeButton
              variant="outlined"
              onClick={() => router.push("/ofertas")}
            >
              Cancelar
            </LargeButton>
            <LargeButton variant="contained" onClick={handleCreateOffer}>
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
