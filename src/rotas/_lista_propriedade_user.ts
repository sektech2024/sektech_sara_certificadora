import axios from "axios";

type ListPropriedadeUser = {
  idPropriedade: number;
  dtTerminoCertificacao: string;
  datahoraAtualizacao: string;
  dgNome: string;
  geoLatitude: number;
  geoLongitude: number;
  dgTipopropriedade: string;
  endUf: string;
  endMunicipio: string;
  idUsuarioPermissao: number;
  idUsuario: number;
  datahorapermissao: string;
  idUsuarioLiberacao: number;
  idPropriedade1: number;
  dtInicio: string;
  dtFim: string;
  podeColetarCurral: string;
  podeProtocolarMovimentos: string;
  protocoloRecepcaoNotifica: string;
  protocoloCpdNotifica: string;
  ehProdutor: string;
  ehColetor: string;
}

type GetResponse = {
    data: ListPropriedadeUser[];
};
  
// interface UrlParametros {
//   token?: string;
// };

// const urlParametros: UrlParametros = {};
// const parametros = new URLSearchParams(window.location.search);

// for (let param of parametros) {
//   urlParametros[param[0]] = param[1];
// }

const api_url = process.env.PROPRIEDADES_USUARIO_API__URL;

console.log(api_url);
console.log("ENTROU");

export const getPropriedade = async () => {
  try {
    if (!api_url) {
      throw new Error("api não encontrada...");
    }
    const token = "51034515070B090D0B1F6342250E7C76766A72730C4E4C7E7B627D6065";
    const { data } = await axios.get<GetResponse>(
      `${api_url}/?TOKENSESSAO=${token}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    console.log("NÃO ENTROU");
    console.log(JSON.stringify(data, null, 4));
    console.log('response status is: ', status)
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.message;
    }
  }
}
console.log("SAIU");
;