import SideMenu from "@/components/SideMenu";
import { HeaderTitle } from "@/styles/HeaderTitle";
import LargeButton from "@/styles/LargeButton";
import { PageContainer, PageContent } from "@/styles/Page";
import httpRequest from "@/utils/requests";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Alert,
  FormControl,
  FormHelperText,
  Snackbar,
  TextField,
} from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CourseButtonContainer, CourseFormContainer } from "./styles";

const schema = z.object({
  nome: z.string().min(2, "O nome deve ter ao menus 2 caracteres"),
  descricao: z.string().min(20, "A descrição deve ter ao menus 20 caracteres"),
  periodos: z.coerce.number().min(1, "A quantidade minima de periodos e 1"),
});

type FormProps = z.infer<typeof schema>;

export default function CreateCoursePage() {
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleClose = (_?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setMessage("");
  };

  const handleCreateCourse = (body: FormProps) => {
    httpRequest({
      route: "coordenacao/curso/",
      method: "POST",
      body,
    })
      .then(() => router.push("/cursos"))
      .catch((error) => {
        Object.keys(error).forEach((key) =>
          setMessage(`${key}: ${error[key]}`)
        );
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    mode: "all",
    resolver: zodResolver(schema),
  });

  return (
    <>
      <Head>
        <title>Cursos</title>
      </Head>
      <PageContainer>
        <SideMenu />
        <PageContent>
          <HeaderTitle>Cadastrar Curso</HeaderTitle>
          <CourseFormContainer>
            <FormControl>
              <TextField label="Nome" {...register("nome")} />
              {errors.nome?.message && (
                <FormHelperText error>{errors.nome?.message}</FormHelperText>
              )}
            </FormControl>
            <FormControl>
              <TextField label="Descrição" {...register("descricao")} />
              {errors.descricao?.message && (
                <FormHelperText error>
                  {errors.descricao?.message}
                </FormHelperText>
              )}
            </FormControl>
            <FormControl>
              <TextField
                label="Períodos"
                type="number"
                min="1"
                {...register("periodos")}
              />
              {errors.periodos?.message && (
                <FormHelperText error>
                  {errors.periodos?.message}
                </FormHelperText>
              )}
            </FormControl>
          </CourseFormContainer>
          <CourseButtonContainer>
            <LargeButton
              type="button"
              variant="outlined"
              onClick={() => router.push("/cursos")}
            >
              Cancelar
            </LargeButton>
            <LargeButton
              variant="contained"
              type="submit"
              disabled={Object.keys(errors).length > 0}
              onClick={handleSubmit(handleCreateCourse)}
            >
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
