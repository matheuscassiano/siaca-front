import { Loading } from "@/components/Loading";
import SideMenu from "@/components/SideMenu";
import { HeaderTitle } from "@/styles/HeaderTitle";
import { PageContainer, PageContent } from "@/styles/Page";
import httpRequest from "@/utils/requests";
import { Tab, Tabs } from "@mui/material";
import Head from "next/head";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CoursePage() {
  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState<any>();
  const [periods, setPeriods] = useState<any[]>([]);
  const [offers, setOffers] = useState<any[]>([]);
  const [message, setMessage] = useState("");

  const params = useParams();

  useEffect(() => {
    console.log(params);

    httpRequest({
      method: "GET",
      route: `coordenacao/curso/${4}/`,
      setLoading: setLoading,
    })
      .then((response) => {
        setCourse(response);
        for (let i = 1; i <= response.periodos; i++) {
          const periodsValue = periods;
          periodsValue.push({ label: `${i}º Semestres`, value: i });
          setPeriods(periodsValue);
        }
      })
      .catch((error) => setMessage(error));
  }, [params]);

  return (
    <>
      <Head>
        <title>{course?.nome || "Curso"}</title>
      </Head>
      <PageContainer>
        <SideMenu />
        <PageContent>
          <section>
            <HeaderTitle>{course?.nome}</HeaderTitle>
            {loading ? (
              <Loading />
            ) : (
              <Tabs>
                {periods.map((period) => (
                  <Tab key={period.value} label={period.label} />
                ))}
              </Tabs>
            )}
          </section>
        </PageContent>
      </PageContainer>
    </>
  );
}
