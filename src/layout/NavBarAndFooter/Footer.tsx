import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="bg-dark p-5">
      <footer className="container">
        <div className="d-flex mb-3 text-light ">
          <div className="me-auto p-2">Email: rcolinrios@gmail.com
</div>
          <div className="p-2">
            <a href='https://www.linkedin.com/in/rafael-colin-rios/'>
            <img src={require("../../Images/PublicImages/LI-In-Bug.png")} width='30' height='26'/>
            </a>
          </div>
          <div className="p-2">
            <a href="https://github.com/FaelCrios">
            <img src={require("../../Images/PublicImages/github-mark-white.png")} width='24' height='24'/>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
