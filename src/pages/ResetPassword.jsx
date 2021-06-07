import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { isSecurePassword } from "../utils/regularExpression";
import jwt from "jwt-decode";
import { EmployeeService } from "../services/employe.service";
import { toast } from "react-toastify";

export default function ResetPassword() {
  const { token } = useParams();
  const [data, setData] = useState({ password: "", repeatPassword: "" });
  const [tokenInfo, setTokenInfo] = useState();
  const empService = new EmployeeService();
  const [errors, setErrors] = useState({
    empty: false,
    notEqual: false,
    notConfirm: false,
    insecure: false,
    short: false,
  });
  const onchange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setErrors({
      empty: false,
      notEqual: false,
      notConfirm: false,
      insecure: false,
      short: false,
    });
  };
  const onsubmit = (e) => {
    e.preventDefault();
    setErrors({
      empty: false,
      notEqual: false,
      notConfirm: false,
      insecure: false,
      short: false,
    });
    if (data.password === "") {
      setErrors({ ...errors, empty: true });
      return;
    }
    if (data.repeatPassword === "") {
      setErrors({ ...errors, notConfirm: true });
      return;
    }
    if (!isSecurePassword(data.password)) {
      setErrors({ ...errors, insecure: true });
      return;
    }
    if (data.password !== data.repeatPassword) {
      setErrors({ ...errors, notEqual: true });
      return;
    }
    if (data.password.length <= 7) {
      setErrors({ ...errors, short: true });
      return;
    }
    const createdPassword = {
      newPassword: data.password,
    };
    empService.resetPassword(createdPassword, token).then((res) => {
      if (res.ok) {
        toast.success("Se cambio la password");
        window.location.href = "/";
        return;
      }
      toast.error("Ah ocurrido un error inesperado!!");
    });
  };
  const setTokenToSate = () => {
    try {
      if (token) {
        setTokenInfo(token && jwt(String(token)));
      }
    } catch (error) {
      window.location.href = "/";
    }
  };
  useEffect(() => {
    return setTokenToSate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);
  return (
    <>
      {typeof token === "undefined" ? (
        <span>Cargando............</span>
      ) : (
        <>
          {tokenInfo && (
            <div className="flex justify-center items-center content-center">
              <div className="m-40 shadow p-8 flex-row rounded">
                <form onSubmit={onsubmit}>
                  <div className="flex flex-col">
                    <label className="text-sm font-ligth">Password</label>
                    <input
                      type="password"
                      name="password"
                      onChange={onchange}
                      placeholder="Ingresa tu nueva password"
                      className="border rounded px-4 py-1 text-sm mt-2 w-96"
                    />
                    {errors.empty && (
                      <span className="mt-2 text-red-500 font-small font-normal">
                        No puedes dejar este campo vacio
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-ligth">
                      Repeat password
                    </label>
                    <input
                      onChange={onchange}
                      type="password"
                      name="repeatPassword"
                      placeholder="Confirma tu nueva password"
                      className="border rounded px-4 py-1 text-sm mt-2 w-96"
                    />
                    {errors.notConfirm && (
                      <span className="mt-2 text-red-500 font-small font-normal">
                        Debes confirmar tu password
                      </span>
                    )}
                    {errors.notEqual && (
                      <span className="mt-2 text-red-500 font-small font-normal">
                        Las password no coinciden
                      </span>
                    )}
                    {errors.insecure && (
                      <span className="mt-2 text-red-500 font-small font-normal">
                        Tu password debe incluir numeros signos y mayusculas
                      </span>
                    )}
                    {errors.insecure && (
                      <span className="mt-2 text-red-500 font-small font-normal">
                        Tu password debe ser mayor a 8 caracteres
                      </span>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="bg-green-400 w-full text-white rounded text-sm py-1 mt-2"
                  >
                    Guardar
                  </button>
                </form>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
