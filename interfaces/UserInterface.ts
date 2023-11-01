export interface IUser {
  lattes: string;
  area_atuacao: string;
  user_id: number | undefined;
  user_username: string;
  user_first_name: string;
  user_last_name: string;
  user_email: string;
  user_cpf: string;
  user_telefone: string;
  user_endereco: string;
  user_bairro: string;
  user_cidade: string;
  user_estado: string;
  user_user_type: string;
  user_is_active: boolean;
}

export interface ICleanUser {
  lattes: string;
  area_atuacao: string;
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  cpf: string;
  telefone: string;
  endereco: string;
  bairro: string;
  cidade: string;
  estado: string;
  user_type: string;
  is_active: boolean;
}
