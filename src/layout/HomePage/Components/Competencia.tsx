export const Competencia: React.FC<{ img: any, competencia: string, parafrago: string, width: any }> = (props) => {
    return(
        <div className="col-lg-4 p-2">
                  {/* "../../../Images/PublicImages/java-logo-1.png" */}
                  <img
                    src={require(`../../../Images/PublicImages/${props.img}`)}
                    width={props.width}  
                />
                  <h2 className="fw-normal">{props.competencia}</h2>
                  <p>
                    {props.parafrago}
                  </p>
                </div>
    )
}