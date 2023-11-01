import SideMenu from "@/components/SideMenu";
import CourseFormContainer, { CourseButtonContainer } from "@/styles/Form";
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

const schema = z.object({
  lugares: z.coerce.number().min(2, "Deve haver ao menus 2 lugares"),
  descricao: z.string().min(20, "A descrição deve ter ao menus 20 caracteres"),
});

type FormProps = z.infer<typeof schema>;

export default function CreateClassroomPage() {
  const [message, setMessage] = useState("");

  const router = useRouter();

  const handleClose = (_?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setMessage("");
  };

  const handleCreateClassroom = (body: FormProps) => {
    httpRequest({
      route: "coordenacao/salas/",
      method: "POST",
      body,
    })
      .then(() => router.push("/salas"))
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
        <title>Salas</title>
      </Head>
      <PageContainer>
        <SideMenu />
        <PageContent>
          <HeaderTitle>Cadastrar Sala</HeaderTitle>
          <CourseFormContainer>
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
                label="Lugares"
                type="number"
                min="1"
                {...register("lugares")}
              />
              {errors.lugares?.message && (
                <FormHelperText error>{errors.lugares?.message}</FormHelperText>
              )}
            </FormControl>
          </CourseFormContainer>
          <CourseButtonContainer>
            <LargeButton
              variant="outlined"
              onClick={() => router.push("/salas")}
            >
              Cancelar
            </LargeButton>
            <LargeButton
              variant="contained"
              disabled={Object.keys(errors).length > 0}
              onClick={handleSubmit(handleCreateClassroom)}
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
