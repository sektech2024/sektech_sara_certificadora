// OutraTela.js (ou qualquer outro componente)
import React, { useEffect, useState } from "react";
import { getPropriedade } from "@/rotas/_lista_propriedade_user";

function Map() {
  const [dadosPropriedade, setDadosPropriedade] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getPropriedade();
        setDadosPropriedade(data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }

    fetchData();
  }, []);

    if (dadosPropriedade && typeof dadosPropriedade === "object") {
      for (let prop in dadosPropriedade) {
        if (typeof dadosPropriedade[prop] === "object") {
          console.log(
            prop,
            "Aqui:",
            Array.isArray(dadosPropriedade[prop])
              ? dadosPropriedade[prop]
              : JSON.stringify(dadosPropriedade[prop], null, 2)
          );
        }
      }
    } else {
      console.log("dadosPropriedade não é um objeto válido.");
    }
  

  // Aqui você pode usar os dadosPropriedade para renderizar na tela
  // Exemplo: {dadosPropriedade && <div>{dadosPropriedade.titulo}</div>}

  return (
    <div>
      {/* {dadosPropriedade.Lista.forEach(element => {
        console.log("Nomes:",element.dgNome)
      })} */}
    </div>
  );
}

export default Map;
