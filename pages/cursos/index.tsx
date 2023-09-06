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
      title: "Sistemas de Informação",
      description: "Superior",
    },
    {
      title: "Hotelaria",
      description: "Superior",
    },
    {
      title: "Matemática",
      description: "Superior",
    },
  ];

  return (
    <>
      <Head>
        <title>Cursos</title>
      </Head>
      <PageContainer>
        <SideMenu />
        <PageContent>
          <section>
            <HeaderTitle>Cursos</HeaderTitle>
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
