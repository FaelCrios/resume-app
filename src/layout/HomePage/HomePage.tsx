import { type } from "os";
import { Competencia } from "./Components/Competencia";
import { Carousel } from "./Components/Carousel";
import { PrincipaisProjetos } from "./PrincipaisProjetos";

export const Homepage = () => {
  return (
    <div className="container text-center">
      <div className="">
        <div className="p-3 ">
          <img
            src={require("../../Images/PublicImages/profile-pic.png")}
            width="300"
          />
          <div className="display-7 fw-bold fs-4">Um pouco mais sobre mim </div>
          <p className="fs-7 p-3">
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
              <Carousel
                img="java-logo-1.png"
                img2={"ts-logo-512.svg"}
                img3={"react.png"}
                img4={"spring.svg"}
                width="200"
              />
            </div>
            <div>
              <h2 className=" container-fluid pt-5">Principais Projetos</h2>
            </div>
            <div>
              <div className="row align-items-md-stretch">
                <div className="col-md-6">
                  <PrincipaisProjetos
                    titulo="Aplicativo JavaFx com Jdbc"
                    texto="Aplicação inteira feita com Java,
                     e JavaFx para simular uma plataforma de cadastro de uma loja de departamento,
                      sendo possivel cadastrar seus clientes e vendedores"
                    url="projeto1"
                    github="https://github.com/FaelCrios/workshop-javafx-jdbc"
                  />
                </div>
                <div className="col-md-6">
                  <PrincipaisProjetos
                    titulo="Api Restfull com Spring Boot"
                    texto="O projeto se baseia em um sistema de cadastro para médicos e pacientes dentro de um hospital.
                     Sistema feito em Java com Java Spring Boot e visando as boas práticas de produção de software."
                    url="projeto2"
                    github="https://github.com/FaelCrios/Spring-boot-api-hospital"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
