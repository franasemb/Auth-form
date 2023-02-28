import React, { useState, useEffect, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { SwiperButtonNext } from "./hco/SwiperButtonNext";
import { SwiperReset } from "./hco/SwiperReset";

import singUpSvg from "../assets/singUp.svg";
import singUpErrorSvg from "../assets/singUpError.svg";

import passwordSvg from "../assets/password.svg";
import passwordErrorSvg from "../assets/passwordError.svg";

import finishSvg from "../assets/finish.svg";

export default function SingInForm() {
  const [items, setItems] = useState({ name: "", password: "" });

  const [validated, setValidated] = useState(false);

  const [errors, setErrors] = useState({ name: "", password: "" });

  const checkValid = useCallback(() => {
    const checkPassword = (password) => {
      const regex =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])(?=.*[a-zA-Z]).{8,}$/;
      return regex.test(password);
    };

    const errors = {};

    if (items.name !== undefined && !items.name.trim()) {
      errors.name = "";
    } else if (items.name !== undefined && items.name.trim().length < 5) {
      errors.name = "El nombre de usuario debe tener al menos 5 carácteres.";
    }

    if (items.password !== undefined && !items.password.trim()) {
      errors.password = "Por favor ingrese una contraseña.";
    } else if (items.password !== undefined && !checkPassword(items.password)) {
      errors.password =
        "Por favor ingrese una contraseña que tenga más de 8 carácteres, mayúsculas, minúsculas, números y carácteres especiales.";
    }

    setErrors(errors);
    setValidated(Object.keys(errors).length === 0);
  }, [items]);

  useEffect(() => {
    checkValid();
  }, [items, checkValid]);

  const onChange = (event) => {
    const { name, value } = event.target;

    setItems({
      [name]: value,
    });
  };
  function alert() {
    const MySwal = withReactContent(Swal);

    MySwal.fire(
      "¡Has creado tu cuenta correctamente!",
      "Para continuar, haz clic en el botón.",
      "success"
    );
  }
  function resetFoms(newItems) {
    setItems(newItems);

    setValidated(false);
  }

  return (
    <div className="container text-center">
      <Swiper
        slidesPerView={1}
        allowTouchMove={false}
        speed={500}
        color="#faf8ff"
        loop={true}
      >
        <SwiperSlide className="center">
          <div className="card">
            <img
              src={(errors.name && singUpErrorSvg) || singUpSvg}
              alt="Imagen del formario de registro"
            />
            <h2>Bienvenido</h2>
            <h3>Crea tu nombre de usuario</h3>
            <input
              type="text"
              name="name"
              id="name"
              onChange={onChange}
              placeholder="ej. SunnyDayz"
              value={items.name}
              className={(errors.name && "error") || ""}
            />
            {errors.name && <span className="errorName">{errors.name}</span>}
            <SwiperButtonNext
              disabled={validated}
              type="button"
              updateValidated={setValidated}
            >
              Siguiente
            </SwiperButtonNext>
          </div>
        </SwiperSlide>
        <SwiperSlide className="center">
          <div className="card">
            <img
              src={(errors.password && passwordErrorSvg) || passwordSvg}
              alt="Imagen del formario de registro"
            />
            <h2>Seguridad</h2>
            <h3>Ingrese una contraseña segura</h3>
            <input
              onChange={onChange}
              type="password"
              name="password"
              id="password"
              placeholder="Tu contraseña"
              value={items.password}
              className={errors.password && "error"}
            />

            {errors.password && (
              <span className="errorPassword">{errors.password}</span>
            )}

            <SwiperButtonNext disabled={validated} type="button">
              Siguiente
            </SwiperButtonNext>
          </div>
        </SwiperSlide>
        <SwiperSlide className="center">
          <div className="card">
            <img src={finishSvg} alt="Imagen del formario de registro" />
            <h2>Finalizado</h2>
            <h3>Estás listo para continuar</h3>
            <button type="submit" onClick={alert}>
              Siguiente
            </button>

            <SwiperReset
              className="secondary"
              disabled={true}
              type="button"
              updateValidated={setValidated}
              updateItems={resetFoms}
            >
              Reiniciar
            </SwiperReset>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
