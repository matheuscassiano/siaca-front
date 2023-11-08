import { List } from "@/components/List";
import SideMenu from "@/components/SideMenu";
import AddButton from "@/styles/AddButton";
import { HeaderTitle } from "@/styles/HeaderTitle";
import { PageContainer, PageContent } from "@/styles/Page";
import SearchField from "@/styles/SearchField";
import { Add } from "@mui/icons-material";
import Head from "next/head";
import { useRouter } from "next/router";

export default function StudentsPage() {
  const router = useRouter();

  const students = [
    {
      title: "Matheus Cassiano",
      subtitle: "Sistemas de Informação",
      description: "matheuscassiano.ts@gmail.com",
    },
    {
      title: "Matheus Cassiano",
      subtitle: "Sistemas de Informação",
      description: "matheuscassiano.ts@gmail.com",
    },
    {
      title: "Matheus Cassiano",
      subtitle: "Sistemas de Informação",
      description: "matheuscassiano.ts@gmail.com",
    },
    {
      title: "Matheus Cassiano",
      subtitle: "Sistemas de Informação",
      description: "matheuscassiano.ts@gmail.com",
    },
    {
      title: "Matheus Cassiano",
      subtitle: "Sistemas de Informação",
      description: "matheuscassiano.ts@gmail.com",
    },
    {
      title: "Matheus Cassiano",
      subtitle: "Sistemas de Informação",
      description: "matheuscassiano.ts@gmail.com",
    },
  ];

  return (
    <>
      <Head>
        <title>Alunos</title>
      </Head>
      <PageContainer>
        <SideMenu />
        <PageContent>
          <section>
            <HeaderTitle>Alunos</HeaderTitle>
            <SearchField label="Pesquisa" />
            <List items={students} />
          </section>
          <AddButton
            color="primary"
            aria-label="add"
            onClick={() => router.push("/alunos/cadastro")}
          >
            <Add />
          </AddButton>
        </PageContent>
      </PageContainer>
    </>
  );
}
