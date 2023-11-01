import { List } from "@/components/List";
import SideMenu from "@/components/SideMenu";
import { HeaderTitle } from "@/styles/HeaderTitle";
import { PageContainer, PageContent } from "@/styles/Page";
import httpRequest from "@/utils/requests";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function HomePage() {
  const subjects = [
    {
      title: "Disciplina 2",
    },
    {
      title: "Disciplina 3",
    },
  ];
  // const [subjects, setSubjects] = useState([]);

  // useEffect(() => {
  //   httpRequest({
  //     method: "GET",
  //     route: "coordenacao/listas-disciplinas/",
  //   })
  //     .then((response) => {
  //       if (response) {
  //         setSubjects(
  //           response.map((classroom: { descricao: string }) => ({
  //             title: classroom.descricao,
  //           }))
  //         );
  //       }
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  const tasks = [
    {
      title: "Criar tutórial para Debian",
      subtitle: "Sistemas Operacionais",
      description: "Data de entrega: 06/07/2023",
    },
    {
      title: "Atividade 2",
      subtitle: "Disciplina 2",
      description: "Data de entrega: 06/07/2023",
    },
    {
      title: "Atividade 3",
      subtitle: "Disciplina 3",
      description: "Data de entrega: 06/07/2023",
    },
    {
      title: "Criar tutórial para Debian",
      subtitle: "Sistemas Operacionais",
      description: "Data de entrega: 06/07/2023",
    },
    {
      title: "Atividade 2",
      subtitle: "Disciplina 2",
      description: "Data de entrega: 06/07/2023",
    },
    {
      title: "Atividade 3",
      subtitle: "Disciplina 3",
      description: "Data de entrega: 06/07/2023",
    },
    {
      title: "Criar tutórial para Debian",
      subtitle: "Sistemas Operacionais",
      description: "Data de entrega: 06/07/2023",
    },
    {
      title: "Atividade 2",
      subtitle: "Disciplina 2",
      description: "Data de entrega: 06/07/2023",
    },
    {
      title: "Atividade 3",
      subtitle: "Disciplina 3",
      description: "Data de entrega: 06/07/2023",
    },
    {
      title: "Criar tutórial para Debian",
      subtitle: "Sistemas Operacionais",
      description: "Data de entrega: 06/07/2023",
    },
    {
      title: "Atividade 2",
      subtitle: "Disciplina 2",
      description: "Data de entrega: 06/07/2023",
    },
    {
      title: "Atividade 3",
      subtitle: "Disciplina 3",
      description: "Data de entrega: 06/07/2023",
    },
    {
      title: "Criar tutórial para Debian",
      subtitle: "Sistemas Operacionais",
      description: "Data de entrega: 06/07/2023",
    },
    {
      title: "Atividade 2",
      subtitle: "Disciplina 2",
      description: "Data de entrega: 06/07/2023",
    },
    {
      title: "Atividade 3",
      subtitle: "Disciplina 3",
      description: "Data de entrega: 06/07/2023",
    },
  ];

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <PageContainer>
        <SideMenu />
        <PageContent>
          <section>
            <HeaderTitle>Disciplinas</HeaderTitle>
            <List items={subjects} />
          </section>
          <br />
          {/* <section>
            <HeaderTitle>Atividades pendentes</HeaderTitle>
            <List items={tasks} />
          </section> */}
        </PageContent>
      </PageContainer>
    </>
  );
}
