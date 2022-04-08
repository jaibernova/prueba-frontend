import SideBar from "../../components/SideBar";
import TopBar from "../../components/TopBar";
import axios from "axios";
import { useEffect } from "react";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

const EditUser = (props) => {
  const history = useHistory();
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios
      .get(
        "https://pruebatareas.herokuapp.com/api/usuarios/" +
          props.match.params.id
      )
      .then((res) => {
        setUser(res.data);
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const submit = (e) => {
    // data to send the api via POST method
    let config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identificacion: user.identificacion,
        name: user.name,
        lastname: user.lastname,
        telephone: user.telephone,
        email: user.email,
        typeusername: user.typeusername,
        status: user.status,
        password: user.password,
      }),
    };

    // if route.params.id present then method is PUT
    let id = "";
    if ("id" in props.match.params) {
      id = props.match.params.id;
      config.method = "PUT";
    }

    // actually send the data
    fetch("https://backend-ferremax.herokuapp.com/api/usuarios/" + id, config)
      .then((res) => {
        if (res.status === "actualizado") {
          alert("actualizado");
        }
      })
      .catch(() => this.error());
    e.preventDefault();
    Swal.fire({
      text: "Modificado correctamente",
      icon: "success",
    }).then(() => {
      history.push("/users");
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
    // console.log(event.target.value)
  };

  return (
    <div id="wrapper">
      {/* <!-- Sidebar --> */}
      <SideBar />
      {/* <!-- End of Sidebar --> */}

      {/* <!-- Content Wrapper --> */}
      <div id="content-wrapper" className="d-flex flex-column">
        {/* <!-- Main Content --> */}
        <div id="content">
          {/* <!-- Topbar --> */}
          <TopBar />
          {/* <!-- End of Topbar --> */}

          {/* <!-- Begin Page Content --> */}
          <div className="container-fluid">
            {/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-left mb-4">
              <h1 className="h3 mb-0 text-gray-800">Actualizar usuario</h1>
            </div>

            <div className="col-lg-6 pb-4">
              <form onSubmit={submit}>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Identificacion</label>
                  <input
                    name="identificacion"
                    type="number"
                    value={user.identificacion}
                    onChange={handleInputChange}
                    placeholder="Número de identificacion"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Nombre</label>
                  <input
                    name="name"
                    type="text"
                    value={user.name}
                    onChange={handleInputChange}
                    aria-describedby="emailHelp"
                    placeholder="Nombre"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">URL IMAGEN</label>
                  <input
                    name="lastname"
                    type="text"
                    value={user.lastname}
                    onChange={handleInputChange}
                    aria-describedby="emailHelp"
                    placeholder="Apellido"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Telefono</label>
                  <input
                    name="telephone"
                    type="text"
                    value={user.telephone}
                    onChange={handleInputChange}
                    aria-describedby="emailHelp"
                    placeholder="Telefono"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={user.email}
                    onChange={handleInputChange}
                    aria-describedby="emailHelp"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Estado</label>
                  <select
                    name="status"
                    type="text"
                    value={user.status}
                    onChange={handleInputChange}
                    aria-describedby="emailHelp"
                    placeholder="Status"
                  >
                    <option value="Activo">Activo</option>
                    <option value="Inactivo">Inactivo</option>
                  </select>
                </div>
                <input type="submit" value="Actualizar usuario" />
              </form>
            </div>

            {/* Content page */}
          </div>
          {/* <!-- /.container-fluid --> */}
        </div>
        {/* <!-- End of Main Content --> */}
      </div>
      {/* <!-- End of Content Wrapper --> */}
    </div>
  );
};

export default EditUser;
