import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <React.Fragment>
      {/* <!-- 404 Error Text --> */}
      <div className="text-center" id="error404">
        <div className="error mx-auto" data-text="404">
          404
        </div>
        <p className="lead text-gray-800 mb-5">Pagina No Encontrada</p>
        <p className="text-gray-500 mb-0">
          La URL solicitada no se encontró en este servidor.
        </p>
        <Link to="/dashboard">&larr; Regresar al sistema</Link>
      </div>
    </React.Fragment>
  );
};

export default Error404;
