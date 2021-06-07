import { useState } from "react";
import { EmployeeService } from "../services/employe.service";
import { isEmail } from "../utils/regularExpression";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [errrors, setErrors] = useState({
    notEmail: false,
    empty: false,
    emailOk: false,
    emailInvalid: false,
  });
  const authService = new EmployeeService();
  const sendEmail = () => {
    setErrors({
      notEmail: false,
      email: false,
      emailOk: false,
      emailInvalid: false,
    });
    if (email === "") {
      setErrors({ ...errrors, empty: true });
      return;
    }
    if (!isEmail(email)) {
      setErrors({ ...errrors, notEmail: true, empty: false });
      return;
    }
    authService.forgotPassword(email).then((res) => {
      if (res.ok) {
        setErrors({ ...errrors, emailOk: true, emailInvalid: false });
        return;
      }
      setErrors({ ...errrors, emailInvalid: true });
    });
  };
  return (
    <div className="p-10 flex justify-items-center content-center justify-center items-center w-full h-screen">
      <div className="w-96 h-auto shadow rounded p-10">
        <input
          onChange={(e) => setEmail(e.target.value)}
          className=" border w-full rounded text-xs py-1 px-4"
          placeholder="Ingresa tu email"
        />
        <div className="flex-col flex mt-3">
          {errrors.empty && (
            <span className="text-red-500 mt-2 text-xs font-normal">
              Debes escribir tu email
            </span>
          )}
          {errrors.notEmail && (
            <span className="text-red-500 text-xs mt-2 font-normal">
              Este no es un email valido
            </span>
          )}
          {errrors.emailOk && (
            <span className="text-blue-500 text-xs mt-2 font-normal">
              Hemos enviado las instrucciones a seguir a tu email
            </span>
          )}
          {errrors.emailInvalid && (
            <span className="text-red-500 text-xs mt-2 font-normal">
              Tu email es invalido
            </span>
          )}
        </div>
        <button
          onClick={sendEmail}
          className="bg-global px-8 mt-6 w-full text-xs text-white py-1 rounded mb-4"
        >
          Enviar
        </button>
        <a href="/" className="text-xs pt-8">
          Volver al inicio
        </a>
      </div>
    </div>
  );
}
