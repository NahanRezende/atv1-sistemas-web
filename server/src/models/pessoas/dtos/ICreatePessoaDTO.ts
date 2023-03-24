export interface ICreatePessoaDTO {
  id: number;
  nome: string;
  rua: string;
  numero: string;
  complemento: string;
  documento: string;
  cidade_id: number;
  tipo_id: number;
}