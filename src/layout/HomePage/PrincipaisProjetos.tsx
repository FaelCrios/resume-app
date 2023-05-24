import { Link } from "react-router-dom";

export const PrincipaisProjetos: React.FC<{
  titulo: string;
  texto: string;
  url: string;
  github: string;
}> = (props) => {
  return (
    <div className="p-5 mt-4 bg-body-tertiary rounded-5 ">
      <div className="container-fluid py-4 text-start">
        <h1 className="display-5 fw-bold fs-4 ">{props.titulo}</h1>
        <p className=" fs-6 text-start">{props.texto}</p>
        <div className="row align-items-md-stretch">
          <div className="col-md-6">
            <Link to={`/projeto/${props.url}`}>
              <button className="btn btn-outline-secondary " type="button">
                Ver mais
              </button>
            </Link>
          </div>

          <div className="col-md-6">
            <a href={props.github}>
              <button className="btn btn-outline-secondary " type="button">
                Ver no github
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
