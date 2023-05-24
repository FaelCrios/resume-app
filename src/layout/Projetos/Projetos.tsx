import { ProjetoUnitario } from "./Components/ProjetoUnitario";

export const Projetos = () => {
  return (
    <div className="container text-center">
      <div className="conteiner-fluid p-2 mb-2 border-top">
        <div className="">
          <h2 className="p-2 fw-bold">Todos os meus projetos</h2>
          <div className="row align-items-md-stretch pt-2">
            <ProjetoUnitario
              url="https://github.com/FaelCrios/workshop-javafx-jdbc"
              img="workshop-java-jdbc.png"
              titulo="WORKSHOP-JAVAFX-JDBC"
              paragrafo="Projeto inteiro foi desenvolvido com Java e JavaFx e Jdbc, se tratando de uma interface gráfica para cadastro de vendedores e departamentos de uma loja.

              Além de buscar a melhora na organização do código e utilização do padrão MVC de desenvolvimento
              
              Todo o projeto foi feito com foco no aprendizado da linguagem e sua framework"
              width="300"
            />
            <ProjetoUnitario
              url="https://github.com/FaelCrios/workshop-mongodb"
              img="mongoDbWorkshop.png"
              titulo="WORKSHOP-API-RESTFUL-MONGODB"
              paragrafo="Projeto inteiro feito em java com utilização de Spring-bootE MongoDB com foco no estudo da linguagem e aperfeiçoamento de técnicas, projeto desenvolvido no curso de java da DevSuperior
              A aplicacação em questão é um sistema simples de comentarios em posts para estudos de como funciona a integração com MongoDB"
              width="300"
            />
            <ProjetoUnitario
              url="https://github.com/FaelCrios/Spring-boot-api-hospital"
              img="SpringApiHospital.png"
              titulo="SPRING-BOOT-API-HOSPITAL"
              paragrafo="O projeto se baseia em um sistema de cadastro para médicos e pacientes dentro de um hospital. Sistema feito em Java com Java Spring Boot e visando as boas práticas de produção de software."
              width="300"
            />
            <ProjetoUnitario
              url="https://github.com/FaelCrios/Projeto-de-Jogo-em-servidor---Socket"
              img="jogoWebSocket.png"
              titulo="JogoWebSocket-Multiplayer "
              paragrafo="O projeto se trata de um jogo desenvolvido na faculdade para o aprendizado de threads e processos web socket, desenvolvido com JavaSwing uma widget toolkit GUI."
              width="300"
            />
            <ProjetoUnitario
              url="https://github.com/FaelCrios/workshop-springboot3-jpa"
              img="sprinbootJpa.png"
              titulo="SpringBoot JPA "
              paragrafo="Desenvolvido com o propósito de consolidar o conhecimento em Java e JPA, se trata de um console para cadastro de informações"
              width="300"
            />
            <ProjetoUnitario
              url="https://github.com/FaelCrios/ProjetoCondado"
              img="condadoFoto.png"
              titulo="Forum de Senhor dos anéis - Condado"
              paragrafo="Desenvolvido em uma maratona de programação, este projeto foi desenvolvido com React.js e Next com o intuito de ser um forum e um bate papo"
              width="300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
