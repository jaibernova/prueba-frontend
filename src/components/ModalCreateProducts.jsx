import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import $ from "jquery";

const ModalCreateProducts = () => {
  const history = useHistory();

  const [code, setCode] = useState(0);
  const [name, setName] = useState("");
  const [marca, setMarca] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState(0);
  const [precio, setPrecio] = useState(0);
  const [status, setStatus] = useState("");

  const URL = "https://pruebatareas.herokuapp.com/api/productos";
  const addProduct = async (e) => {
    e.preventDefault();
    console.log("Producto guardado");
    axios
      .post(URL, {
        code,
        name,
        marca,
        category,
        description,
        stock,
        precio,
        status,
      })
      .then((respuesta) => {
        console.log(respuesta);
        setCode(0);
        setName("");
        setMarca("");
        setCategory("");
        setDescription("");
        setStock(0);
        setPrecio(0);
        setStatus("");
        if (respuesta.status !== 200) {
          Swal.fire(
            "Error!",
            "Hubo un problema al crear el registro!",
            "error"
          );
        } else {
          Swal.fire({
            title: "Guardado!",
            text: `El producto ha sido guardado correctamente!`,
            icon: "success",
          }).then(() => {
            window.location.reload();
          });
          $("#modalFormProductos").hide();
          history.push("/products");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div
      className="modal fade"
      id="modalFormProductos"
      tabIndex="-1"
      aria-labelledby="ModalProducts"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="ModalProducts">
              Nuevo producto
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={addProduct}>
              <div className="row">
                <div className="col-md-4">
                  <label htmlFor="code" className="col-form-label">
                    Código
                  </label>
                  <input
                    type="number"
                    required
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="name-text" className="col-form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="name-text"
                  />
                </div>

              </div>
              <div className="row">

                <div className="col-md-4">
                  <label htmlFor="category-text" className="col-form-label">
                    Descripción
                  </label>
                  <input
                    type="text"
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>

              </div>

              <div className="row">

                <div className="col-md-4">
                  <label htmlFor="status-text" className="col-form-label">
                    Estado
                  </label>
                  <select
                    defaultValue={"DEFAULT"}
                    name="status"
                    onChange={(e) => setStatus(e.target.value)}
                    placeholder="Status"
                  >
                    <option value="DEFAULT" disabled selected={true}>
                      Elija una opción
                    </option>
                    <option value="To Do">To Do</option>
                    <option value="in Progress">in Progress</option>
                    <option value="Done">Done</option>
                  </select>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCreateProducts;
