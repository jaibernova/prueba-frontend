import React, { useState } from "react";
// import { Link } from 'react-router-dom';
import axios from "axios";
// import Button from 'react-bootstrap/Button';
// import React from 'react'

const FormUsuario = () => {
  const initialFormState = {
    identificacion: "",
    name: "",
    lastname: "",
    telephone: "",
    email: "",
    typeusername: "",
    status: "",
    password: "",
  };
  const [user, setUser] = useState(initialFormState);

  const addTask = (e) => {
    axios
      .post("https://pruebatareas.herokuapp.com//register", user, {
        headers: {
          "Access-Control-Allow_Methods": "POST",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
        } else {
        }
      });
    e.preventDefault();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
    // console.log(event.target.value)
  };

  return (
    <React.Fragment>
      <div className="col-lg-6 pb-4">
        <form onSubmit={addTask}>
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
            <label htmlFor="exampleInputEmail1">Apellido</label>
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
    </React.Fragment>
  );
};
export default FormUsuario;
