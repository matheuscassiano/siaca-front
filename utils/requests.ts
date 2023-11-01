import { IRequestParams } from "@/interfaces/requestParamsInterface";

const baseAPI = "http://18.217.136.84";

export default async function httpRequest({
  route,
  method,
  body,
  setLoading,
}: IRequestParams): Promise<any> {
  try {
    const token = localStorage.getItem("access");
    const requestData: RequestInit = {
      method: method.toUpperCase(),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    if (method.toUpperCase() === "GET") {
      delete requestData.body;
    }

    const response = await fetch(`${baseAPI}/${route}`, requestData);
    const result = response.status !== 204 ? await response.json() : response;

    if (response.ok && result) {
      return result;
    } else {
      const message = result.detail || result;
      throw message;
    }
  } catch (error) {
    if (typeof error === "string") {
      throw error;
    } else {
      throw "Erro ao executar requisição!"
    }
  } finally {
    if (setLoading) {
      setLoading(false);
    }
  }

  return null;
}
