export const Formacoes: React.FC<{
  img: string;
  width: string;
  titulo: string;
  texto: string;
}> = (props) => {
  return (
    <div className="row g-0 mt-3 border-top bg-body-secondary position-relative rounded-5">
      <div className="col-md-5 mb-md-0 p-md-4">
        <img
          src={require(`../../../Images/PublicImages/Certicados/${props.img}`)}
          className=""
          width={props.width}
          alt="..."
        />
      </div>
      <div className="col-md-6 p-4 ps-md-0">
        <h5 className="mt-4 fs-4 fw-bold">{props.titulo}</h5>
        <p>{props.texto}</p>
      </div>
    </div>
  );
};
