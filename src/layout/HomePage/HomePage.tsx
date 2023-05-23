import { Competencia } from "./Components/Competencia";

export const Homepage = () => {
  return (
    <div className="container text-center">
      <div className="">
        <div className="p-3 ">
          <img
            src={require("../../Images/PublicImages/profile-pic.png")}
            width="300"
          />
          <h1 className="display-5 fw-bold">Sobre mim</h1>
          <p className="fs-4">
            {` Olá me chamo Rafael, atualmente, estou cursando o terceiro ano da minha formação em
            Sistemas de informação na Universidade Estadual Paulista - Unesp.`}
            <p>
              {"  "} Estou sempre em busca de atualização e aprimoramento, por
              isso procuro participar de eventos e workshops, além de ler livros
              e artigos e expandir meu networking. Acredito que a busca
              constante pelo conhecimento e desenvolvimento pessoal e
              profissional é fundamental para alcançar sucesso em qualquer
              carreira.
            </p>
          </p>
          <div className="conteiner-fluid p-2 mb-2 border-top">
            <div className="">
              <h2>Competências</h2>
              <div className="row p-2">
                <Competencia
                  img="java-logo-1.png"
                  competencia="Java"
                  parafrago="Possuo um pouco mais de um ano e meio desenvolvendo em Java"
                  width="300"
                />

                <Competencia
                  img="pngwing.com (1).png"
                  competencia="React.js"
                  parafrago="Possuo um pouco mais de um ano e meio desenvolvendo em React.js"
                  width="300"
                />
                <Competencia
                  img="ts-logo-512.png"
                  competencia="TypeScript"
                  parafrago="Possuo um pouco mais de um ano desenvolvendo em TypeScript"
                  width="300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
