export const ProjetoUnitario: React.FC<{
  url: string;
  img: any;
  titulo: string;
  paragrafo: any;
  width: any;
}> = (props) => {
  return (
    <div className="col-md-6">
    <div className="h-100 p-5 bg-body-tertiary border rounded-3">
      <a
        href={props.url}
      >
        <img
          src={require(`../../../Images/PublicImages/${props.img}`)}
          onClick={() => {}}
          width={props.width} 
        />
      </a>
      <h2 className="fw-normal">{props.titulo}</h2>
      <p>
        {props.paragrafo}
      </p>
    </div>
    </div>
  );
};
