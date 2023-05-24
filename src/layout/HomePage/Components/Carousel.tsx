export const Carousel: React.FC<{
  img: any;
  img2: any;
  img3: any;
  img4: any;
  width: any;
}> = (props) => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide bg-black pb-5 pt-5 w-100 h-100 my-1" >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="">
            <img
              src={require(`../../../Images/PublicImages/${props.img}`)}
              className="d-center sm opacity-50"
              alt="..."
              width={props.width}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Java</h5>
              <p>
                Meus estudos em java começaram a partir da faculdade, onde pude aprender Orientação a objetos, e a partir deste ponto se tornou a linguagem Back-end que mais possuo conhecimento
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={require(`../../../Images/PublicImages/${props.img2}`)}
            className="d-center sm opacity-50"
            alt="..."
            width={props.width}
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>TypeScript</h5>
            <p>Sendo uma das linguagens que mais me identifiquei por sua tipagem de conteúdo, utilizo TypeScript hoje como minha principal linguagem para desenvolvimento front-end</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={require(`../../../Images/PublicImages/${props.img3}`)}
            className="d-center opacity-50"
            alt="..."
            width={props.width}
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>React.js</h5>
            <p>Framework que possuo mais afinidade para desenvolvimento front-end.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
