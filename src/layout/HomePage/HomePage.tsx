import { type } from "os";
import { Competencia } from "./Components/Competencia";
import { Carousel } from "./Components/Carousel";
import { PrincipaisProjetos } from "./PrincipaisProjetos";
import { Formacoes } from "./Components/Formacoes";

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

          <div className="d-inline-flex align-items-center pb-2">
            <div className="col p-2">
              <a href="https://www.linkedin.com/in/rafael-colin-rios/">
                <img
                  src={require("../../Images/PublicImages/LI-In-Bug.png")}
                  width="50"
                  height="46"
                />
              </a>
            </div>
            <div className="col p-2">
              <a href="https://github.com/FaelCrios">
                <img
                  src={require("../../Images/PublicImages/github-mark.png")}
                  width="48"
                  height="48"
                />
              </a>
            </div>
          </div>
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
          <div className="container-fluid border-top">
            <h2 className="mt-5" id="scrollspyHeading1">Principais formações</h2>
            <Formacoes
              img="javaCertificado.jpg"
              width="300"
              titulo="Java"
              texto="
            O curso é focado nos fundamentos da linguagem Java e a programação orientada a objetos. Ele aborda conceitos essenciais, como classes, objetos, herança, polimorfismo e encapsulamento. Além disso, possui fundamentação sobre as frameworks: JDBC, JavaFX, SpringBoot, JPA / Hibernate, Spring Data JPA, Spring Data MongoDB e suas ferramentas de uso: Git / Github e Maven"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
