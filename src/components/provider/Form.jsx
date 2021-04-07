import React from "react";
import { ProviderService } from "../../services/provider.service";
import { toast } from "react-toastify";
import { isEmail } from "../../utils/regularExpression";

const Form = ({ setReload, setShowModal, oldProvider }) => {
  const providerService = new ProviderService();
  const [provider, setProvider] = React.useState(values(oldProvider));
  const onChange = (e) => {
    setProvider({ ...provider, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      provider.nombre !== "" &&
      provider.telefono !== "" &&
      provider.email !== "" &&
      provider.direccion !== ""
    ) {
      if (!oldProvider) {
        if (isEmail(provider.email)) {
          providerService.addProvider(provider).then((res) => {
            setShowModal(false);
            setReload(true);
            toast.success(res.message);
          });
        } else {
          toast.error("Email invalido");
        }
      } else {
        providerService.putProvider(provider).then((res) => {
          setShowModal(false);
          setReload(true);
          toast.success(res.messge);
        });
      }
    } else {
      toast.warn("No dejes campos vacios");
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <div>
        <div className="grid grid-rows-2 gap-0">
          <input
            type="text"
            className="hidden"
            defaultValue={provider.id}
            onChange={onChange}
            name="id"
          />
          <label>Nombre</label>
          <input
            className="rounded border border-solid p-2 w-80"
            placeholder="Escribe el nombre"
            defaultValue={provider.nombre}
            name="nombre"
            onChange={onChange}
          />
          <label>Email</label>
          <input
            className="rounded border border-solid p-2 w-80"
            placeholder="Escribe el email"
            defaultValue={provider.email}
            name="email"
            onChange={onChange}
          />
          <label>Telefono</label>
          <input
            className="rounded border border-solid p-2 w-80"
            placeholder="Escribe el telefono"
            defaultValue={provider.telefono}
            name="telefono"
            onChange={onChange}
          />
          <label>Direccion</label>
          <input
            className="rounded border border-solid p-2 w-80"
            placeholder="Escribe la direccion"
            defaultValue={provider.direccion}
            name="direccion"
            onChange={onChange}
          />
        </div>
        <button className="bg-blue-600 p-2 w-28 text-center text-semibold mt-8 text-white rounded-md font-semibold text-xs mr-8">
          {oldProvider ? "Actualizar" : "Agregar"}
        </button>
      </div>
    </form>
  );
};

export default Form;

const values = (oldValues) => {
  return {
    id: null || oldValues?.id,
    nombre: "" || oldValues?.nombre_proveedor,
    email: "" || oldValues?.email,
    telefono: "" || oldValues?.telefono,
    direccion: "" || oldValues?.direccion,
  };
};
