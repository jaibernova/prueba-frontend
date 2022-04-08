import { Link } from "react-router-dom";
import React, { useState } from "react";
import logoR from "./img/logo.png";
import image from "./img/sign_in.svg";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
const Login = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const URL = "https://pruebatareas.herokuapp.com/api/login";
  const login = async (e) => {
    e.preventDefault();
    console.log("Enviado");
    axios
      .post(URL, {
        email,
        password,
      })
      .then((data) => {
        if (data.data.status === "ok") {
          console.log(data.data);
          InicioSesion();
          localStorage.setItem("token", data.data.token);
          localStorage.setItem("tipo", data.data.user.typeusername);
          console.log(localStorage.getItem("token"));
          console.log(localStorage.getItem("tipo"));
          history.push("/dashboard");
        } else {
          InicioFallido();
        }

        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const InicioSesion = () => {
    Swal.fire("Exitoso", `Se ha iniciado sesion exitosamente!`, "success");
  };
  const InicioFallido = () => {
    Swal.fire("Error!", "Hubo un problema al iniciar sesion!", "error");
  };

  return (
    <div className="content-all">
      <div className="ctn-form">
        <img src={logoR} alt="Logo ferremax" className="logo" />
        <h1 className="tittle">INICIAR SESIÓN</h1>
        <p>Ingrese al sistema si ya está registrado.</p>
        <form onSubmit={login}>
          <label htmlFor="">Correo electrónico</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="msg-error"></span>
          <label htmlFor="">Contraseña</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="msg-error"></span>

          <input type="submit" value="Iniciar Sesión" />
        </form>

        <span className="text-footer">
          ¿Aún no te has registrado? <Link to="/">Regístrate</Link>
        </span>
      </div>

      <div className="ctn-image">
        <img className="image" src={image} alt="" />
      </div>
    </div>
  );
};

export default Login;
