import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import $ from "jquery";

const ModalCreateUsers = () => {
  const history = useHistory();

  const [identificacion, setIdentificacion] = useState(0);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [telephone, setTelephone] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [typeusername, setTypeUserName] = useState("");

  const URL = "https://pruebatareas.herokuapp.com/api/register";
  const addProduct = async (e) => {
    e.preventDefault();
    console.log("Enviado");
    axios
      .post(URL, {
        identificacion,
        name,
        lastname,
        telephone,
        email,
        password,
        status,
        typeusername,
      })
      .then((respuesta) => {
        console.log(respuesta);
        setIdentificacion(0);
        setName("");
        setLastname("");
        setTelephone(0);
        setEmail("");
        setPassword("");
        setStatus("");
        setTypeUserName("");
        if (respuesta.status === 200) {
          Swal.fire({
            title: "Guardado!",
            text: `El usuario ha sido creado exitosamente!`,
            icon: "success",
          }).then(() => {
            window.location.reload();
          });
          $("#modalFormUsuarios").hide();
          history.push("/users");
        } else {
          Swal.fire(
            "Error!",
            "Hubo un problema al crear el registro!",
            "error"
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const Error = () => {
    Swal.fire("No tiene los permisos necesarios");
  };
  return (
    <div
      className="modal fade"
      id="modalFormUsuarios"
      tabIndex="-1"
      aria-labelledby="ModalUsers"
      aria-hidden="true"
    >


      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="ModalUsers">
              Nuevo Usuario
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
          { localStorage.getItem("tipo") == "Administrador" ?  
            <form onSubmit={addProduct}>
              <div className="row">
                <div className="col-md-4">
                  <label htmlFor="code" className="col-form-label">
                    N° Identificacion
                  </label>
                  <input
                    type="number"
                    required
                    value={identificacion}
                    onChange={(e) => setIdentificacion(e.target.value)}
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="name-text" className="col-form-label">
                    Nombres
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="name-text"
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="marca-text" className="col-form-label">
                    URL IMAGEN
                  </label>
                  <input
                    type="text"
                    required
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <label htmlFor="phone-number" className="col-form-label">
                    Telefono
                  </label>
                  <input
                    type="number"
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="e-mail" className="col-form-label">
                    Correo
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="status-select" className="col-form-label">
                    Estado
                  </label>
                  <select
                    defaultValue={"DEFAULT"}
                    name="status"
                    required
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="DEFAULT" disabled selected={false}>
                      Elija una opción
                    </option>
                    <option value="Activo">Activo</option>
                    <option value="Inactivo">Inactivo</option>
                  </select>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <label htmlFor="rol-select" className="col-form-label">
                    Rol
                  </label>
                  <select
                    defaultValue={"DEFAULT"}
                    name="rol"
                    required
                    onChange={(e) => setTypeUserName(e.target.value)}
                  >
                    <option selected={true} disabled value="DEFAULT">
                      Elija una opción
                    </option>
                    <option value="Administrador">Administrador</option>
                    <option value="Operario">Operario</option>


                  </select>
                </div>
                <div className="col-md-4">
                  <label htmlFor="password" className="col-form-label">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <br />
              <div className="modal-footer">
                <button
                  type="reset"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancelar
                </button>
                <button type="submit" className="btn btn-success">
                  Crear
                </button>
              </div>
            </form>
            : Error()}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ModalCreateUsers;
