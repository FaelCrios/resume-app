export const Experiencias: React.FC<{titulo: string, texto: string, competencias: string}> = (props) => {
    return(
        <div className="container-fluid m-3 border-top bg-body-secondary rounded-5">
      <div className=" p-4 ps-md-0 text-center">
        <h5 className="mt-4 fs-4 fw-bold">{props.titulo}</h5>
        <p className="">{`Atribuição: ${props.texto}`}</p>
        <p className="fw-bold">{`${props.competencias}`}</p>
      </div>
    </div>
    )
}