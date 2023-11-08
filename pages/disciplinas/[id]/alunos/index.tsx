import { List } from "@/components/List";
import SideMenu from "@/components/SideMenu";
import { HeaderTitle } from "@/styles/HeaderTitle";
import { PageContainer, PageContent } from "@/styles/Page";
import SearchField from "@/styles/SearchField";
import Head from "next/head";

export default function StudentsPage() {
  const students = [
    { title: "Matheus", subtitle: "Matricula: 202301" },
    { title: "Vanderley", subtitle: "Matricula: 202302" },
    { title: "Isaac", subtitle: "Matricula: 202303" },
    { title: "Marcus", subtitle: "Matricula: 202304" },
    { title: "Denison", subtitle: "Matricula: 202305" },
  ];

  return (
    <>
      <Head>
        <title>Alunos de Estatistica</title>
      </Head>
      <PageContainer>
        <SideMenu />
        <PageContent>
          <section>
            <HeaderTitle>Alunos de Estatistica</HeaderTitle>
            <SearchField label="Pesquisa" />
            <List items={students} />
          </section>
        </PageContent>
      </PageContainer>
    </>
  );
}
