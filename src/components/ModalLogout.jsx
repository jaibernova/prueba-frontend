import React from "react";
import { useHistory } from "react-router-dom";
const ModalLogout = () => {
  const history = useHistory();
  const clearStorage = () => {
    localStorage.removeItem("token");
    history.push("/login")
  };
  return (
    <React.Fragment>
      {/* <!-- Logout Modal--> */}
      <div
        className="modal fade"
        id="logoutModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                ¿Desea Salir del Sistema?
              </h5>
              <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              Seleccione "Cerrar sesión" a continuación si está listo para
              finalizar su sesión actual.
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                type="button"
                data-dismiss="modal"
              >
                Cancelar
              </button>
              <button className="btn btn-warning" onClick={ () => clearStorage()} data-dismiss="modal">
                Cerrar sesión
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ModalLogout;
