import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const ProductTable = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios
      .get("https://pruebatareas.herokuapp.com/api/productos")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleDelete = async (id) => {
    Swal.fire({
      title: `¿Estás seguro de eliminar el producto seleccionado?`,
      text: "Ésta acción no se puede deshacer!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Sí, Eliminalo!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete("https://pruebatareas.herokuapp.com/api/productos/" + id)
          .then((data) => {
            Swal.fire({
              text: "Producto eliminado correctamente",
              icon: "success",
            });
            console.log(data);
            fetchProducts();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };
  return (
    <div id="tareas">
      <div className="row pt-5">
        <div className="col-md-12">
          <div className="tile">
            <div className="tile-body">
              <div className="table-responsive">
                <table className="table table-striped table-hover ">
                  <thead className="table-white">
                    <tr>
                      <th>Código</th>
                      <th>Nombre</th>
         
                      <th>Descripción</th>
     
                      <th>Estado</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((products) => (
                      <tr key={products._id}>
                        <td>{products.code}</td>
                        <td>{products.name}</td>

                        <td>{products.description}</td>

                        <td>
                          <span
                            className={
                              products.status === "Activo"
                                ? "badge badge-pill badge-success"
                                : "badge badge-pill badge-danger"
                            }
                          >
                            {products.status}
                          </span>
                        </td>
                        <td>
                          <Link
                            className="btn btn-sm btn-primary"
                            to={"/edit-product/" + products._id}
                            title="Actualizar"
                          >
                            <i
                              className="fas fa-pencil-alt"
                              aria-hidden="true"
                            ></i>
                          </Link>
                          &nbsp;
                          <button
                            className="btn btn-danger btn-sm"
                            title="Eliminar"
                            onClick={() => handleDelete(products._id)}
                          >
                            <i
                              className="far fa-trash-alt"
                              aria-hidden="true"
                            ></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
