import { List } from "@/components/List";
import SideMenu from "@/components/SideMenu";
import { HeaderTitle } from "@/styles/HeaderTitle";
import { PageContainer, PageContent } from "@/styles/Page";
import Head from "next/head";

export default function HomePage() {
  const disciplines = [
    {
      title: "Sistemas Operacionais",
    },
    {
      title: "Disciplina 2",
    },
    {
      title: "Disciplina 3",
    },
    {
      title: "Sistemas Operacionais",
    },
    {
      title: "Disciplina 2",
    },
    {
      title: "Disciplina 3",
    },
    {
      title: "Sistemas Operacionais",
    },
    {
      title: "Disciplina 2",
    },
    {
      title: "Disciplina 3",
    },
  ];

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
            <List items={disciplines} />
          </section>
          <br />
          <section>
            <HeaderTitle>Atividades pendentes</HeaderTitle>
            <List items={tasks} />
          </section>
        </PageContent>
      </PageContainer>
    </>
  );
}
