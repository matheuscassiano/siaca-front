import { Dispatch, SetStateAction } from "react";

export interface IRequestParams {
  route: string;
  method: string;
  body?: any;
  setLoading?: Dispatch<SetStateAction<boolean>>;
}
