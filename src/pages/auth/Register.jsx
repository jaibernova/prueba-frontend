import { Link } from "react-router-dom";
import React, { useState } from "react";
import logoR from "./img/logo.png";
import image from "./img/logistic.svg";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
const Register = () => {
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
  const addNewUser = async (e) => {
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
          Swal.fire(
            "Guardado!",
            `El usuario ha sido creado exitosamente!`,
            "success"
          );
          history.push("/login");
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

  return (
    <div className="content-all-registrer">
      <div className="ctn-form">
        <img src={logoR} alt="Logo ferremax" className="logo" />
        <h1 className="tittle">REGISTRARTE</h1>
        <p>Es rápido y fácil.</p>
        <form onSubmit={addNewUser}>
          <label htmlFor="">Número de Identificación</label>
          <input
            type="number"
            required
            value={identificacion}
            onChange={(e) => setIdentificacion(e.target.value)}
          />
          <label htmlFor="">Nombres</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name-text"
          />
          <label htmlFor="">Apellidos</label>
          <input
            type="text"
            required
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <label htmlFor="">Teléfono</label>
          <input
            type="number"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
          />
          <label htmlFor="">Correo electrónico</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="rol-select" className="col-form-label">
            Rol
          </label>
          <select
            defaultValue={"DEFAULT"}
            name="rol"
            required
            onChange={(e) => setTypeUserName(e.target.value)}
          >
            <option value="DEFAULT" disabled selected={false}>
              Elija una opción
            </option>
            <option value="Administrador">Administrador</option>
            <option value="Operativo">Operativo</option>

          </select>
          <label htmlFor="">Contraseña</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input type="submit" value="Registrarte" />
        </form>

        <span className="text-footer">
          ¿Ya tienes una cuenta? <Link to="/login">Iniciar Sesión</Link>
        </span>
      </div>

      <div className="ctn-image">
        <img className="image" src={image} alt="" />
      </div>
    </div>
  );
};

export default Register;
