import { type } from "os";
import { Competencia } from "./Components/Competencia";
import { Carousel } from "./Components/Carousel";

export const Homepage = () => {
  return (
    <div className="container text-center">
      <div className="">
        <div className="p-3 ">
          <img
            src={require("../../Images/PublicImages/profile-pic.png")}
            width="300"
          />

          <div className="display-6 fw-bold">Um pouco mais sobre mim </div>
          <p className="fs-5 p-3">
            Olá me chamo Rafael, atualmente, estou cursando o terceiro ano da
            minha formação em Sistemas de informação na Universidade Estadual
            Paulista - Unesp. Estou sempre em busca de atualização e
            aprimoramento, por isso procuro participar de eventos e workshops,
            além de ler livros e artigos e expandir meu networking. Acredito que
            a busca constante pelo conhecimento e desenvolvimento pessoal e
            profissional é fundamental para alcançar sucesso em qualquer
            carreira.
          </p>
          <div className="conteiner-fluid p-2 mb-2 border-top">
            <div>
              <h2 className="pb-3">Principais competências</h2>
              <Carousel img="java-logo-1.png" img2={"ts-logo-512.png"} img3={"pngwing.com (1).png"} img4={"mongoDbWorkshop.png"} width="200" />
              {/* <div className="row p-2">
                <Competencia
                  img="java-logo-1.png"
                  competencia="Java"
                  parafrago="Possuo um pouco mais de um ano e meio desenvolvendo em Java"
                  width="150"
                />

                <Competencia
                  img="pngwing.com (1).png"
                  competencia="React.js"
                  parafrago="Possuo um pouco mais de um ano e meio desenvolvendo em React.js"
                  width="150"
                />
                <Competencia
                  img="ts-logo-512.png"
                  competencia="TypeScript"
                  parafrago="Possuo um pouco mais de um ano desenvolvendo em TypeScript"
                  width="150"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
