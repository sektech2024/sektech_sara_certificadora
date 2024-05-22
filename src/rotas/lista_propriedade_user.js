import api from "../api/baseUrl";
import axios from "axios";

export const getDadosPropriedade = async () => {
  try {
    //criar logica para pegar TOKEN automatico
    const response = await api.get(
      "/_lista_propriedades_usuario_/?TOKENSESSAO=540D4515070B090D0B1F6342250E7C76766A72730C4E4C7E7B627D6065"
    );

    if (response.status === 200) {
      const decodedData = decodeSpecialCharacters(response.data);
      return decodedData;
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const { response } = error;
      if (response) {
        if (response.status === 501) {
          throw new Error(response.data.mensagem);
        } 
        throw response.data;
      } else {
        throw error;
      }
    }
  }
};

// Função para decodificar caracteres especiais
const decodeSpecialCharacters = (data) => {
  if (Array.isArray(data)) {
    // Se for um array, mapeie recursivamente cada elemento
    return data.map((item) => decodeSpecialCharacters(item));
  } else if (typeof data === "object" && data !== null) {
    // Se for um objeto, mapeie recursivamente cada propriedade
    const decodedObject = {};
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        decodedObject[key] = decodeSpecialCharacters(data[key]);
      }
    }
    return decodedObject;
  } else if (typeof data === "string") {
    // Se for uma string, decodifique os caracteres especiais
    return decodeURIComponent(data);
  } else {
    // Se não for um array, objeto ou string, retorne o valor original
    return data;
  }
};