import { List } from "@/components/List";
import SideMenu from "@/components/SideMenu";
import AddButton from "@/styles/AddButton";
import { HeaderTitle } from "@/styles/HeaderTitle";
import { PageContainer, PageContent } from "@/styles/Page";
import SearchField from "@/styles/SearchField";
import { Add } from "@mui/icons-material";
import Head from "next/head";

export default function CoursePage() {
  const courses = [
    {
      title: "Tópicos Avançados de Sistemas de Informações",
      subtitle: "Sistemas de Informação",
      description: "10/10/2023 - 10/12/2023",
    },
    {
      title: "Tópicos Avançados de Sistemas de Informações",
      subtitle: "Sistemas de Informação",
      description: "10/10/2023 - 10/12/2023",
    },
    {
      title: "Tópicos Avançados de Sistemas de Informações",
      subtitle: "Sistemas de Informação",
      description: "10/10/2023 - 10/12/2023",
    },
  ];

  return (
    <>
      <Head>
        <title>Disciplinas</title>
      </Head>
      <PageContainer>
        <SideMenu />
        <PageContent>
          <section>
            <HeaderTitle>Disciplinas</HeaderTitle>
            <SearchField label="Pesquisa" />
            <List items={courses} />
          </section>
          <AddButton color="primary" aria-label="add">
            <Add />
          </AddButton>
        </PageContent>
      </PageContainer>
    </>
  );
}
