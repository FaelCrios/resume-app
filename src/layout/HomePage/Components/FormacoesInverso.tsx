export const FormacoesInverso: React.FC<{
  img: string;
  width: string;
  titulo: string;
  texto: string;
}> = (props) => {
  return (
    <div className="row g-0 mt-3 border-top bg-warning-subtle position-relative rounded-5">

      <div className="col-md-6 mb-md-0 p-md-4">
        <h5 className="mt-4 fs-4 fw-bold">{props.titulo}</h5>
        <p>{props.texto}</p>
      </div>
      <div className="col-md-6 mb-md-0 p-md-4">
        <img
          src={require(`../../../Images/PublicImages/Certicados/${props.img}`)}
          className=""
          width={props.width}
          alt="..."
        />
      </div>
    </div>
  );
};
