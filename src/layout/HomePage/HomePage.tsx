
import { Carousel } from "./Components/Carousel";
import { PrincipaisProjetos } from "./Components/PrincipaisProjetos";
import { Formacoes } from "./Components/Formacoes";
import { FormacoesInverso } from "./Components/FormacoesInverso";
import { Experiencias } from "./Components/Experiencias";

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
          {/* Competencias */}
          <div className="conteiner-fluid p-2 mb-2 border-top">
            <h2 className="pb-3">Principais competências</h2>
            <div>
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
          {/* Experiencias */}
          <div className="container-fluid p-2 mb-2 border-top">
            <h2 className="mt-5" id="pformacoes">
              Experiências
            </h2>
            <Experiencias
              titulo="Kyraly Marketing Digital"
              texto="Realiza implementações de SEO nos CMS: VTEX, Shopify, Nuvemshop, VNDA, WordPress, dentre outros...
Realiza implementações manuais do escopo de SEO técnico proposto por analistas da área com auxílio de colaborador mais senior
Elaboração de scripts de forma manual e automatizada, nas stacks: HTML, CSS3, JavaScript, PhP e Liquid
Pesquisa soluções em documentações
Acompanha na implementação de soluções de colaboradores mais experientes"
              competencias="Java · PHP · HTML5 · Inglês · CSS · JavaScript · Liquid · Vtex · Shopify"
            />
          </div>
          {/* Formações */}
          <div className="ontainer-fluid p-2 mb-2 border-top">
            <h2 className="mt-5" id="pformacoes">
              Principais formações
            </h2>
            <Formacoes
              img="unesplogo.png"
              width="200"
              titulo="Formação acadêmica: Bacharelado em Sistemas de informação
              "
              texto="Atualmente estou em meu terceiro ano, com previsão de formação para dezembro de 2024. Minha formação tem foco no estudo de computação e suas bases teóricas e também o estudo de gestão para gerenciamento de projetos e empresas"
            />
            <FormacoesInverso
              img="javaCertificado.jpg"
              width="300"
              titulo="Java completo 2023 Programação Orientada a Objetos + Projetos"
              texto="
            O curso é focado nos fundamentos da linguagem Java e a programação orientada a objetos. Ele aborda conceitos essenciais, como classes, objetos, herança, polimorfismo e encapsulamento. Além disso, possui fundamentação sobre as frameworks: JDBC, JavaFX, SpringBoot, JPA / Hibernate, Spring Data JPA, Spring Data MongoDB e suas ferramentas de uso: Git / Github e Maven"
            />
            <Formacoes
              img="certSpringBoot.png"
              width="300"
              titulo="Formação: Java e Spring Boot"
              texto="Formação focada em Java Spring Boot, sendo usado como ferramenta de desenvolvimento para aplicativos web e microserviços com Spring Framework. Esta formação forneceu os conceitos sobre utilização de testes unitários para aplicações, utilizações de boas práticas SOLID para desenvolvimento e conceitos de documentação e versionamento de projeto, e por fim utilização de JWT para segurança de projeto"
            />
            <FormacoesInverso
              img="sqlCerti.png"
              width="300"
              titulo="Consultas SQL: avançando no SQL com MySQL"
              texto=" Formação com foco no aprendizado de SQL com o uso de MySql, começando do básico e seguindo até conteúdos mais avançados.
              "
            />
            <Formacoes
              img="dockerCerti.png"
              width="300"
              titulo="Docker: criando e gerenciando containers"
              texto="Formação que fornece o conhecimento básico para utilização de Docker e seus containers. Ensinando como s subir um container, criar e personalizar o mesmo e conceitos de persistência. Todos esses pontos utilizando o Docker Compose"
            />
            <FormacoesInverso
              img="ReactCerti.png"
              width="300"
              titulo="React com JavaScript: lidando com arquivos estáticos"
              texto="Formação para o aprendizado de conceitos básicos para utilização de React.js, para entender organização de código e componentização"
            />
            <Formacoes
              img="reactNativeCerti.png"
              width="300"
              titulo="React Native: utilizando e criando Hooks
              "
              texto="Formação para o aprendizado de React Native, fornecendo base para o desenvolvimento de aplicações mobile. Esta formação tem foco na criação de hooks personalizados"
            />
            <FormacoesInverso
              img="ScrumCerti.png"
              width="300"
              titulo="Scrum: agilidade em seu projeto
              "
              texto="Formação para o aprendizado de conceitos de metodologias ágeis, fornecendo base de conhecimento sobre processos ágeis, aplicações no mercado e como  melhorar entregas e desempenho do time"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
